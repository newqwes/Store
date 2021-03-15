import { get, compose, isEqual } from 'lodash/fp';
import { createSelector } from 'reselect';

const localState = get('user');

export const getUserData = createSelector(localState, get('data'));
export const getUserError = createSelector(localState, get('error'));

export const getUserName = createSelector(getUserData, get('login'));
export const isUserAdmin = createSelector(getUserData, compose(isEqual('admin'), get('type')));
