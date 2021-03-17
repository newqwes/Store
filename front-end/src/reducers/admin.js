import { SET_EDIT_MODE } from '../actions';

const initialState = {
  editMode: false,
};

const admin = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDIT_MODE:
      return { editMode: action.payload };

    default:
      return state;
  }
};

export default admin;
