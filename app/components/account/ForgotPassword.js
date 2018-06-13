import React, { Component } from 'react';

class ForgotPassword extends Component {
    render() {
        return (
            <div className="forgot-password">
                <div className="container">
                    <div className="mod-layout">
                        <div className="mod-layout-title">
                            <h2>Quên mật khẩu?</h2>
                        </div>
                        <div className="mod-layout-main">
                            <div className="mod-layout-subtitle">
                                <h3>Nhập địa chỉ email của bạn dưới đây và chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu của bạn.</h3>
                            </div>
                            <div className="forgot">
                                <div className="forgot-form">
                                    <div className="mod-input mod-input-email">
                                        <label>Địa chỉ email</label>
                                        <input type="text" placeholder="Vui lòng nhập email của bạn" value="" autoComplete="username"/>
                                    </div>
                                </div>
                                <div className="space20"></div>
                                <div className="forgot-action">
                                    <button type="button" className="forgot-password-btn">GỬI</button>
                                </div>
                                <div className="space10"></div>
                                <div className="forgot-ft">
                                    <a href="#">Quay lại</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;