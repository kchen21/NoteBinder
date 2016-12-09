import { RECEIVE_ALL_NOTES, RECEIVE_NOTE, SELECT_NOTE, REMOVE_NOTE, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/note_actions';
import { merge } from 'lodash';

const _defaultState = {
  notes: {},
  currentNote: {},
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
      return newState;
    case SELECT_NOTE:
      return merge({}, state, { currentNote: state.notes[action.id] });
    case REMOVE_NOTE:
      const newState2 = merge({}, state);
      newState2.notes[action.id] = undefined;
      return newState2;
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors });
    case CLEAR_ERRORS:
      return merge({}, state, { errors: [] });
    default:
      return state;
  }
};

export default noteDataReducer;
