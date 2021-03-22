import { GET_ORDER_HISTORY_SUCCESS, GET_ORDER_HISTORY_FAILURE } from '../actions';

const initialState = {
  data: [
    {
      id: '',
      userId: '',
      date: '',
      orderData: [
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

const orderHistory = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ORDER_HISTORY_SUCCESS:
      return {
        data: payload,
        error: initialState.error,
      };
    case GET_ORDER_HISTORY_FAILURE:
      return {
        data: initialState.data,
        error: payload,
      };
    default:
      return state;
  }
};

export default orderHistory;
