import { takeEvery, put, all, call } from 'redux-saga/effects';

import { UPDATE_USER_PENDING, DELETE_USER_PENDING } from '../actions';

import { userAPI } from '../api';
import {
  updateUserSuccess,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserFailure,
  logout,
} from '../actionCreators';

function* updateUser({ payload }) {
  try {
    const userData = yield call(userAPI.update, payload);

    yield put(updateUserSuccess(userData));
  } catch ({ response }) {
    yield put(updateUserFailure(response.data.message));
  }
}

function* deleteUser() {
  try {
    const userId = yield userAPI.delete();

    yield put(deleteUserSuccess(userId));
    yield put(logout());
  } catch ({ response }) {
    yield put(deleteUserFailure(response.data.message));
  }
}

export default function userSaga() {
  return all([
    takeEvery(UPDATE_USER_PENDING, updateUser),
    takeEvery(DELETE_USER_PENDING, deleteUser),
  ]);
}
