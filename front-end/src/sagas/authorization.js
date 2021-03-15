import { takeEvery, put, all, call } from 'redux-saga/effects';

import { GET_AUTHORIZATION_PENDING } from '../actions';

import { authAPI } from '../api';
import {
  loginSuccess,
  loginFailure,
  getUserDataSuccess,
  getUserDataFailure,
} from '../actionCreators';

function* authorization({ payload }) {
  try {
    const userData = yield call(authAPI.login, payload);

    yield put(getUserDataSuccess(userData));
    yield put(loginSuccess());
  } catch ({ response }) {
    yield put(loginFailure(response.data.message));
    yield put(getUserDataFailure(response.data.message));
  }
}

export default function authorizationSaga() {
  return all([takeEvery(GET_AUTHORIZATION_PENDING, authorization)]);
}
