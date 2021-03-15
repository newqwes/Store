import { SEND_ORDER_SUCCESS, SEND_ORDER_FAILURE } from '../actions';

const initialState = {
  data: {
    cart: [
      {
        id: null,
        type: '',
        name: '',
        description: '',
        photoUrl: '',
        unitSign: '',
        currencySign: '',
        options: [
          {
            id: null,
            price: null,
            weight: null,
            productId: null,
          },
        ],
        count: null,
      },
    ],
    customer: {
      email: '',
      photo: '',
      city: '',
      street: '',
      home: '',
      apartment: '',
    },
  },
  error: '',
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case SEND_ORDER_SUCCESS:
      return {
        data: action.payload,
        error: initialState.error,
      };
    case SEND_ORDER_FAILURE:
      return {
        data: initialState.data,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default order;
