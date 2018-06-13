import React, { Component } from 'react'
import Select from 'react-select'
export default class FilterWrap extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    onChange(){

    }
    render() {
        let types = [
            {label: "Mặc định", value: "1"},
            {label: "Mới nhất", value: "2"},
            {label: "Xem nhiều", value: "3"},
            {label: "Mua nhiều", value: "4"},
            {label: "Giá giảm dần", value: "5"},
            {label: "Giá tăng dần", value: "6"},
        ]
        return (
            <div className="filter-wrap">
                <div className="row">
                    <h1 className="col-md-6 col-lg-7">Quần Kaki Nam</h1>
                    <div className="col-md-6 col-lg-5 filter-more">
                        <form id="form-filter-header" method="post">
                            <div className="col-md-8 col-sm-12" style={{ paddingTop: "23px" }}>
                                Sắp xếp:
                                <select onChange={this.onChange} name="sort_by" id="form_filter_header_sort_by">
                                    {
                                        types.map((option, index) => {
                                            return(
                                                option.value === 1 ? <option selected value={option.value} key={index}>{option.label}</option> 
                                                : <option key={index}>{option.label}</option>
                                            )
                                            
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-md-4 hidden-sm hidden-xs show">
                                <a id="grid" title="xem dạng lưới" href="#" rel="nofollow" className="active"><i className="fa fa-th-large"></i></a>
                                <a id="list" title="Xem dạng list" href="#" rel="nofollow"><i className="fa fa-th-list"></i></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
