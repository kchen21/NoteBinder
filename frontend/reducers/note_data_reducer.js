import { RECEIVE_ALL_NOTES, RECEIVE_NOTE, REMOVE_NOTE, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/note_actions';
import { merge } from 'lodash';

const _defaultState = {
  notes: {},
  errors: []
};

const noteDataReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  const newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_NOTES:
      newState.notes = action.notes;
      return newState;
    case RECEIVE_NOTE:
      newState.notes[action.note.id] = action.note;
      return newState;
    case REMOVE_NOTE:
      delete newState.notes[action.id];
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default noteDataReducer;
