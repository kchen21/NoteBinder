import { RECEIVE_ALL_TAGS, RECEIVE_TAG } from '../actions/tag_actions';
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
    default:
      return state;
  }
};

export default tagsReducer;
