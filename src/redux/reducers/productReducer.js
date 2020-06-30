import { FETCH_PRODUCTS_SUCCESS } from "../actions/productActions";
// import { SET_CATEGORY } from "../actions/productActions";

const initState = {
  products: []
  // ,
  // category: "Smartphone"
};

const productReducer = (state = initState, action) => {
  if (action.type === FETCH_PRODUCTS_SUCCESS) {
//    console.log(`state: action.type = ${action.type} state = ${state}`)
    return {
      ...state,
      products: action.payload
    };
  }
  // if (action.type === SET_CATEGORY) {
  //       return {
  //         ...state,
  //         category: action.payload
  //       };
  //     }
    
  return state;
};

export default productReducer;
