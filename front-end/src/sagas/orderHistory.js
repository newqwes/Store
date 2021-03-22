import { takeEvery, put, all } from 'redux-saga/effects';

import { GET_ORDER_HISTORY_PENDING } from '../actions';

import { orderAPI } from '../api';
import { getOrderHistoryFailure, getOrderHistorySuccess } from '../actionCreators';

function* getOrderHistory() {
  try {
    const orderHistory = yield orderAPI.getOrderHistory();

    yield put(getOrderHistorySuccess(orderHistory));
  } catch ({ response }) {
    yield put(getOrderHistoryFailure(response.data.message));
  }
}

export default function historySaga() {
  return all([takeEvery(GET_ORDER_HISTORY_PENDING, getOrderHistory)]);
}
