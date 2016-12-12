import { RECEIVE_ALL_NOTEBOOKS, RECEIVE_IDS_OF_CURRENT_NOTEBOOK_NOTES, RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/notebook_actions';
import { merge } from 'lodash';

const _defaultState = {
  notebooks: {},
  idsOfCurrentNotebookNotes: {},
  errors: []
};

const notebookDataReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_NOTEBOOKS:
      const newState = merge({}, state);
      newState.notebooks = action.notebooks;
      return newState;
    case RECEIVE_IDS_OF_CURRENT_NOTEBOOK_NOTES:
      const newState2 = merge({}, state);
      newState2.idsOfCurrentNotebookNotes = action.ids;
      return newState2;
    case RECEIVE_NOTEBOOK:
      const newState3 = merge({}, state);
      newState3.notebooks[action.notebook.id] = action.notebook;
      return newState3;
    case REMOVE_NOTEBOOK:
      const newState4 = merge({}, state);
      delete newState4.notebooks[action.id];
      return newState4;
    case RECEIVE_ERRORS:
      const newState5 = merge({}, state);
      newState5.errors = action.errors;
      return newState5;
    case CLEAR_ERRORS:
      const newState6 = merge({}, state);
      newState6.errors = [];
      return newState6;
    default:
      return state;
  }
};

export default notebookDataReducer;
