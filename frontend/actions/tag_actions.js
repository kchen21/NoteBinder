import * as TagAPIUtil from '../util/tag_util';

export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';

export const receiveAllTags = (tags) => ({
  type: RECEIVE_ALL_TAGS,
  tags
});

export const receiveTag = (tag) => ({
  type: RECEIVE_TAG,
  tag
});

// thunk action creators

export const fetchAllTags = () => {
  return (dispatch) => {
    const successCallback = (tags) => {
      return dispatch(receiveAllTags(tags));
    };

    return TagAPIUtil.fetchAllTags().then(successCallback);
  };
};

// For createTag, tag should be structured like so:
// { name:... }

export const createTag = (noteId, tag) => {
  return (dispatch) => {
    const successCallback = (oldOrNewTag) => {
      dispatch(receiveTag(oldOrNewTag));
      return oldOrNewTag;
    };

    return TagAPIUtil.createTag(noteId, tag).then(successCallback);
  };
};

export const destroyTagging = (noteId, tagName) => {
  return (dispatch) => {
    return TagAPIUtil.destroyTagging(noteId, tagName);
  };
};
