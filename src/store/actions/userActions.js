import { LOGIN, LOGIN_ERROR } from "../constants/userConstants";
import axios from "axios";

import { getUserCart } from "./cartActions";

//Dispatching user 
export const setCurrentUser = (user) => (dispatch) => {
  dispatch({ type: LOGIN, payload: user })

}
//Signing up user
export const signupUser = (name, surname, email, phone, password) => async (dispatch) => {
  let user = {
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

    .catch(error => { dispatch({ type: LOGIN_ERROR, payload: error }) });

}

//action to login user
export const loginUser = (email, password) => async (dispatch) => {
  try {
    axios.get("http://localhost:3000/users").then(response => response.data)
      .then(responseData => {
        const userData = responseData.filter(user => user.email === email && user.password === password);
        localStorage.setItem("user", JSON.stringify(userData));
        dispatch({ type: LOGIN, payload: userData })
        dispatch(getUserCart(userData[0].id))

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
    dispatch(setCurrentUser([]));
  }
}



