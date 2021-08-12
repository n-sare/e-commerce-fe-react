import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";
//import productReducer from "./reducers/productReducer";
import rootReducer from "./reducers";
//import { ProductReducer, OneProductReducer } from "./reducers/productReducer";
//import UserReducer from "./reducers/userLoginReducer";

const initialState={}
const persistConfig = {
    key: 'root',
    storage,
}

// const rootReducer = combineReducers({
//   ProductReducer: ProductReducer,
//   OneProductReducer: OneProductReducer,
//   UserReducer: UserReducer
// })
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleware =[thunk]

//const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


  const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
    persistStore(store)
    
export default store;