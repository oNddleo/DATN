import React, { Component } from 'react'

export default class Menu extends Component {

    render() {
        return (
            <div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="tb_center pull-left">
                                <ul>
                                    <li><i className="fa fa-phone"></i><a href="tel:+84915384454">0915.384.454</a>
                                    </li>
                                    <li className="hidden-sm hidden-md"><i className="fa fa-envelope-o"></i>
                                        <a href="mailto:mail@wingshoes.com.vn">mail@wingshoes.com.vn</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tb_right pull-right">
                                <ul>
                                    <li className="hidden-xs hidden-sm">
                                        <div className="tbr-info">
                                            <span>
                                                <a href="/contact" title="lien he">Liên hệ</a>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="hidden-xs">
                                        <div className="tbr-info"> <span>
                                            <a href="/guide">Hướng dẫn mua hàng</a>
                                        </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="tbr-info">
                                            <span>
                                                <a href="/introduction" title="gioi thieu">Giới thiệu</a>
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="tbr-info">
                                            <span>
                                                <a href="/login" title="login">Đăng nhập</a>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
