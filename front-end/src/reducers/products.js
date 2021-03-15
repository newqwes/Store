import { GET_PRODUCTS_LIST_SUCCESS } from '../actions';

const initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_LIST_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
};

export default products;
