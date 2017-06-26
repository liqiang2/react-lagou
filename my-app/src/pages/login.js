/**
 * Created by qianfeng on 2017/6/21.
 */
import React, { Component,PropTypes  } from 'react';
import {Link,browserHistory} from 'react-router';
import './login.css'
class Login extends Component {
    constructor(){
        super();
        this.state={
            phone:""
        }
        this.login=this.login.bind(this);
        this.getPhone=this.getPhone.bind(this);

    }

    getPhone(e){
        this.setState({phone: e.target.value})
    }

    login(e){
        var _phone=e.target.getAttribute('data-phone');
        var user=JSON.parse(localStorage.getItem("msg"));
        var url=`mine`;
        if(user.phone==_phone){
            browserHistory.push({
                pathname:url,
                query:{
                    username:user.name
                }
            })

        }else {
            alert("请输入正确的手机号")
        }



    }


    render() {
        return (
            <div id="login">
                <div className="new_wrapper">
                    <form data-view="loginView">
                        <div className="new_register">
                            <div data-propertyname="username" data-controltype="Phone" style={{display:'block'}}>
                                <input onBlur={this.getPhone} type="text" placeholder="已验证手机/邮箱" className="border_btm r_email top input_warning" />
                            </div>
                            <div data-propertyname="password" data-controltype="Password" style={{display:'block'}}>
                                <div>
                                    <input type="password" placeholder="密码" className="r_psw btm input_warning" maxLength="16" />
                                        <i className="eye"></i>
                                </div>
                            </div>
                        </div>
                        <div id="vcodeWrap" data-propertyname="request_form_verifyCode" data-controltype="VerifyCode" style={{display:'none'}}>
                            <input type="text" id="vcode" name="vcode" tabIndex="3" placeholder="请证明你不是机器人" />
                            <img src="" width="113" height="42" id="vcodeImg" />
                            <a>看不清楚，<em>换一张</em></a>
                        </div>
                        <div data-propertyname="submit" data-controltype="Botton" style={{display:'block'}}>
                            <input onClick={this.login} data-phone={this.state.phone} type="button" className="btn_green" value="登录" />
                            <span data-valid-message="" className="input_tips"></span>
                        </div>

                    </form>
                    <div className="register_text">还没帐号？</div>
                    <Link to="/register" className="btn_green_border">注册</Link>
                </div>
            </div>
        );
    }
}



export default Login;



