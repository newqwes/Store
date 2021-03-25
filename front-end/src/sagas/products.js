import { takeEvery, put, all, call } from 'redux-saga/effects';

import { ADD_PRODUCT_PENDING, GET_PRODUCTS_LIST_PENDING, UPDATE_PRODUCT_PENDING } from '../actions';

import { productAPI } from '../api';
import {
  addProductSuccess,
  getProductsListSuccess,
  addProductFailure,
  updateProductFailure,
  getProductsList,
} from '../actionCreators';

function* getProducts({ payload }) {
  const data = yield call(productAPI.getProductsList, payload);

  yield put(getProductsListSuccess(data));
}

function* addProduct({ payload }) {
  try {
    const data = yield call(productAPI.addProduct, payload);

    yield put(addProductSuccess(data));
  } catch ({ response }) {
    yield put(addProductFailure(response.data.message));
  }
}

function* updateProduct({ payload }) {
  try {
    yield call(productAPI.updateProduct, payload);

    yield put(getProductsList(payload.type));
  } catch ({ response }) {
    yield put(updateProductFailure(response.data.message));
  }
}

export default function productSaga() {
  return all([
    takeEvery(GET_PRODUCTS_LIST_PENDING, getProducts),
    takeEvery(ADD_PRODUCT_PENDING, addProduct),
    takeEvery(UPDATE_PRODUCT_PENDING, updateProduct),
  ]);
}
