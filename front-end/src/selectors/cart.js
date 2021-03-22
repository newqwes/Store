import { get, reduce, sumBy, head, compose, getOr } from 'lodash/fp';
import { floor } from 'lodash';
import { createSelector } from 'reselect';

const cart = get('cart');

export const getCart = createSelector(cart)();

export const getTotalCartPrice = createSelector(
  cart,
  reduce((sum, { count, options: { price } }) => floor(sum + count * price, 2), 0),
);

export const getCartItemsCount = createSelector(cart, sumBy('count'));

export const getCurrencySign = createSelector(cart, compose(getOr('', 'currencySign'), head));
