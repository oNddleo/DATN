import React, { Component } from 'react'
import Menu from 'app/components/common/pagecommon/Menu'
import Footer from 'app/components/common/pagecommon/Footer'
import StickyWrapper from 'app/components/common/pagecommon/StickyWrapper'
import $ from 'jquery'
export default class Layout extends Component {
  componentDidMount() {
    var header = $(".sticky-wrapper");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 85) {
        header.addClass("is-sticky");
      } else {
        header.removeClass("is-sticky");
      }
    });
  }
  render() {
    return (
      <div className="body">
        <div className="menu">
          <Menu />
        </div>
        <div className="sticky-wrapper" style={{ height: "85px" }}>
          <StickyWrapper />
        </div>
        {this.props.children}
        <div className="footer">
          <Footer />
        </div>
        <div id="backtotop" className="active"><i className="fa fa-chevron-up"></i></div>
      </div>
    )
  }
};
