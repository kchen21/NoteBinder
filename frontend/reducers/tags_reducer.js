import { RECEIVE_ALL_TAGS, RECEIVE_TAG, REMOVE_TAG, REMOVE_NOTE_ID_FROM_TAG } from '../actions/tag_actions';
import { merge } from 'lodash';

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);

  const newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      newState[action.tag.id] = action.tag;
      return newState;
    case REMOVE_TAG:
      delete newState[action.id];
      return newState;
    case REMOVE_NOTE_ID_FROM_TAG:
      delete newState[action.tagId].note_ids[action.noteId];
      return newState;
    default:
      return state;
  }
};

export default tagsReducer;
