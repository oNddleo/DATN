import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, hasHistory } from 'react-router-dom';
// import Product from './Product/Product';
import Layout from 'app/components/Layout';
var store = require('store');
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={hasHistory}>
                    <Layout>
                        <Switch>
                            {/* <Route exact path='/' component={Product}/> */}
                            <Route path='/roster' />
                            <Route path='/schedule' />
                        </Switch>
                    </Layout>
                </Router>
            </Provider>
        )
    }
};
