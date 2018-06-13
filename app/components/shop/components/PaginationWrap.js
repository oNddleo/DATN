import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
class PaginationWrap extends Component {
    render() {

        return (
            <div className="pagenav-wrap" style={{ clear: "both" }}>
                <div className="row">
                    <div className="col-md-5 col-sm-5"></div>
                    <div className="col-md-7 col-sm-7">
                        <div className="pull-right">
                            <ReactPaginate 
                                pageCount={10}
                                pageRangeDisplayed={1}
                                marginPagesDisplayed={1}
                                previousLabel="« Trước"
                                nextLabel="Sau »"
                                containerClassName={"pagination"}
                                breakLabel={<a href="">...</a>}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaginationWrap;