import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, hasHistory } from 'react-router-dom'
import Layout from 'app/components/Layout'
import Login from 'app/components/account/Login'
import HomePage from 'app/components/homepage/HomePage'
import Register from 'app/components/account/Register'
import ForgotPassword from 'app/components/account/ForgotPassword'
import VertifyOrder from 'app/components/vertifyOrder/VertifyOrder'
import PageNotFound from 'app/components/other/PageNotFound'
var store = require('store');
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={hasHistory}>
                    <Layout>
                        <Switch>
                            <Route exact path='/' component={HomePage} />
                            <Route path='/login' component={Login} />
                            <Route path='/register' component={Register} />
                            <Route path='/forgot-password' component={ForgotPassword} />
                            <Route path='/register' component={Register} />
                            <Route path='/register' component={Register} />
                            <Route path='/order' component={VertifyOrder} />
                            <Route render={function () { return (<PageNotFound />) }} />
                            {/* <ShopContent url={'images/bannerShop/quan-kaki-nam-banner.jpg'}/> */}
                        </Switch>
                    </Layout>
                </Router>
            </Provider>
        )
    }
};
