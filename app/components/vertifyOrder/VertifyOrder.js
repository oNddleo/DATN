import React, { Component } from 'react';
import VertifyItem from './components/VertifyItem'
import VertifyPayment from './components/VertifyPayment';
class VertifyOrder extends Component {
    render() {
        return (
            <div className="shop-container vertify-order">
                <div className="container">
                    <div className="row">
                        <div className="space20"></div>
                        <div className="col-md-8 col-sm-6">
                            <div id="listHeader" className="list-header">
                                <div className="col-md-8 list-header-left">3 sản phẩm</div>
                                <div className="col-md-2 list-header-middle">GIÁ</div>
                                <div className="col-md-2 list-header-right">SỐ LƯỢNG</div>
                            </div>
                            <VertifyItem />
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <VertifyPayment />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VertifyOrder;