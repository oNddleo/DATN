import React, { Component } from 'react'
import Slider from 'react-slick'
import CustomCard from './components/CustomCard'
// import { getListImages } from 'app/components/common/pageutils/GetListImage'
import ModalCard from './components/ModalCard'

class CardProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      detail: {}
    }
    this.openModel = this.openModel.bind(this)
    this.closeModal = this.closeModal.bind(this)

  }
  openModel(data) {
    this.setState({ showModal: true, detail: data })
  }
  closeModal() {
    this.setState({ showModal: false })
  }
  componentDidMount() {

  }
  render() {
    let { title, products } = this.props.data
    const settings = {
      className: "products-carousel",
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div className="container padding40">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="heading-sub heading-sub2 text-center">
              <h5><span>{title}</span></h5>
            </div>
            <Slider {...settings}>
              { products.map((element, index) => (<CustomCard data-index={index} key={index} data={element} open={this.openModel}/>))}
            </ Slider>
            <ModalCard closeModal={this.closeModal} modal={this.state.showModal} data={this.state.detail}/>
          </div>
        </div>
      </div>
    )
  }
};

export default CardProduct