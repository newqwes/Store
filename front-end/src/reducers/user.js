import {
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILURE,
  DELETE_USER_FAILURE,
  DELETE_USER_SUCCESS,
} from '../actions';

const initialState = {
  data: {
    email: '',
    login: '',
    phone: '',
    token: '',
    type: '',
    apartment: '',
    home: '',
    street: '',
    city: '',
  },
  error: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_SUCCESS:
    case GET_USER_DATA_SUCCESS:
      return { data: action.payload, error: initialState.error };

    case UPDATE_USER_FAILURE:
    case DELETE_USER_FAILURE:
    case GET_USER_DATA_FAILURE:
      return { ...state, error: action.payload };

    case DELETE_USER_SUCCESS:
      return initialState;

    default:
      return state;
  }
};

export default user;
