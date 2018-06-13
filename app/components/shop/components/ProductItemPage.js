import React, { Component } from 'react'
import CustomCard from 'app/components/common/card/components/CustomCard'
import ModalCard from 'app/components/common/card/components/ModalCard'


class ProductItemPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.showModal = this.showModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }
    showModal() {
        // console.log("show modal")
        this.setState({ showModal: true })
    }
    closeModal() {
        this.setState({ showModal: false })
    }
    render() {
        let arr = [1, 2, 3, 4, 5, 6, 7];
        let { src } = this.props;
        return (
            <div className="row" id="product-items">
                {arr.map((index) => {
                    return (
                        <div className="product-item col-md-4 col-sm-6" key={index}>
                            <CustomCard key={index} src={`images/${src}/ao-thun-co-co-den-at777-9199-p.png`} showModal={this.showModal} />
                        </div>)
                })}
                <ModalCard closeModal={this.closeModal} showModal={this.state.showModal} />
                
            </div>
        );
    }
}

export default ProductItemPage;