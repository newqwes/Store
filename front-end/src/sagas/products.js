import { takeEvery, put, all, call } from 'redux-saga/effects';

import {
  ADD_PRODUCT_PENDING,
  GET_PRODUCTS_LIST_PENDING,
  UPDATE_PRODUCT_PENDING,
  DELETE_PRODUCT_PENDING,
} from '../actions';

import { productAPI } from '../api';
import {
  getProductsListSuccess,
  addProductFailure,
  updateProductFailure,
  getProductsList,
  deleteProductFailure,
} from '../actionCreators';

function* getProducts({ payload }) {
  const data = yield call(productAPI.getProductsList, payload);

  yield put(getProductsListSuccess(data));
}

function* addProduct({ payload }) {
  try {
    yield call(productAPI.addProduct, payload);

    yield put(getProductsList(payload.type));
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

function* deleteProduct({ payload: { id, type } }) {
  try {
    yield call(productAPI.deleteProduct, id);

    yield put(getProductsList(type));
  } catch ({ response }) {
    yield put(deleteProductFailure(response.data.message));
  }
}

export default function productSaga() {
  return all([
    takeEvery(GET_PRODUCTS_LIST_PENDING, getProducts),
    takeEvery(ADD_PRODUCT_PENDING, addProduct),
    takeEvery(UPDATE_PRODUCT_PENDING, updateProduct),
    takeEvery(DELETE_PRODUCT_PENDING, deleteProduct),
  ]);
}
