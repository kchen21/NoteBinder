import { RECEIVE_ALL_NOTEBOOKS, RECEIVE_IDS_OF_CURRENT_NOTEBOOK_NOTES, RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK, REMOVE_NOTE_ID_FROM_NOTEBOOK, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/notebook_actions';
import { merge } from 'lodash';

const _defaultState = {
  notebooks: {},
  errors: []
};

const notebookDataReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  const newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_NOTEBOOKS:
      newState.notebooks = action.notebooks;
      return newState;
    case RECEIVE_NOTEBOOK:
      newState.notebooks[action.notebook.id] = action.notebook;
      return newState;
    case REMOVE_NOTEBOOK:
      delete newState.notebooks[action.id];
      return newState;
    case REMOVE_NOTE_ID_FROM_NOTEBOOK:
      delete newState.notebooks[action.notebookId].note_ids[action.noteId];
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

export default notebookDataReducer;
