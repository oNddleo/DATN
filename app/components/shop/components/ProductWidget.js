import React, { Component } from 'react';
import ProductItemRelate from './ProductItemRelate'
class ProductWidget extends Component {
    render() {
        let { title } = this.props
        return (
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <div className="related-posts">
                        <h5>{title}</h5>
                        <ProductItemRelate />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductWidget;
