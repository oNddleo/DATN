import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="container">
                    <div className="login-title">
                        <h3>Chào mừng đến với Wingshoes. Đăng nhập ngay!</h3>
                        <div className="login-other">
                            <span>Thành viên mới? <Link to={"/register"}>Đăng ký</Link> tại đây</span>
                        </div>
                    </div>
                    <div className="mod-login">
                        <form>
                            <div className="form-login">
                                <div className="mod-input mod-email">
                                    <label>Địa chỉ email</label>
                                    <input type="text" placeholder="Vui lòng nhập email của bạn" autoComplete="username" />
                                </div>
                                <div className="mod-input mod-password">
                                    <label>Mật khẩu</label>
                                    <input type="password" placeholder="Vui lòng nhập mật khẩu của bạn" autoComplete="password" />
                                </div>
                                <div className="mod-login-forgot"><Link to={"/forgot-password"}>Quên mật khẩu?</Link></div>
                            </div>
                            <div className="mod-login-btn">
                                <button type="submit" className="btn-login">ĐĂNG NHẬP</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default Login;