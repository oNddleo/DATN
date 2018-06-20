import React, { Component } from 'react'
import TopProduct from './components/TopProduct'
import Policy from './components/Policy'
import CardProduct from '../common/card/CardProduct';
export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNewProduct: { title: '', products: [] },
      dataSaleProduct: { title: '', products: [] },
      dataPromoProduct: { title: '', products: [] }
    }
  }
  getNewProduct() {
    let that = this
    io.socket.post('/product/getNewProducts', function (resData, jwRes) {
      if (jwRes.statusCode === 200) {
        that.state.dataNewProduct.title = 'Sản phẩm mới nhất'
        that.state.dataNewProduct.products = resData.data
        that.setState({ dataNewProduct: that.state.dataNewProduct })
      }
    })
  }
  getSaleProduct() {
    let that = this
    io.socket.post('/product/getSaleProducts', function (resData, jwRes) {
      if (jwRes.statusCode === 200) {
        that.state.dataSaleProduct.title = 'Sản phẩm bán chạy nhất'
        that.state.dataSaleProduct.products = resData.data
        that.setState({ dataSaleProduct: that.state.dataSaleProduct })
      }
    })
  }
  getPromoProduct() {
    let that = this
    io.socket.post('/product/getPromoProducts', function (resData, jwRes) {
      if (jwRes.statusCode === 200) {
        that.state.dataPromoProduct.title = 'Sản phẩm khuyến mại'
        that.state.dataPromoProduct.products = resData.data
        that.setState({ dataPromoProduct: that.state.dataPromoProduct })
      }
    })
  }
  componentWillMount() {
    this.getNewProduct()
    this.getSaleProduct()
    this.getPromoProduct()
  }
  render() {
    let { dataNewProduct, dataSaleProduct, dataPromoProduct } = this.state
    return (
      <div>
        <div className="slider-wrap slider-carousel">
          <TopProduct />
        </div>
        <Policy />
        <CardProduct data={dataNewProduct} />
        <CardProduct data={dataNewProduct} />
        <CardProduct data={dataNewProduct} />
        <div className="space20"></div>
      </div >

    )
  }
}
