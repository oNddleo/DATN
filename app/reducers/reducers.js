import {combineReducers} from 'redux';
import cart from './cartReducer';
import products from './productsReducer';
import showModal from './showModalReducer';

var reducers = combineReducers({cart, products, showModal});
module.exports = reducers;