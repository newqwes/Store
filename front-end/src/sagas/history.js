import { takeEvery, put, all } from 'redux-saga/effects';

import { GET_HISTORY_PENDING } from '../actions';

import { orderAPI } from '../api';
import { getHistoryFailure, getHistorySuccess } from '../actionCreators';

function* getHistory() {
  try {
    const userHistory = yield orderAPI.getUserOrders();

    yield put(getHistorySuccess(userHistory));
  } catch ({ response }) {
    yield put(getHistoryFailure(response.data.message));
  }
}

export default function historySaga() {
  return all([takeEvery(GET_HISTORY_PENDING, getHistory)]);
}
