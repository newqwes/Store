import { get } from 'lodash/fp';
import { createSelector } from 'reselect';

const localState = get(['history', 'data']);

export const getUserHistory = createSelector(localState)();
