import React, { Component } from 'react'
import FilterWrap from 'app/components/common/pagecommon/FilterWrap'
import ProductItemPage from './components/ProductItemPage';
import PaginationWrap from './components/PaginationWrap';
import ProductWidget from './components/ProductWidget';
export default class ShopContent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    let url = this.props;
    return (
      <div className="shop-content">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-8">
              <FilterWrap />
              <div className="space20"></div>
              <ProductItemPage src="newProducts" />
              <PaginationWrap />
            </div>

            <div className="col-md-3 col-sm-4" id="page-right-column">
              <div className="side-widget space50" style={{ marginTop: "30px" }}>
                <h3><span>Tìm kiếm sản phẩm</span></h3>
                <form role="form" className="search-widget" action="" method="post">
                  <input className="form-control" type="text" name="text" placeholder="Từ khóa tìm kiếm" value="" />
                  <button type="submit"><i className="fa fa-search"></i></button>
                </form>
              </div>
              <div className="side-widget">
                <ProductWidget title={"Sản phẩm hot"}/>
              </div>
              <div className="side-widget">
                <ProductWidget title={"Sản phẩm đã xem"}/>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
