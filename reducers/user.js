import { LOGOUT, SET_USER } from '../constants/actionTypes';

const initialState = {
  id: null,
  name: null,
  email: null
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.user };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}
