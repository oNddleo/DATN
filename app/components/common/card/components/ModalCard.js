import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import Slider from 'react-slick'
import { listImagesModalProduct } from 'app/components/common/pageutils/GetListImage'



class ModalCard extends Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }
    closeModal() {
        this.props.closeModal();
    }
    render() {

        let src = 'modalProducts'
        let { showModal } = this.props;
        // console.log('...modal props', this.props)
        return (
            <Modal show={showModal} bsSize="lg" dialogClassName="modal-product" onHide={this.closeModal}>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={this.closeModal}><i className="fa fa-times"></i></button>
                <div className="row">
                    <div className="col-md-5 col-sm-6" >
                        <CustomSlider src={src} />
                    </div>
                    <div className="col-md-5 col-sm-6">
                        <div className="product-single">
                            <div className="ps-header">
                                <span className="badge offer" id="quickBuySaleOff" style={{ display: "none" }}>-0%</span>
                                <h3 id="quickBuyName">Áo Thun Có Cổ Trắng AT777</h3>
                                <div className="ps-price" id="quickBuyPrice">215,000</div>
                            </div>
                            <div className="ps-stock"> Tình trạng: <span id="quickBuyStock">Còn hàng</span>
                            </div>
                            <div className="line"></div>
                            <div className="row select-wraps" id="">
                                <div className="col-md-12">
                                    <p>Điểm nổi bật:</p>
                                    <p id="quickBuyHighlight">Áo Vest Cao Cấp Xám Chuột Đậm AV2L1054 với form áo body ôm vừa vặn cơ thể, tạo vẻ đẹp trẻ trung, nam tính cho phái mạnh.Thiết kế cách tân hiện đại với kiểu áo 1 nút, cổ áo ve nhỏ phối viền đen cá tính. Có túi nắp hai bên hông, túi ngực cùng phối viền đồng màu, khiến bộ vest hài hòa, phong cách
                                        - Màu xám chuột đậm thời trang, hợp mốt, tạo vẻ sang trọng cho quý ông. Chất liệu vải âu cao cấp, có lớp lót bên trong, bền đẹp, không phai màu, dễ giặt ủi.
                                </p>
                                </div>
                            </div>
                            <div className="row select-wraps">
                                <div className="col-md-7 col-sm-7"></div>
                                <div className="col-md-5 col-sm-5"></div>
                            </div>
                            <a className="myBtn myBtn-Primary" href="javascript:void(0)" id="buyNowModal" have-size="1" product="4096">
                                <i className="fa fa-shopping-cart"></i> Đăng ký mua
                            </a>
                            <a className="myBtn myBtn-Blue hidden-xs" style={{ float: "right" }} href="/ao-vest-cao-cap-xam-chuot-dam-av2l1054-309.html" id="quickBuyDetailProduct">Xem chi tiết
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
