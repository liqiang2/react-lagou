/**
 * Created by qianfeng on 2017/6/19.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';
import './mine.css';
class Mine extends Component {
    constructor(){
        super();
        this.state={
            state:true,
            username:""
        }
        this.logout=this.logout.bind(this);

    }

    logout(){
        this.setState({state:true});
        //localStorage.removeItem("msg");
    }

    componentDidMount(){
        var username=this.props.location.username;
        this.setState({username:username})
        if(username!=="liqiang"){
            this.setState({
                state:false
            })
        }
    }

    render() {

        return (
            <div id="content">
                <div className="logininfo" style={{display:this.state.state?"block":"none"}}>
                    <div className="nologin center">
                        <Link to="/login" className="loginbut" href="" target="_self">登录 / 注册</Link>
                    </div>
                </div>

                <div className="logininfo" style={{display:this.state.state?"none":"block"}}>
                    <div className="haslogin center">
                        <a className="button" href="javascript:;"> 简历&gt; </a>
                        <div className="headcon">
                            <img className="headpic" src="//www.lgstatic.com/images/myresume/default_headpic.png" />
                        </div>
                        <div className="name">{this.state.state?"":"liqiang"}</div>
                    </div>
                </div>

                <div className="buttons">
                    <a className="button deliver" href="">
                        <span>投递</span>
                    </a>
                    <a className="button interview" href="">面试</a>
                    <a className="button invitation" href="">
                        <span>邀约</span>
                    </a>
                    <a className="button collect" href="">收藏</a>
                </div>
                <button onClick={this.logout} className="logout" href="" style={{display: this.state.state?"none":"block"}}>退出登录</button>
            </div>
        );
    }
}

export default Mine;