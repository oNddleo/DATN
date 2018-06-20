import React, { Component } from 'react'
var NumberFormat = require('react-number-format');
class CustomCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }
  render() {
    let { 'data-index': dataIndex, data, open, ...props } = this.props;
    return (
      <div {...props} data-index={dataIndex} key={dataIndex} className="product-item">
        <div className="item-thumb">
          <a title={data.productName}>
            <img src={data.images[0].path} className="img-responsive" alt={data.productName} />
          </a>
          <div className="overlay-rmore">
            <a className="addcart quickBuy" onClick={() => open(data)} href="#">
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div> </div>
        <div className="product-info">
          <h4 className="product-title"><a title={data.productName}>{data.productName}</a>
          </h4>
          {
            data.quantity == 0 ?
              <span class="product-price"> Hết hàng </span> :
              (
                <span className="product-price"><NumberFormat value={data.pricePromo} displayType={'text'} thousandSeparator={true} prefix={' '} suffix={' '}/> 
                  <em style={{ textDecoration: "line-through" }}><NumberFormat value={data.priceOriginal} displayType={'text'} thousandSeparator={true} /></em>
                </span>)
          }
        </div>
      </div>
    );
  }
}

export default CustomCard