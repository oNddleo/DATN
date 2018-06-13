import React, { Component } from 'react';

class VertifyItem extends Component {
    render() {
        return (
            <div className="package">
                <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                    <div className="cart-item">
                        <div className="cart-item-inner">
                            <div className="col-md-8 cart-item-left">
                                <div className="img-wrap"><a href="" id="" className="automation-link-from-image-to-prod">
                                    <img className="img" src="images/slick/ao-khoac-jean-den-ak196-5318-p.jpg" alt="item" />
                                </a>
                                </div>
                                <div className="content">
                                    <a id="" href="" className="title">Áo khoác jean đen AK196</a>
                                    <div className="operations">
                                        <span>
                                            <i className="fa fa-trash-o"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 cart-item-middle">
                                <p className="current-price">10.500 ₫</p>
                                <p className="origin-price">20.000 ₫</p>
                                <p className="promotion-ratio">-48%</p>
                            </div>
                            <div className="col-md-2 cart-item-right">
                                <div className="minus-quantity item">
                                    <span><i className="fa fa-minus"></i></span>
                                </div>
                                <div className="quantity item">
                                    <input className="item-quantity" defaultValue="1" />
                                </div>
                                <div className="plus-quantity item">
                                    <span><i className="fa fa-plus"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default VertifyItem;