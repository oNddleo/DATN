import React, { Component } from 'react';
import {post} from 'axios'
class Test extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        console.log('e.target.value', e.target.files[0])
        let file = e.target.files[0]
        this.setState({ title: file.name, file })
    }
    onSubmit(e) {
        console.log('upload')
        e.preventDefault() //Stop formsubmit
        this.fileUpload(this.state.file).then((response) => {
            console.log(response);
        })
    }
    fileUpload(file) {
        const url = 'http://localhost:1337/upload/uploadTest';
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
                    <input type="file" onChange={this.onChange.bind(this)} />
                    <button type="submit" >Upload</button>
                </form>

            </div>
        );
    }
}

export default Test;