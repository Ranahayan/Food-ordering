import { combineReducers } from "redux";
import categoryReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart'

export default combineReducers({
    categories: categoryReducer,
    products: productsReducer,
    cart: cartReducer
})