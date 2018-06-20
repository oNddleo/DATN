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
    let { 'data-index': dataIndex, data, ...props } = this.props;
    console.log('data', this.props)
    return (
      <div {...props} data-index={dataIndex} key={dataIndex} className="product-item">
        <div className="item-thumb">
          <a title={data.productName}>
            <img src={'images/testUpload/612aa517-6687-4fb4-852d-884483b5eaab.jpg'} className="img-responsive" alt={data.productName} />
          </a>
          <div className="overlay-rmore">
            <a className="addcart quickBuy" onClick={this.onClick} href="#">
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div> </div>
        <div className="product-info">
          <h4 className="product-title"><a title={data.productName}>{data.productName}</a>
          </h4>
          <span className="product-price">{data.pricePromo}
            <em style={{ textDecoration: "line-through" }}>{data.priceOriginal}</em>
          </span>
        </div>
      </div>
    );
  }
}

export default CustomCard