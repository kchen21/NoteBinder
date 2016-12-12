import { RECEIVE_ALL_NOTES, RECEIVE_NOTE, REMOVE_NOTE, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/note_actions';
import { merge } from 'lodash';

const _defaultState = {
  notes: {},
  errors: []
};

const noteDataReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_NOTES:
      const newState = merge({}, state);
      newState.notes = action.notes;
      return newState;
    case RECEIVE_NOTE:
      const newState2 = merge({}, state);
      newState2.notes[action.note.id] = action.note;
      return newState2;
    case REMOVE_NOTE:
      const newState3 = merge({}, state);
      delete newState3.notes[action.id];
      return newState3;
    case RECEIVE_ERRORS:
      const newState4 = merge({}, state);
      newState4.errors = action.errors;
      return newState4;
    case CLEAR_ERRORS:
      const newState5 = merge({}, state);
      newState5.errors = [];
      return newState5;
    default:
      return state;
  }
};

export default noteDataReducer;
