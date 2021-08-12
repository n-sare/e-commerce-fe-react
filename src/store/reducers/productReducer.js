import {LOAD_PRODUCTS_BY_CATEGORY, LOAD_PRODUCTS_BY_CATEGORY_ERROR} from "../constants/productConstant";

const DEFAULT_STATE = {
    products: [],
    loading: true
  };
  
  export default function(state = DEFAULT_STATE, action) {
    switch (action.type) {
      case LOAD_PRODUCTS_BY_CATEGORY:
        return { ...state, products: action.payload, loading:false }
      
      case LOAD_PRODUCTS_BY_CATEGORY_ERROR:
        return {loading: false, error:action.payload}
      default:
        return state;
    }
  };
  