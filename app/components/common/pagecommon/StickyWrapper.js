import React, { Component } from 'react'

export default class StickyWrapper extends Component {
    
    render() {
        return (
            <header>
                <nav className="navbar navbar-default">
                    <div className="container" style={{ height: "100%" }}>
                        <div className="row" style={{ height: "100%" }}>
                            <div className="navbar-header">
                                <a className="navbar-brand" href="/" title="thoi trang nam"><img src="logo.png" className="img-responsive" alt="thoi trang nam" /></a>
                            </div>
                            <div className="header-xtra pull-right">
                                <div className="topcart"> <span><i className="fa fa-shopping-cart"></i></span>
                                    <div className="cart-info"> <small>Đã chọn <em className="highlight"><span className="cartTopRightQuantity">0</span> Sản phẩm</em> trong giỏ hàng</small>
                                        <div className="cartTopRightContent"></div>
                                        <div className="ci-total cartTopRightTotal" style={{ display: "none" }}>Tổng: 0</div>
                                        <div className="cart-btn cartTopRightButtons" style={{ display: "none" }}>
                                            <a href="/thanh-toan/step-1.html" title="thanh toan" className="myBtn-Primary">Gửi đơn hàng</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="topsearch"> <span> <i className="fa fa-search"></i> </span>
                                    <form id="searchbox" className="searchtop" action="/tim-kiem.html" method="post">
                                        <input className="search_query form-control" type="text" id="search_query_top" name="text" placeholder="Tìm kiếm" value="" />
                                    </form>
                                </div>
                            </div>
                            <div className="collapse navbar-collapse">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="dropdown menu">
                                            <a href="/ao-nam" title="Ao Nam" className="dropdown-toogle" data-toggle="dropdown">Áo nam</a>
                                            <ul className="mega-menu dropdown-menu">
                                                <li>
                                                    <div>
                                                        <h5>
                                                            <a href="/ao-so-mi-nam.html">Áo sơ mi Nam</a>
                                                        </h5>
                                                        <a href="/ao-so-mi-nam.html">Áo sơ mi HQ</a>
                                                        <a href="/ao-so-mi-nam.html">Áo sơ mi VN</a>
                                                        <a href="/ao-so-mi-nam.html">Áo sơ mi ngắn tay</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown menu">
                                            <a href="/quan-nam" title="Quan Nam">Quần nam</a>
                                            <ul className="mega-menu dropdown-menu">
                                                <li>
                                                    <div>
                                                        <h5>
                                                            <a href="/ao-so-mi-nam.html">Quần JEAN Nam</a>
                                                        </h5>
                                                        <a href="/ao-so-mi-nam.html">Quần Jean skinny</a>
                                                        <a href="/ao-so-mi-nam.html">Quần rách</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="/giay-nam" title="Giay Nam">Giày nam</a>
                                        </li>
                                        <li className="hidden-sm hidden-md"> 
                                            <a href="/khuyen-mai.html" title="khuyen mai">Khuyến mãi 
                                            <span className="nav-badge">Hot</span>
                                            </a> 
                                        </li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
