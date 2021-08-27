import { ADD_TO_CART, REMOVE_FROM_CART, CART_ERROR, GET_USER_CART, GET_USER_CART_ERROR } from "../constants/cartConstants";
import axios from "axios";

//action to get user cart
export const getUserCart = (userId) => async (dispatch) => {
  try {
    axios.get("http://localhost:3000/carts").then(response => response.data)
      .then(responseData => {
        const userCart = responseData.filter(cart => cart.userId == userId);

        dispatch({ type: GET_USER_CART, payload: userCart })
      })

  } catch (error) {

    dispatch({
      type: GET_USER_CART_ERROR,
      payload: error,
    })
  }
}


//Action to add product to cart
export const addToCard = (userId, productId) => async (dispatch) => {

  try {
    const cart = {
      userId: userId,
      products: [{ productId: productId, quantity: 1 }]
    }
    axios.post("http://localhost:3000/carts", cart)
      .then(() => {
        dispatch({ type: ADD_TO_CART, payload: cart })
        getUserCart(userId)
      })

  } catch (error) {
    dispatch({ type: CART_ERROR, payload: error })
  }
}

//action to remove from cart
export const removeFromCart = (cartId) => async (dispatch) => {
  const url = "http://localhost:3000/carts/" + cartId
  try {
    const { deleted } = await axios.delete(url)
      .then(() => dispatch({ type: REMOVE_FROM_CART, payload: deleted }))
  } catch (error) {

    console.log(error)
  }
}