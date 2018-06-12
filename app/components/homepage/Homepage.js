import React, { Component } from 'react'
import TopProduct from './components/TopProduct'
import Policy from './components/Policy'
import CardProduct from '../common/card/CardProduct';
export default class Homepage extends Component {
  render() {
    return (
      <div>
      <div className="slider-wrap slider-carousel">
        <TopProduct />
      </div>
        <Policy />
        <CardProduct title="Sản phẩm mới nhất" src="newProducts" />
        <CardProduct title="Sản phẩm bán chạy nhất" src="saleProducts" />
        <CardProduct title="Sản phẩm khuyến mại" src="promoProducts" />
        <div className="space20"></div>
      </div>
      
    )
  }
}
