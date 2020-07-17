import axios from "axios";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

export const fetchProducts = () => {
  return dispatch => {
    axios
      // .get(process.env.REACT_APP_API_URL + '/products') //Change hardcode URL !!!
      .get('http://164.90.210.75/api' + '/products') //Change hardcode URL !!!      
      // .get('http://localhost/api' + '/products') //Change hardcode URL !!!      
      .then(response => {
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };
};

// const fetchProductsSuccess = products => ({
//   type: FETCH_PRODUCTS_SUCCESS,
//   payload: products
// });

// // fetch products
// export const fetchProducts = products => {
//   return dispatch => {
//     dispatch(fetchProductsSuccess(products));
//   };
// };

