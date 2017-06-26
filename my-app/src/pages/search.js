/**
 * Created by qianfeng on 2017/6/19.
 */
import React, { Component } from 'react';
import './search.css'
import JobList from '../components/JobList';
import History from '../components/History';
import City from '../components/City';
import jquery from 'jquery';

class Search extends Component {
    constructor(){
        super();
        this.state = {
            pageNo:0,
            pageSize:15,
            arr:[],
            isShowLoadmore:false,
            searchContent:"",
            history:[],
            showCity:false,
            showSearch:true,
            city:"全国"
        }
        this.getData=this.getData.bind(this);
        this.loadMore=this.loadMore.bind(this);
        this.onSearch=this.onSearch.bind(this);
        this.getSearchContent=this.getSearchContent.bind(this);
        this.showCity=this.showCity.bind(this);
        this.chooseCity=this.chooseCity.bind(this);
    }

    getData(){
        var _this=this;
        var url="https://m.lagou.com/search.json?city=%E5%85%A8%E5%9B%BD&positionName=%E5%89%8D%E7%AB%AF&pageNo="+this.state.pageNo+"&pageSize="+this.state.pageSize;
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

    }

    getSearchContent(e){
        var a=e.target.value;
        this.setState({searchContent:a})
        this.setState((prev)=>{
            prev.history.push(a)
        })
        if(a==""){
            this.setState({isShowLoadmore:false})
        }
    }

    onSearch(e){
        var content=this.refs.myInput.getAttribute("data-content");
        var _this=this;
        this.setState({isShowLoadmore:true});
        var url="https://m.lagou.com/search.json?city="+this.state.city+"&positionName="+content+"&pageNo=1&pageSize=15";
        jquery.get(url,function(res){
            var result=res.content.data.page.result;
            _this.setState({arr:_this.state.arr.concat(result)})

        })

    }

    showCity(){
        this.setState({showCity:true,showSearch:false})
    }

    chooseCity(e){
        var a=e.target.getAttribute('data-item');
        this.setState({city:a,showCity:false,showSearch:true})
    }

    render() {
        var _this = this;
        var historyItem=this.state.history.map(function(elem,index){
            return <History list={elem} key={index} id={index} />
        })

        var lists=this.state.arr.map(function(elem,index){
            return <JobList list={elem} key={index} />
        })
        return (
        <div>
            <City isShow={this.state.showCity} chooseCity={this.chooseCity}/>
            <div  id="content" style={{padding:0,display:this.state.showSearch?"block":"none"}}>
                <div className="linputer">
                    <div onClick={this.showCity} className="lbutton">
                        <span className="city">{this.state.city}</span>
                        <span className="cityicon"></span>
                    </div>
                    <div className="rinput">
                        <input onBlur={this.getSearchContent} className="inputer" type="text" placeholder="搜索职位或公司" />
                        <span onClick={this.onSearch}  ref="myInput" data-content={this.state.searchContent} className="search" ><em className="searchicon"></em></span>
                    </div>
                </div>
                <div className="listcon">
                    <ul style={{display:this.state.isShowLoadmore?"none":"block"}} className="history">
                        {historyItem}
                    </ul>
                    <div style={{display:this.state.isShowLoadmore?"block":"none"}} className="custominfo none">
                        将搜索地区和关键词设为定制条件
                    </div>
                    <ul className="list" style={{display:this.state.isShowLoadmore?"block":"none"}}>
                        {lists}
                        <li onClick={this.loadMore} style={{display:this.state.isShowLoadmore?"block":"none"}} className="activeable list-more" >加载更多</li>
                    </ul>
                </div>
            </div>
        </div>
        );
    }
}

export default Search;

