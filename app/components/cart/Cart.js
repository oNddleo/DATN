import React, { Component } from 'react';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.onClick = this.onClick.bind(this)
    }
    onClick() {

    }
    render() {
        return (
            <div className="topcart">
                <span>
                    <i className="fa fa-shopping-cart"></i>
                </span>
                <div className="cart-info">
                    <small>Đã chọn <em className="highlight">
                        <span className="cartTopRightQuantity">0</span> Sản phẩm</em> trong giỏ hàng
                    </small>
                    <div className="cart-top-content">
                        <div className="ci-item">
                            <img src="images/slick/ao-khoac-kaki-den-ak185-3573-p.jpg" style={{width:"80"}} alt="Áo Khoác Kaki Đen AK185" />
                            <div className="ci-item-info">
                                <h5><a href="images/slick/ao-khoac-kaki-den-ak185-3573.html">Áo Khoác Kaki Đen AK185</a></h5>
                                <p>1 x 385.000</p>
                                <div className="ci-edit">
                                    <a href="#" cart="33645" onClick={this.onClick} className="edit fa fa-trash-o"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ci-total">Tổng: 0</div>
                    <div className="cart-btn">
                        <a href="#" title="thanh toan" className="myBtn-Primary">Gửi đơn hàng</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cart;