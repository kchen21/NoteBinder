import { combineReducers } from 'redux';
import session from './session_reducer';
import noteData from './note_data_reducer';
import notebookData from './notebook_data_reducer';
import tags from './tags_reducer';

const rootReducer = combineReducers({
  session,
  noteData,
  notebookData,
  tags
});

export default rootReducer;
