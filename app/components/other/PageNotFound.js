import React, { Component } from 'react';

class PageNotFound extends Component {
    render() {
        return (
            <div className="page-not-found">
                <div class="page text-center">
                    <div class="item">
                        <h1>404</h1>
                        <p>Trang không tồn tại</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageNotFound;