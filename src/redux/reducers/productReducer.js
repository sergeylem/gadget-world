import { FETCH_PRODUCTS_SUCCESS } from "../actions/productActions";

const initState = {
  products: []
};

const productReducer = (state = initState, action) => {
  if (action.type === FETCH_PRODUCTS_SUCCESS) {
//    console.log(`state: action.type = ${action.type} state = ${state}`)
    return {
      ...state,
      products: action.payload
    };
  }
  return state;
};

export default productReducer;
