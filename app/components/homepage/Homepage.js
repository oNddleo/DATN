import React, { Component } from 'react'
import TopProduct from './components/TopProduct'
import Policy from './components/Policy'
import CardProduct from '../common/card/CardProduct';
export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNewProduct: { title: '', data: '' },
      dataSaleProduct: { title: '', data: '' },
      dataPromoProduct: { title: '', data: '' }
    }
  }
  getNewProduct() {
    let that = this
    io.socket.post('/product/getNewProducts', function (resData, jwRes) {
      if (jwRes.statusCode === 200) {
        console.log('New Product')
        that.state.dataNewProduct.title = 'Sản phẩm mới nhất'
        that.state.dataNewProduct.data = resData.data
        that.setState({ dataNewProduct })
      }
    })
  }
  getSaleProduct() {
    let that = this
    io.socket.post('/product/getSaleProducts', function (resData, jwRes) {
      if (jwRes.statusCode === 200) {
        that.state.dataSaleProduct.title = 'Sản phẩm bán chạy nhất'
        that.state.dataSaleProduct.data = resData.data
        that.setState({ dataSaleProduct })
      }
    })
  }
  getPromoProduct() {
    let that = this
    io.socket.post('/product/getSaleProducts', function (resData, jwRes) {
      if (jwRes.statusCode === 200) {
        that.state.dataPromoProduct.title = 'Sản phẩm khuyến mại'
        that.state.dataPromoProduct.data = resData.data
        that.setState({ dataPromoProduct })
      }
    })
  }
  // componentDidMount() {
  //   console.log('did mount')
  //   this.getNewProduct()
  //   this.getSaleProduct()
  //   this.getPromoProduct()
  // }
  render() {
    // let { dataNewProduct } = this.state
    console.log('state', this.state)
    return (
      <div>
        <div className="slider-wrap slider-carousel">
          <TopProduct />
        </div>
        <Policy />
        <CardProduct title="Sản phẩm mới nhất" src="newProducts" />
        <CardProduct title="Sản phẩm bán chạy nhất" src="saleProducts" />
        <CardProduct title="Sản phẩm khuyến mại" src="promoProducts" />
        {/* <CardProduct data={dataNewProduct} /> */}
        <div className="space20"></div>
      </div >

    )
  }
}
