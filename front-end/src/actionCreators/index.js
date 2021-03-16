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
  GET_HISTORY_PENDING,
  GET_HISTORY_SUCCESS,
  GET_HISTORY_FAILURE,
  DELETE_USER_PENDING,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  ADD_PRODUCT_PENDING,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
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

export const deleteUser = () => ({
  type: DELETE_USER_PENDING,
});

export const deleteUserSuccess = userid => ({
  type: DELETE_USER_SUCCESS,
  payload: userid,
});

export const deleteUserFailure = error => ({
  type: DELETE_USER_FAILURE,
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

export const getHistory = () => ({
  type: GET_HISTORY_PENDING,
});

export const getHistorySuccess = userHistory => ({
  type: GET_HISTORY_SUCCESS,
  payload: userHistory,
});

export const getHistoryFailure = error => ({
  type: GET_HISTORY_FAILURE,
  payload: error,
});

export const addProduct = productData => ({
  type: ADD_PRODUCT_PENDING,
  payload: productData,
});

export const addProductSuccess = productData => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: productData,
});

export const addProductFailure = error => ({
  type: ADD_PRODUCT_FAILURE,
  payload: error,
});
