import React, { Component } from 'react'



class CustomCard extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this)
  }
  onClick() {
    this.props.showModal()
  }
  render() {
    const { src, 'data-index': dataIndex, showModal, ...props } = this.props;

    // console.log('custom card props: ', this.props);
    return (
      <div {...props} data-index={dataIndex} key={dataIndex} className="product-item">
        <div className="item-thumb">
          <a title="Áo Thun Có Cổ Đen AT777">
            <img src={src} className="img-responsive" alt="Áo Thun Có Cổ Đen AT777" />
          </a>
          <div className="overlay-rmore">
            <a className="addcart quickBuy" onClick={this.onClick} href="#">
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div> </div>
        <div className="product-info">
          <h4 className="product-title"><a title="Áo Thun Có Cổ Đen AT777">Áo Thun Có Cổ Đen AT777</a>
          </h4>
          <span className="product-price"> 215.000
            <em style={{ textDecoration: "line-through" }}> 245.000</em>
          </span>
        </div>
      </div>
    );
  }
}

export default CustomCard