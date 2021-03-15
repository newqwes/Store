import { get, reduce, sumBy, head, compose, getOr } from 'lodash/fp';
import { floor } from 'lodash';
import { createSelector } from 'reselect';

const localState = get('cart');

export const getCart = createSelector(localState)();

export const getTotalCartPrice = createSelector(
  localState,
  reduce((sum, { count, options: { price } }) => floor(sum + count * price, 2), 0),
);

export const getCartItemsCount = createSelector(localState, sumBy('count'));

export const getCurrencySign = createSelector(localState, compose(getOr('', 'currencySign'), head));
