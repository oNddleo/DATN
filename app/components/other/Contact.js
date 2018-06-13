import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 contact-panel">
                            <div class="contact-heading space40">
                                <h5>
                                    <span>Gửi liên hệ Wingshoes<sup>®</sup>
                                    </span>
                                </h5>
                            </div>
                            <div className="form-contact">
                                <form>
                                    <div className="mod-login">
                                        <div className="mod-input mod-name">
                                            <label>Tên</label>
                                            <input type="text" placeholder="Họ tên" />
                                        </div>
                                        <div className="mod-input mod-email">
                                            <label>Địa chỉ email</label>
                                            <input type="text" placeholder="Vui lòng nhập email của bạn" autoComplete="username" />
                                        </div>
                                        <div className="mod-input mod-phone">
                                            <label>Số điện thoại</label>
                                            <input type="text" placeholder="Vui lòng nhập số điện thoại của bạn" autoComplete="phone" />
                                        </div>
                                        <div className="mod-input mod-address">
                                            <label>Địa chỉ</label>
                                            <input type="text" placeholder="Vui lòng nhập địa chỉ của bạn" autoComplete="address" />
                                        </div>
                                        <div className="mod-input mod-content">
                                            <label>Nội dụng liên hệ</label>
                                            <textarea type="text" placeholder="Vui lòng nhập nội dung liên hệ" autoComplete="content" />
                                        </div>
                                        <div className="mod-login-btn">
                                            <button type="submit" className="btn-login">GỬI LIÊN HỆ</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4 contact-panel">
                            <div className="contact-info">
                                <div className="contact-heading space40">
                                    <h5><span>Thông tin liên hệ</span></h5>
                                </div>
                                <div class="media-list">
                                    <div class="media">
                                        <i class="pull-left fa fa-home"></i>
                                        <div class="media-body">
                                            <strong>Địa chỉ:</strong>< br />Dân Hoà, Thanh Oai, Hà Tây
                                    </div>
                                    </div>
                                    <div class="media">
                                        <i class="pull-left fa fa-phone"></i>
                                        <div class="media-body">
                                            <strong>Điện thoại:</strong><br />0915834454
                                        </div>
                                    </div>
                                    <div class="media">
                                        <i class="pull-left fa fa-envelope-o"></i>
                                        <div class="media-body">
                                            <strong>Email:</strong><br />info@wingshoes.com.vn
                                    </div>
                                    </div>
                                    <div class="contact-details">
                                        <p> Thương hiệu thời trang nam Wingshoes® Chuyên các dòng sản phẩm thời trang nam: Quần jean, quần tây, quần kaki, áo sơ mi, áo khoác, áo vest, áo thun, phụ kiện nam,...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;