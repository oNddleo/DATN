import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Register extends Component {
    render() {
        return (
            <div className="login register">
                <div className="container">
                    <div className="login-title">
                        <h3>Tạo tài khoản Wingshoes</h3>
                        <div className="login-other">
                            <span>Bạn đã là thành viên?<Link to={"/login"}> Đăng nhập</Link> tại đây</span>
                        </div>
                    </div>
                    <div className="form-login">
                        <form>
                            <div className="mod-login">
                                <div className="mod-input mod-email">
                                    <label>Địa chỉ email</label>
                                    <input type="text" placeholder="Vui lòng nhập email của bạn" autoComplete="username"/>
                                </div>
                                <div className="mod-input mod-password">
                                    <label>Mật khẩu</label>
                                    <input type="password" placeholder="Tối thiểu 6 kí tự bao gồm cả chữ và số" autoComplete="password"/>
                                </div>
                                <div className="mod-input mod-repassword">
                                    <label>Nhập lại mật khẩu</label>
                                    <input type="password" placeholder="Vui lòng nhập lại mật khẩu" autoComplete="repassword"/>
                                </div>
                                <div className="mod-input mod-name">
                                    <label>Tên</label>
                                    <input type="text" placeholder="Họ tên" />
                                </div>
                                <div className="mod-login-btn">
                                    <button type="submit" className="btn-login">ĐĂNG KÝ</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Register;