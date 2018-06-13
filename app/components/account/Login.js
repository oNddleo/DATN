import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="container">
                    <div class="login-title">
                        <h3>Chào mừng đến với Wingshoes. Đăng nhập ngay!</h3>
                        <div class="login-other">
                            <span>Thành viên mới? <a href="#">Đăng kí</a> tại đây</span>
                        </div>
                    </div>
                    <div className="mod-login">
                        <form>
                            <div className="form-login">
                                <div className="mod-input mod-email">
                                    <label>Địa chỉ email</label>
                                    <input type="text" placeholder="Vui lòng nhập email của bạn" />
                                </div>
                                <div className="mod-input mod-password">
                                    <label>Mật khẩu</label>
                                    <input type="password" placeholder="Vui lòng nhập mật khẩu của bạn" />
                                </div>
                                <div class="mod-login-forgot"><a href="#">Quên mật khẩu?</a></div>
                            </div>
                            <div class="mod-login-btn">
                                <button type="submit" class="btn-login">ĐĂNG NHẬP</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default Login;