import { findIndex } from 'lodash';
import { assoc, get, equals } from 'lodash/fp';

import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

const INITIAL_COUNT = 1;
const INCREMENT = 1;
const NOT_INDEX = -1;

const initialState = [];

const cart = (state = initialState, action) => {
  const incomingId = get(['payload', 'options', 'id'], action);

  const itemIndex = findIndex(state, ({ id }) => equals(id, incomingId));

  const prevCount = get([itemIndex, 'count'], state);

  switch (action.type) {
    case ADD_TO_CART: {
      const newCount = prevCount + INCREMENT;

      if (itemIndex === NOT_INDEX) {
        const newItem = {
          ...action.payload,
          id: incomingId,
          count: INITIAL_COUNT,
        };

        return [...state, newItem];
      }

      return assoc([itemIndex, 'count'], newCount, state);
    }

    case REMOVE_FROM_CART: {
      const newCount = prevCount - INCREMENT;

      if (newCount <= 0) {
        const newState = state.filter(({ id }) => id !== incomingId);

        return newState;
      }

      return assoc([itemIndex, 'count'], newCount, state);
    }

    default:
      return state;
  }
};
export default cart;
