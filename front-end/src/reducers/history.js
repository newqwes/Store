import { GET_HISTORY_SUCCESS, GET_HISTORY_FAILURE } from '../actions';

const initialState = {
  data: [
    {
      id: '',
      userId: '',
      date: '',
      orderStore: [
        {
          id: null,
          orderId: '',
          name: '',
          description: '',
          photoUrl: '',
          unitSign: '',
          currencySign: '',
          price: null,
          weight: null,
          count: null,
        },
      ],
    },
  ],
  error: '',
};

const history = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_HISTORY_SUCCESS:
      return {
        data: payload,
        error: initialState.error,
      };
    case GET_HISTORY_FAILURE:
      return {
        data: initialState.data,
        error: payload,
      };
    default:
      return state;
  }
};

export default history;
