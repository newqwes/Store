import { takeEvery, put, all, call } from 'redux-saga/effects';

import { GET_PRODUCTS_LIST_PENDING } from '../actions';

import { productAPI } from '../api';
import { getProductsListSuccess } from '../actionCreators';

export function* getProductsList({ payload }) {
  const data = yield call(productAPI.getProductsList, payload);

  yield put(getProductsListSuccess(data));
}

export default function productSaga() {
  return all([takeEvery(GET_PRODUCTS_LIST_PENDING, getProductsList)]);
}
