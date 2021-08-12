import {LOGIN, LOGIN_ERROR, SIGNUP, SIGNUP_ERROR} from "../constants/userConstants";
import axios from "axios";
import rootReducer from "../reducers";


export function setCurrentUser(user) {
    return {
      type: LOGIN,
      user
    };
  }

export const signupUser = (name, surname, email, phone, password) => async(dispatch) =>{

  let user=  {
    address: {
      geolocation: {
        lat: "0",
        long: "0"
      },
      city: "",
      street: "",
      number: 0,
      zipcode: "00000"
    },
    email: email,
    username: "",
    password: password,
    name: {
      firstname: name,
      lastname: surname
    },
    phone: phone,
    __v: 0
  }
  axios.post('http://localhost:3000/users', user)
  .then(()=>{ localStorage.setItem("user", JSON.stringify(user));
              dispatch({type: LOGIN, payload: user})
            })
  .catch(error =>{ dispatch({type: LOGIN_ERROR, payload: error})});
  
}

export const loginUser =  (email, password) => async(dispatch) => {
      //const {email, password} = getState().rootReducer;
    try {
          axios.get("http://localhost:3000/users").then(response => response.data)
          .then(responseData => {
            const userData = responseData.filter(user => user.email===email&&user.password===password);
            localStorage.setItem("user", JSON.stringify(userData));
            dispatch({type: LOGIN, payload: userData})
            })
         
      } catch (error) {
          dispatch({
            type: LOGIN_ERROR,
            payload: error,
          })
      }
  }


export const logoutUser = () => {
  return dispatch => {
    //localStorage.clear();
    localStorage.removeItem("user")
    dispatch(setCurrentUser({}));
  }
}



