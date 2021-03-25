import { get } from 'lodash/fp';
import { createSelector } from 'reselect';

const orderHistoryData = get(['orderHistory', 'data']);

export const getOrderHistory = createSelector(orderHistoryData)();
