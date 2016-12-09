import { combineReducers } from 'redux';
import session from './session_reducer';
import noteData from './note_data_reducer';

const rootReducer = combineReducers({
  session,
  noteData
});

export default rootReducer;
