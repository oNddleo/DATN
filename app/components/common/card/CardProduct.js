import React, { Component } from 'react'
import Slider from 'react-slick'
import CustomCard from './components/CustomCard'
import { getListImages } from 'app/components/common/pageutils/GetListImage'
import ModalCard from './components/ModalCard'

class CardProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  showModal(){
    // console.log("show modal")
    this.setState({showModal: true})
  }
  closeModal(){
    this.setState({showModal: false})
  }

  render() {
    console.log('props card product', this.props)
    let { title, src } = this.props;
    const settings = {
      className: "products-carousel",
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    // console.log("card-product props: ", this.props)

    return (

      <div className="container padding40">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="heading-sub heading-sub2 text-center">
              <h5><span>{title}</span></h5>
            </div>
            <Slider {...settings}>
              { 
                getListImages(src).map((e, index) => {
                return <CustomCard data-index={index} key={index }src={`images/${src}/${e}`} showModal={this.showModal}/>})
               }
            </ Slider>
            <ModalCard closeModal={this.closeModal} showModal={this.state.showModal}/>
          </div>
        </div>
      </div>
    )
  }
};

export default CardProduct