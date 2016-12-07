import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const _defaultState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser, errors: [] };
    case RECEIVE_ERRORS:
      return { currentUser: null, errors: action.errors };
    case CLEAR_ERRORS:
      return { currentUser: null, errors: [] };
    default:
      return state;
  }
};

export default sessionReducer;
