import * as TagAPIUtil from '../util/tag_util';

export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const REMOVE_TAGGING_FROM_NOTE = 'REMOVE_TAGGING_FROM_NOTE';

export const receiveAllTags = (tags) => ({
  type: RECEIVE_ALL_TAGS,
  tags
});

export const receiveTag = (tag) => ({
  type: RECEIVE_TAG,
  tag
});

// [note.id, tag.id] will be passed into removeTaggingFromNote

export const removeTaggingFromNote = (ids) => ({
  type: REMOVE_TAGGING_FROM_NOTE,
  ids
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
    const successCallback = (ids) => {
      return dispatch(removeTaggingFromNote(ids));
    };

    return TagAPIUtil.destroyTagging(noteId, tagName).then(successCallback);
  };
};
