import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Register extends Component {
    constructor(props) {
        super(props)
    }
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submit(event) {
        event.preventDefault();
        //Check empty => input change color and show text
        //Check password with repassword => change color and show text
        //Encrypt password
        let infoRegister = { ...this.state }
        console.log('...', infoRegister)
        //Post
        io.socket.post('/user/create', infoRegister, function (resData, jwRes) {
            if(jwRes.statusCode === 200 ){
                console.log("Thêm thành công => redirect vào trang chủ")
            }

        })
    }
    render() {
        return (
            <div className="login register">
                <div className="container">
                    <div className="login-title">
                        <h3>Tạo tài khoản Wingshoes</h3>
                        <div className="login-other">
                            <span>Bạn đã là thành viên?<Link to={"/login"}> Đăng nhập</Link> tại đây</span>
                        </div>
                    </div>
                    <div className="form-login">
                        <form onSubmit={this.submit.bind(this)} action={"/"}>
                            <div className="mod-login">
                                <div className="mod-input mod-email">
                                    <label>Địa chỉ email</label>
                                    <input type="text" name="username" placeholder="Vui lòng nhập email của bạn" autoComplete="username" onChange={this.onChange.bind(this)} />
                                </div>
                                <div className="mod-input mod-password">
                                    <label>Mật khẩu</label>
                                    <input type="password" name="password" placeholder="Tối thiểu 6 kí tự bao gồm cả chữ và số" autoComplete="password" onChange={this.onChange.bind(this)} />
                                </div>
                                <div className="mod-input mod-repassword">
                                    <label>Nhập lại mật khẩu</label>
                                    <input type="password" name="repassword" placeholder="Vui lòng nhập lại mật khẩu" autoComplete="repassword" onChange={this.onChange.bind(this)} />
                                </div>
                                <div className="mod-input mod-name">
                                    <label>Tên</label>
                                    <input type="text" name="fullname" placeholder="Họ tên" autoComplete="fullname" onChange={this.onChange.bind(this)} />
                                </div>
                                <div className="mod-login-btn">
                                    <button type="submit" className="btn-login">ĐĂNG KÝ</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Register;