import { combineReducers } from 'redux';
import productReducer from './productReducer';
import userReducer from './userLoginReducer';
import { addCartReducer, countCartReducer, userCartReducer } from './cartReducer'

export default combineReducers({
    products: productReducer,
    user: userReducer,
    cart: addCartReducer,
    usercart: userCartReducer
});