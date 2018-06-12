import React, { Component } from 'react'
import Slider from 'react-slick'
import {listImagesSlick} from 'app/components/common/pageutils/GetListImage'

export default class TopProduct extends Component {
  render() {
    const settings = {
      className: "top-product-carousel",
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
    };

    return (
      <Slider {...settings}>
        {listImagesSlick.map((e, index) => <CustomSlide key={index} src={`images/slick/${e}`} />)}
      </Slider>
    )
  }
}
class CustomSlide extends Component {
  render() {
    const { src, key, ...props } = this.props;
    return (
      <div {...props} key={key} className="tpc-content">
        <img src={src} className="img-responsive" />
        <div className="tpc-overlay">
          <div className="tpc-overlay-inner">
            <div className="tpc-info">
              <h4><a href="https://4men.com.vn/ao-khoac-nam/ao-khoac-kaki-xanh-den-ak185-3580.html" title="Áo Khoác Kaki Xanh Đen AK185">Áo Khoác Kaki Xanh Đen AK185</a>
              </h4>
              <p>	385.000 </p>
              <a href="https://4men.com.vn/ao-khoac-nam/ao-khoac-kaki-xanh-den-ak185-3580.html" className="Áo Khoác Kaki Xanh Đen AK185">Xem chi tiết</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}