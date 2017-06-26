import React, { Component } from 'react';
import {Link} from 'react-router';
import  PropTypes from 'prop-types';
import JobList from '../components/JobList';
import PositionDetail from './positionDetail';
import jquery from 'jquery';
import  './job.css';


class Job extends Component {
    constructor(){
        super();
        this.state = {
            pageNo:0,
            pageSize:15,
            arr:[]
        }
        this.getData=this.getData.bind(this);
        this.loadMore=this.loadMore.bind(this);
    }

    componentDidMount(){
        this.getData();
    };

    getData(){
        var _this=this;
        var url="https://m.lagou.com/listmore.json?pageNo="+this.state.pageNo+"&pageSize="+this.state.pageSize;
        jquery.get(url,function(res){
            var result=res.content.data.page.result;
            _this.setState({arr:_this.state.arr.concat(result)})

        })
    }

    loadMore(){
        this.setState({
            pageNo:++this.state.pageNo,
            pageSize:15
        });
        this.getData();
        console.log(123456)
    }

    render() {

        var lists=this.state.arr.map(function(elem,index){
                return <JobList list={elem} key={index} />
        })
        return (
            <div id="content" style={{padding:0}}>
                <div className="custom-info none" style={{display:'block'}}>
                    <span className="info">10秒钟定制职位</span>
                    <Link to="/login" className="go">
                        <em className="icon"></em>
                        <em className="text">去登录</em>
                    </Link>
                </div>
                <ul className="list">
                    {lists}
                    <li className="activeable list-more" onClick={this.loadMore}>加载更多</li>
                </ul>

                <div id="copyright">
                    <p>©2015 lagou.com, all right reserved </p>
                    <div className="copyright-item">
                        <span className="phone active">移动版&nbsp;·&nbsp;</span>
                        <span className="computer">电脑版&nbsp;·&nbsp;</span>
                        <a href="#header">回顶部</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default Job;


