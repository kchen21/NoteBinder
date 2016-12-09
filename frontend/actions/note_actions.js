import * as NoteAPIUtil from '../util/note_util';

export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const SELECT_NOTE = 'SELECT_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveAllNotes = (notes) => ({
  type: RECEIVE_ALL_NOTES
});

export const receiveNote = (note) => ({
  type: RECEIVE_NOTE,
  note
});

export const selectNote = (id) => ({
  type: SELECT_NOTE,
  id
});

export const removeNote = (id) => ({
  type: REMOVE_NOTE,
  id
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});


export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

// thunk action creators

export const fetchAllNotes = () => {
  return (dispatch) => {
    const successCallback = (notes) => {
      return dispatch(receiveAllNotes(notes));
    };

    return NoteAPIUtil.fetchAllNotes().then(successCallback);
  };
};

// For createNote, note should be structured like so:
// { title:..., body:..., notebook_id:... }

export const createNote = (note) => {
  return (dispatch) => {
    const successCallback = (newNote) => {
      return dispatch(receiveNote(newNote));
    };
    const errorCallback = (xhr) => {
      return dispatch(receiveErrors(xhr.responseJSON));
    };

    return NoteAPIUtil.createNote(note).then(successCallback, errorCallback);
  };
};

// For updateNote and destroyNote, note should be structured like so:
// { id:..., title:..., body:..., notebook_id:... }

export const updateNote = (note) => {
  return (dispatch) => {
    const successCallback = (updatedNote) => {
      return dispatch(receiveNote(updatedNote));
    };
    const errorCallback = (xhr) => {
      return dispatch(receiveErrors(xhr.responseJSON));
    };

    return NoteAPIUtil.updateNote(note).then(successCallback, errorCallback);
  };
};

export const destroyNote = (note) => {
  return (dispatch) => {
    const successCallback = (id) => {
      return dispatch(removeNote(id));
    };
    const errorCallback = (xhr) => {
      return dispatch(receiveErrors(xhr.responseJSON));
    };

    return NoteAPIUtil.destroyNote(note).then(successCallback, errorCallback);
  };
};