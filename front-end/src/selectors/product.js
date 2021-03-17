import { get } from 'lodash/fp';
import { createSelector } from 'reselect';

const localState = get('products');

export const getProducts = createSelector(localState)();
