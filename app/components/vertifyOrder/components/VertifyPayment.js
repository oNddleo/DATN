import React, { Component } from 'react';

class VertifyPayment extends Component {
    render() {
        return (
            <div className="payment">
                <div className="btn-payment">
                    <button className="btn-checkout">TIẾN HÀNH THANH TOÁN</button>
                </div>
                <div className="checkout-address">
                    <div className="address-heading">
                        <p className="address-hat">Thanh toán vận chuyển</p>
                        <div className="address-title-container">
                            <span className="address-title">Giao hàng tới</span>
                            <a href="#" className="address-edit">CHỈNH SỬA</a>
                        </div>
                    </div>
                    <div className="address-info">
                        <div className="address-name">Nguyễn Đức Long</div>
                        <div className="address-info-item address-info-value">Thanh Oai Hà Nội</div>
                        <div className="address-info-item address-info-phone">0915834454</div>
                    </div>
                </div>
                <div className="summary-session">
                    <div className="summary-session-heading">Thông tin đơn hàng</div>
                    <div className="summary-session-content">
                        <div className="checkout-summary">
                            <div className="checkout-summary-rows">
                                <div className="checkout-summary-row">
                                    <div className="checkout-summary-label">Tạm tính  (2 Sản phẩm)</div>
                                    <div className="checkout-summary-value">338.000 ₫</div>
                                </div>
                                <div className="checkout-summary-row">
                                    <div className="checkout-summary-label">Phí giao hàng </div>
                                    <div className="checkout-summary-value">MIỄN PHÍ</div></div>
                            </div>
                            <div className=" checkout-order-total">
                                <div className="checkout-order-total-row">
                                    <div className="checkout-order-total-title">Tổng cộng</div>
                                    <div className="checkout-order-total-fee">338.000 ₫
                                        <small className="checkout-order-total-fee-tip">Đã bao gồm VAT (nếu có)</small>
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

export default VertifyPayment;