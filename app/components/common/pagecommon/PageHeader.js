import React, { Component } from 'react'

export default class PageHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let { url } = this.props;
        console.log('url header banner', url)
        return (
            <div className="page_header hidden-xs hidden-sm" style={{ backgroundImage: `url(${Object.values(url)})`, backgroundPosition: "right" }}>
                <div className="page_header_info text-center">
                    <div className="page_header_info_inner">
                        <h2>Quần Kaki Nam</h2>
                        <p>Vãi chất lượng, đường chỉ đẹp, thanh lịch cho các chàng trai công sở</p>
                    </div>
                </div>
            </div>
        )
    }
}
