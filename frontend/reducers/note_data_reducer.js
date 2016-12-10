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
      return merge({}, state, { notes: action.notes });
    case RECEIVE_NOTE:
      const newState = merge({}, state);
      newState.notes[action.note.id] = action.note;
      newState.currentNote = action.note;
      return newState;
    case REMOVE_NOTE:
      const newState2 = merge({}, state);
      newState2.notes[action.id] = undefined;
      return newState2;
    case RECEIVE_ERRORS:
      const newState3 = merge({}, state);
      newState3.errors = action.errors;
      return newState3;
    case CLEAR_ERRORS:
      const newState4 = merge({}, state);
      newState4.errors = [];
      return newState4;
    default:
      return state;
  }
};

export default noteDataReducer;
