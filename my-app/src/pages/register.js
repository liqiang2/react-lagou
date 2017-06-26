/**
 * Created by qianfeng on 2017/6/21.
 */
import React, { Component,PropTypes } from 'react';
import {Link} from 'react-router';

import './register.css'

class Register extends Component {
    constructor(){
        super();
        this.state={
            src:"https://passport.lagou.com/vcode/create?from=register&amp;refresh=1498027901251",
            phone:"",
            booler:false,
            name:""
        }
        this.refreshVcode=this.refreshVcode.bind(this);
        this.onRegister=this.onRegister.bind(this);
        this.getPhone=this.getPhone.bind(this);
        this.getName=this.getName.bind(this);
    }

    //更新验证码
    refreshVcode(){
        var rand=Math.floor(Math.random()*1000000);
        var src="https://passport.lagou.com/vcode/create?from=register&amp;refresh=1498027"+rand;
        this.setState({src:src})
    }

    //获取注册的电话
    getPhone(e){
        this.setState({
            phone: e.target.value,

        })
    }

    //获取用户名
    getName(e){
        this.setState({name:e.target.value})
    }

    //注册
    onRegister(e){

        var _phone=e.target.getAttribute('data-phone');
        var _name=e.target.getAttribute('data-name');

        var regPhone=new RegExp("^[0-9]{11}$");
        var result=regPhone.test(_phone);
        //var a=e.target.getAttribute('data-num');
        //console.log(a)
        if(result){
            var obj={name:_name,phone:_phone};
            var jsonStr=JSON.stringify(obj);
            localStorage.setItem("msg",jsonStr);
            this.context.router.push("/login");
        }else{
            this.setState({booler:"true"})
        }

    }

    render() {
        return (
            <div id="_register">
                <div className="new_wrapper">
                    <form id="registerForm" data-view="phoneRegister">
                        <div className="new_register">
                            <input type="hidden" id="otype" value="" />
                                <div data-propertyname="phone" data-controltype="Phone" style={{display:'block'}}>
                                    <input onBlur={this.getPhone} type="text" placeholder="手机号" className="border_btm r_phone top btm input_warning" />
                                    <span data-valid-message="" className="input_tips">{this.state.booler ? "输入不正确":""}</span>
                                </div>
                                <div id="vcodeWrap" data-propertyname="request_form_verifyCode" data-controltype="VerifyCode" style={{display:'block'}}>
                                    <input onBlur={this.getName} type="text" id="vcode" name="vcode" tabIndex="3" className="top btm input_warning" placeholder="请输入用户名"  />
                                    <img onClick={this.refreshVcode} className="yzm" src={this.state.src} />
                                    <a onClick={this.refreshVcode}>看不清楚，<em>换一张</em></a>
                                </div>
                                <div data-propertyname="phoneVerificationCode" data-controltype="PhoneVerificationCode" style={{display:'block'}}>
                                    <input type="text" tabIndex="2" className="top btm input_warning" id="vcode" placeholder="短信验证码"  />
                                        <input type="button" className="btn_active r_getVcode btn_disabled" value="获取" />
                                </div>
                        </div>

                        <div className="reg_pwd" data-propertyname="password" data-controltype="Password" style={{display:'block'}}>
                            <div>
                                <input type="password" className="r_psw" placeholder="设置6-16位密码" maxLength="16" />
                                    <i className="eye"></i>
                            </div>
                        </div>

                        <div data-propertyname="submit" data-controltype="Botton" style={{display:'block'}}>
                            <input onClick={this.onRegister} data-name={this.state.name} data-phone={this.state.phone} type="button" className="btn_green" id="register" value="注册" />
                        </div>
                    </form>
                    <div className="register_text">已有帐号？</div>
                    <Link to="/login" href="" className="btn_green_border">登录</Link>
                    <div className="register_text">点击注册，即代表您同意<a href="http://www.lagou.com/privacy.html" target="_blank">《拉勾用户协议》</a></div>
                </div>
            </div>
        );
    }
}

Register.contextTypes={
    router:PropTypes.object
}

export default Register;


