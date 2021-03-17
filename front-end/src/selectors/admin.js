import { get } from 'lodash/fp';
import { createSelector } from 'reselect';

const localState = get('admin');

export const getEditModeStatus = createSelector(localState, get('editMode'));
