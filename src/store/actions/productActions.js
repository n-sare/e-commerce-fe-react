import {LOAD_PRODUCTS_BY_CATEGORY, LOAD_PRODUCTS_BY_CATEGORY_ERROR} from "../constants/productConstant";
import axios from "axios";


export const getProducts =  () => async(dispatch) => {
    
  try {
        axios.get("http://localhost:3000/products").then(response => response.data)
        .then(responseData=>{
          //console.log(responseData)
          dispatch({type: LOAD_PRODUCTS_BY_CATEGORY, payload: responseData});
        })
        //console.log(res.data);
        
    } catch (error) {
        dispatch({
          type: LOAD_PRODUCTS_BY_CATEGORY_ERROR,
          payload: error,
        })
    }

}
