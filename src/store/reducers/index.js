import { combineReducers } from 'redux';
import productReducer from './productReducer';
import userReducer from './userLoginReducer';

export default combineReducers({
    products: productReducer,
    user: userReducer,
});