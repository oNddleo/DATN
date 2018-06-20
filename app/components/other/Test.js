import React, { Component } from 'react';
import { post } from 'axios'
class Test extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChange(e) {
        if (e.target.files) {
            let file = e.target.files
            this.setState({ file })
        }
    }
    onSubmit(e) {
        e.preventDefault() //Stop formsubmit
        var that = this;
        let file = this.state.file;
        if(file){
            for(let i = 0; i < file.length; i++){
                that.fileUpload(file[i]).then((response) => {
                    console.log(response);
                })
            }
        }
    }
    fileUpload(file) {
        const url = 'http://localhost:1337/image/upload';
        const formData = new FormData();
        formData.append('file', file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config)
    }
    render() {
        return (
            <div className="container" style={{ padding: "200px" }}>
                <form onSubmit={this.onSubmit}>
                    <input type="file" onChange={this.onChange.bind(this)} multiple />
                    <button type="submit" >Upload</button>
                </form>

            </div>
        );
    }
}

export default Test;