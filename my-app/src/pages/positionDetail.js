/**
 * Created by qianfeng on 2017/6/20.
 */
import React, { Component,PropTypes } from 'react';

import './positionDetail.css'


class PositionDetail extends Component {

    constructor(){
        super();
        this.state={
            obj:{}
        }
        this.toHome=this.toHome.bind(this);
    }

    toHome(){

        this.context.router.push("/");
    }

    componentDidMount(){
       var positionid=this.props.location.pathname.slice(6);
        var detail= JSON.parse(localStorage.getItem(positionid));
        this.setState({obj:detail})
    }

    render() {


        return (
            <div>
                <header id="header">职位详情
                    <div className="left"><span className="corner"></span></div>
                    <div onClick={this.toHome} className="right"><span className="corner"></span></div>
                </header>
                <div id="content">
                    <div className="postitle">
                        <h2 className="title">{this.state.obj.positionName}</h2>
                        <div className="collicon activeable">
                            <span className="icon notcoll"></span>
                            <span className="text">未收藏</span>
                        </div>
                    </div>

                    <div className="detail">
                        <div className="items">
                            <span className="item salary">
                                <em className="icon"></em>
                                <span className="text">{this.state.obj.salary}</span>
                            </span>
                            <span className="item workaddress">
                                <em className="icon"></em>
                                <span className="text">{this.state.obj.city}</span>
                            </span>
                            <span className="item jobnature">
                                <em className="icon"></em>
                                <span className="text">实习</span>
                            </span>
                            <span className="item workyear">
                                <em className="icon"></em>
                                <span className="text">不限</span>
                            </span>
                            <span className="item education">
                                <em className="icon"></em>
                                <span className="text">本科及以上</span>
                            </span>
                        </div>
                        <div className="temptation">职位诱惑：一日三餐，领导NICE</div>
                    </div>

                    <div className="company activeable">
                        <img src={this.state.obj.imgsrc} alt="" className="logo" />
                            <div className="desc">
                                <div className="dleft">
                                    <h2 className="title">{this.state.obj.companyName}</h2>
                                    <p className="info">移动互联网,电子商务/ C轮/ 150-500人</p>
                                </div>
                                <span className="dright"></span>
                            </div>
                    </div>

                    <div className="positiondesc">
                        <header className="header">
                            职位描述
                        </header>
                        <div className="content">
                            <p><span className="Apple-style-span"><span className="Apple-style-span">工作职责：<span className="Apple-converted-space">&nbsp;</span><br/>1. 负责合同、规章、法律咨询的初审、记录、以及文件归档。<span className="Apple-converted-space">&nbsp;</span><br/>2. 法规、案例等相关材料的搜集、整理。<span className="Apple-converted-space">&nbsp;</span><br/>3. 对相关法律问题进行信息检索。<span className="Apple-converted-space">&nbsp;</span><br/>4. 公司证照的管理。<span className="Apple-converted-space">&nbsp;</span><br/>5. 领导交代的事情<span className="">其他</span>。<span className="Apple-converted-space">&nbsp;</span><br/><br/>岗位要求：<span className="Apple-converted-space">&nbsp;</span><br/>1. 正规院校法律专业毕业，具有专业的法律基础及法律素养，能够运用所学知识解决实际问题。<span className="Apple-converted-space">&nbsp;</span><br/>2. 思维严谨，有相关工作经验，对工作认真负责，具有独立思考问题、客观分析问题的能力。<span className="Apple-converted-space">&nbsp;</span><br/>3. 英语较流利，能够进行基本的听、说、读、写能力。<span className="Apple-converted-space">&nbsp;</span><br/>4. 具有良好的沟通能力与较强的团队合作意识。</span></span></p>
                        </div>
                    </div>

                    <div className="positioneval">
                        <div className="eval-title">
                            面试评价
                            <span id="total">(<span>0</span>)</span>
                        </div>
                        <ul className="list"><li className="list-item-empty list-item">暂无面试评价</li></ul>
                        <a className="eval-all" href="" style={{display: "none"}}></a>
                    </div>
                    <div className="deliver" id="deliver_resume">投个简历</div>
                </div>
            </div>

        );
    }
}

PositionDetail.contextTypes={
    router:PropTypes.object
}

export default PositionDetail;



