import { takeEvery, put, all, call } from 'redux-saga/effects';

import { ADD_PRODUCT_PENDING, GET_PRODUCTS_LIST_PENDING } from '../actions';

import { productAPI } from '../api';
import { addProductSuccess, getProductsListSuccess, addProductFailure } from '../actionCreators';

export function* getProductsList({ payload }) {
  const data = yield call(productAPI.getProductsList, payload);

  yield put(getProductsListSuccess(data));
}

export function* addProduct({ payload }) {
  try {
    const data = yield call(productAPI.addProduct, payload);

    yield put(addProductSuccess(data));
  } catch ({ response }) {
    yield put(addProductFailure(response.data.message));
  }
}

export default function productSaga() {
  return all([
    takeEvery(GET_PRODUCTS_LIST_PENDING, getProductsList),
    takeEvery(ADD_PRODUCT_PENDING, addProduct),
  ]);
}
