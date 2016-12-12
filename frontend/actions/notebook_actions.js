import * as NotebookAPIUtil from '../util/notebook_util';

export const RECEIVE_ALL_NOTEBOOKS = 'RECEIVE_ALL_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveAllNotebooks = (notebooks) => ({
  type: RECEIVE_ALL_NOTEBOOKS,
  notebooks
});

export const receiveNotebook = (notebook) => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

export const removeNotebook = (id) => ({
  type: REMOVE_NOTEBOOK,
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

export const fetchAllNotebooks = () => {
  return (dispatch) => {
    const successCallback = (notebooks) => {
      return dispatch(receiveAllNotebooks(notebooks));
    };

    return NotebookAPIUtil.fetchAllNotebooks().then(successCallback);
  };
};

// For createNotebook, notebook should be structured like so:
// { title:..., description:... }

export const createNotebook = (notebook) => {
  return (dispatch) => {
    const successCallback = (newNotebook) => {
      dispatch(receiveNotebook(newNotebook));
      return newNotebook;
    };
    const errorCallback = (xhr) => {
      return dispatch(receiveErrors(xhr.responseJSON));
    };

    return NotebookAPIUtil.createNotebook(notebook).then(successCallback, errorCallback);
  };
};

// For updateNotebook, notebook should be structured like so:
// { id:..., title:..., description }

export const updateNotebook = (notebook) => {
  return (dispatch) => {
    const successCallback = (updatedNotebook) => {
      return dispatch(receiveNotebook(updatedNotebook));
    };
    const errorCallback = (xhr) => {
      return dispatch(receiveErrors(xhr.responseJSON));
    };

    return NotebookAPIUtil.updateNotebook(notebook).then(successCallback, errorCallback);
  };
};

export const destroyNotebook = (id) => {
  return (dispatch) => {
    const successCallback = (notebookId) => {
      return dispatch(removeNotebook(notebookId));
    };
    const errorCallback = (xhr) => {
      return dispatch(receiveErrors(xhr.responseJSON));
    };

    return NotebookAPIUtil.destroyNotebook(id).then(successCallback, errorCallback);
  };
};
