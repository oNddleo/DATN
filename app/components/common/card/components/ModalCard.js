import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import Slider from 'react-slick'
import { listImagesModalProduct } from 'app/components/common/pageutils/GetListImage'

class ModalCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
        this.closeModal = this.closeModal.bind(this);
    }
    closeModal() {
        this.props.closeModal();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.data) {
            this.setState({data: nextProps.data })
        }
    }
    render() {
        let src = 'modalProducts'
        let { data } = this.state
        return (
            <Modal show={this.props.modal} bsSize="lg" dialogClassName="modal-product" onHide={this.closeModal}>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={this.closeModal}><i className="fa fa-times"></i></button>
                <div className="row">
                    <div className="col-md-5 col-sm-6" >
                        <CustomSlider src={src} />
                    </div>
                    <div className="col-md-7 col-sm-6">
                        <div className="product-single">
                            <div className="ps-header">
                                <span className="badge offer" id="quickBuySaleOff" style={{ display: "none" }}>-0%`${data.promo}%`</span>
                                <h3 id="quickBuyName">{data.productName}</h3>
                                <div className="ps-price" id="quickBuyPrice">{data.pricePromo}</div>
                            </div>
                            <div className="ps-stock"> Tình trạng: <span id="quickBuyStock">{data.status}</span>
                            </div>
                            <div className="line"></div>
                            <div className="row select-wraps" id="">
                                <div className="col-md-12">
                                    <p>Điểm nổi bật:</p>
                                    <p id="quickBuyHighlight">{data.info}</p>
                                </div>
                            </div>
                            <div className="row select-wraps">
                                <div className="col-md-7 col-sm-7"></div>
                                <div className="col-md-5 col-sm-5"></div>
                            </div>
                            <a className="myBtn myBtn-Primary" href="#" id="buyNowModal" have-size="1" product="4096">
                                <i className="fa fa-shopping-cart"></i> Đăng ký mua
                            </a>
                            <a className="myBtn myBtn-Blue hidden-xs" style={{ float: "right" }} href="#" id="quickBuyDetailProduct">Xem chi tiết
                            </a>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}


const CustomSlider = (props) => {
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={`images/${props.src}/abstract0${i + 1}.png`} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        className: "modal-product-slider",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {listImagesModalProduct.map((e, index) => <div key={index}><img src={`images/${props.src}/${e}`} /></div>)}
        </Slider>
    )
}
export default ModalCard
