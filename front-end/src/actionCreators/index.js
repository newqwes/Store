import {
  GET_PRODUCTS_LIST_PENDING,
  GET_PRODUCTS_LIST_SUCCESS,
  ADD_TO_CART,
  GET_AUTHORIZATION_SUCCESS,
  GET_AUTHORIZATION_PENDING,
  GET_AUTHORIZATION_FAILURE,
  GET_REGISTRATION_PENDING,
  USER_LOGOUT,
  REMOVE_FROM_CART,
  SEND_ORDER_PENDING,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_FAILURE,
  UPDATE_USER_PENDING,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILURE,
  GET_ORDER_HISTORY_PENDING,
  GET_ORDER_HISTORY_SUCCESS,
  GET_ORDER_HISTORY_FAILURE,
  UPDATE_PRODUCT_PENDING,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_PENDING,
  DELETE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
} from '../actions';

export const getProductsList = type => ({
  type: GET_PRODUCTS_LIST_PENDING,
  payload: type,
});

export const getProductsListSuccess = data => ({
  type: GET_PRODUCTS_LIST_SUCCESS,
  payload: data,
});

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item,
});

export const loginSuccess = () => ({
  type: GET_AUTHORIZATION_SUCCESS,
});

export const loginFailure = error => ({
  type: GET_AUTHORIZATION_FAILURE,
  payload: error,
});

export const login = authorizationData => ({
  type: GET_AUTHORIZATION_PENDING,
  payload: authorizationData,
});

export const logout = () => ({
  type: USER_LOGOUT,
});

export const registration = registrationData => ({
  type: GET_REGISTRATION_PENDING,
  payload: registrationData,
});

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const submitOrder = order => ({
  type: SEND_ORDER_PENDING,
  payload: order,
});

export const sendOrderSuccess = orderData => ({
  type: SEND_ORDER_SUCCESS,
  payload: orderData,
});

export const sendOrderFailure = error => ({
  type: SEND_ORDER_FAILURE,
  payload: error,
});

export const updateUser = userData => ({
  type: UPDATE_USER_PENDING,
  payload: userData,
});

export const updateUserSuccess = userData => ({
  type: UPDATE_USER_SUCCESS,
  payload: userData,
});

export const updateUserFailure = error => ({
  type: UPDATE_USER_FAILURE,
  payload: error,
});

export const getUserDataSuccess = userData => ({
  type: GET_USER_DATA_SUCCESS,
  payload: userData,
});

export const getUserDataFailure = error => ({
  type: GET_USER_DATA_FAILURE,
  payload: error,
});

export const getOrderHistory = () => ({
  type: GET_ORDER_HISTORY_PENDING,
});

export const getOrderHistorySuccess = userHistory => ({
  type: GET_ORDER_HISTORY_SUCCESS,
  payload: userHistory,
});

export const getOrderHistoryFailure = error => ({
  type: GET_ORDER_HISTORY_FAILURE,
  payload: error,
});

export const updateProduct = productData => ({
  type: UPDATE_PRODUCT_PENDING,
  payload: productData,
});

export const updateProductSuccess = productData => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: productData,
});

export const updateProductFailure = error => ({
  type: UPDATE_PRODUCT_FAILURE,
  payload: error,
});

export const deleteProduct = id => ({
  type: DELETE_PRODUCT_PENDING,
  payload: id,
});

export const deleteProductSuccess = id => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: id,
});

export const deleteProductFailure = error => ({
  type: DELETE_PRODUCT_FAILURE,
  payload: error,
});
