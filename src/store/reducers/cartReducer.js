import { ADD_TO_CART, CART_ERROR, REMOVE_FROM_CART, CART_COUNT, GET_USER_CART, GET_USER_CART_ERROR } from "../constants/cartConstants";

const DEFAULT_STATE = {
  cart: {}
};

export const addCartReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: action.payload }

    case CART_ERROR:
      return { error: action.payload }
    default:
      return state;
  }
};

export const userCartReducer = (state = { usercart: [] }, action) => {
  switch (action.type) {
    case GET_USER_CART:
      return { ...state, usercart: action.payload }
    case REMOVE_FROM_CART:
      console.log(action.payload.id)
      return { ...state, usercart: state.filter((i) => i.id !== action.payload.id) }
    case GET_USER_CART_ERROR:
      return { error: action.payload }
    default:
      return state;
  }
}



  //m38rmF$