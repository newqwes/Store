import { all } from 'redux-saga/effects';

import productSaga from './products';
import registrationSaga from './registration';
import authorizationSaga from './authorization';
import orderSaga from './order';
import userSaga from './user';
import historySaga from './history';

function* rootSaga() {
  yield all([
    productSaga(),
    authorizationSaga(),
    registrationSaga(),
    orderSaga(),
    userSaga(),
    historySaga(),
  ]);
}

export default rootSaga;
