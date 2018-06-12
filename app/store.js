import {createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/reducers';
import thunk from 'redux-thunk'
/** Show redux with redux devtools*/ 
let store = createStore(reducers, compose(applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__())
);
module.exports = store;
