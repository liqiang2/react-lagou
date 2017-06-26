/**
 * Created by qianfeng on 2017/6/19.
 */
import React, { Component } from 'react';
import {Link,IndexLink}  from 'react-router';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="footer-tab-custom selected"><IndexLink to="/"><span className="icon selected"></span><span className="text">职位</span></IndexLink></div>
                <div className="footer-tab-search"><Link to="/search"><span className="icon"></span><span className="text">搜索</span></Link></div>
                <div className="footer-tab-mine"><Link to="/mine"><span className="icon"></span><span className="text">我的</span></Link></div>
            </div>
        );
    }
}

export default Footer;
