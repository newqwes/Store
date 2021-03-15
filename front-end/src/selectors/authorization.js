import { get } from 'lodash/fp';
import { createSelector } from 'reselect';

const localState = get('authorization');

export const getCart = createSelector(localState)();

export const getUserAuthStatus = createSelector(localState, get('userAuthorized'));
