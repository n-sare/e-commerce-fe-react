import {LOGIN, LOGIN_ERROR} from "../constants/userConstants";

const DEFAULT_STATE = {
    user: {},
    isLoggedIn: false
  };
  
  export default function(state = DEFAULT_STATE, action) {
    switch (action.type) {
      case LOGIN:
        //console.log(action.payload)
        localStorage.setItem("isLoggedIn", !!Object.keys(action.payload).length)
        return { ...state, user: action.payload, isLoggedIn: !!Object.keys(action.payload).length }
      
       case LOGIN_ERROR:
         return {isLoggedIn: false, error:action.payload}
      default:
        return state;
    }
  };
  //m38rmF$