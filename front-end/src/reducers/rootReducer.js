import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';

import products from './products';
import user from './user';
import authorization from './authorization';
import order from './order';
import cart from './cart';
import orderHistory from './orderHistory';
import admin from './admin';

const rootReducer = combineReducers({
  products,
  cart,
  user,
  authorization,
  order,
  orderHistory,
  admin,
  form,
});

export default rootReducer;
