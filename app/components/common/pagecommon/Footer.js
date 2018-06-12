import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="clearfix"></div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 widget-footer">
                                <img src="/logo.png" className="img-responsive space10" alt="" style={{ width: "75%" }} />
                                <p>Thương hiệu thời trang nam Wingshoes® <br /> Chuyên các dòng sản phẩm thời trang nam: Quần jean, quần tây, quần kaki, áo sơ mi, áo khoác, áo vest, áo thun, phụ kiện nam,...</p>
                                <div className="clearfix"></div>
                                {/* <div className="col-md-12 col-sm-12">
                                    <div className="fb-like fb_iframe_widget" data-href="/" data-send="false" data-layout="button_count" data-width="100" data-show-faces="true" data-font="arial" fb-xfbml-state="rendered" fb-iframe-plugin-query=""><span style={{ verticalAlign: "bottom", width: "84px", height: "20px" }}>
                                        <iframe name="fd922d84669958" width="100px" height="1000px" frameBorder="0" allowtransparency="true" allowFullScreen="true" scrolling="no" allow="encrypted-media" title="fb:like Facebook Social Plugin" src="" style={{ border: "none", visibility: "visible", width: "84px", height: "20px" }} className="">
                                        </iframe>
                                    </span></div>
                                    <div id="___plusone_0" style={{ textIndent: "0px", margin: "0px", padding: "0px", background: "transparent", borderStyle: "none", float: "none", lineHeight: "normal", fontSize: "1px", verticalAlign: "baseline", display: "inline-block", width: "32px", height: "20px" }}>
                                        <iframe ng-non-bindable="" frameBorder="0" hspace="0" marginHeight="0" marginWidth="0" scrolling="no" style={{ position: "static", top: "0px", width: "32px", margin: "0px", borderStyle: "none", left: "0px", visibility: "visible", height: "20px" }} tabIndex="0" vspace="0" width="100%" id="I0_1527991869574" name="I0_1527991869574" src="/" data-gapiattached="true" title="G+"></iframe> 
                                    </div>
                                </div>
                                <div className="clearfix"></div> */}
                            </div>
                            <div className="col-md-3 col-sm-3 widget-footer">
                                <h5>Liên hệ Wingshoes(R)</h5>
                                <ul className="list-footer-contact">
                                    <li> <i className="fa fa-envelope-o"></i> Mua hàng: <a href="mailto:mail@wingshoes.com.vn" rel="nofollow">saleonline@wingshoes.com.vn</a> </li>
                                    <li> <i className="fa fa-envelope-o"></i> Liên hệ góp ý: <a href="mailto:info@wingshoes.com.vn" rel="nofollow">info@wingshoes.com.vn</a> </li>
                                    <li> <i className="fa fa-map-marker"></i>Dân Hoà, Thanh Oai, Tp.HN <br /><em>(<a href="tel:+84915834454" title="hotline cn1" rel="nofollow">0915 834 454</a>)</em> </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-3 widget-footer">
                                <div style={{ padding: "10px", border: "1px solid #efefef", clear: "both" }}>
                                    <h5>Đăng ký nhận email khuyến mãi</h5>
                                    <p>Thông tin được bảo mật trên hệ thống Wingshoes</p>
                                    <form action="/dang-ky-nhan-mail-khuyen-mai.html" role="form" method="post" id="register-promotion" className="newsletter">
                                        <div className="form-group">
                                            <input className="grey newsletter-input" size="80" id="email-register-promotion" type="text" name="email" placeholder="Email của bạn" />
                                            <button type="submit" name="submitNewsletter" id="btn-register-promotion" className="myBtn-Primary" style={{ width: "100%" }}>
                                                <i className="fa fa-envelope-o"></i> Đăng ký
                                        </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 widget-footer">
                                <h5>Thông tin</h5> <ul className="widget-tags">
                                    <li><a href="/tu-van-thoi-trang.html" title="tu van thoi trang">Tư vấn thời trang</a></li>
                                    <li><a href="/cach-phoi-do-nam.html" title="cach phoi do nam">Cách phối đồ nam</a></li>
                                    <li><a href="/tin-tuc-4men.html" title="tin tuc wingshoes">Tin tức Wingshoes</a></li> </ul>
                            </div>
                        </div>
                    </div>
                </footer >
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <ul className="flinks"> <li><a href="/gioi-thieu.html" title="gioi thieu">Giới thiệu</a></li>
                                    <li><a href="/lien-he.html" title="lien he">Liên hệ</a></li>
                                    <li><a href="/chinh-sach-khach-vip.html" title="chinh sach khach vip">Chính sách khách vip</a></li>
                                    <li><a href="/cau-hoi-thuong-gap.html" title="cau hoi thuong gap">Câu hỏi thường gặp</a></li>
                                    <li><a href="/chinh-sach-bao-mat.html" title="chinh sach bao mat">Chính sách bảo mật</a></li>
                                    <li><a href="/chinh-sach-cookie.html" title="chinh sach cookie">Chính sách cookie</a></li> </ul>
                                <br style={{ clear: "both" }} />
                                <p style={{ paddingTop: "10px", paddingBottom: "30px" }}>Copyright 2015 · by <a href="/" title="Wingshoes">Wingshoes(R)</a> All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
