import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';

import products from './products';
import user from './user';
import authorization from './authorization';
import order from './order';
import cart from './cart';
import history from './history';

const rootReducer = combineReducers({
  products,
  cart,
  user,
  authorization,
  order,
  history,
  form,
});

export default rootReducer;
