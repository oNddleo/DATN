import React, { Component } from 'react'

export default class Policy extends Component {
    render() {
        return (
            <div id="policy" className="policy-item">
                <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 col-xs-6">
                                <div className="pi-wrap text-center">
                                    <i className="fa fa-thumbs-o-up"></i>
                                    <h4>Cam kết chất lượng<span>Hoàn tiền nếu không hài lòng</span></h4>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-6">
                                <div className="pi-wrap text-center">
                                    <i className="fa fa-money"></i> <h4>Giá cả cạnh tranh<span>Giảm 5 - 20% cho khách VIP</span>
                                    </h4>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-6">
                                <div className="pi-wrap text-center">
                                    <i className="fa fa-plane"></i> <h4>Giao hàng toàn quốc<span>Miễn phí hóa đơn từ 1 triệu</span></h4>
                                </div> </div>
                            <div className="col-md-3 col-sm-3 col-xs-6">
                                <div className="pi-wrap text-center">
                                    <i className="fa fa-clock-o"></i>
                                    <h4>Giờ mở cửa hàng<span>Mở: 8:30AM - Đóng: 22:00PM</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
