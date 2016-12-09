import * as SessionAPIUtil from '../util/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

// thunk action creators

// user should be structured like so:
// { username:..., password:... }

export const signIn = (user) => {
  return (dispatch) => {
    const successCallback = (currentUser) => {
      return dispatch(receiveCurrentUser(currentUser));
    };
    const errorCallback = (xhr) => {
      return dispatch(receiveErrors(xhr.responseJSON));
    };

    return SessionAPIUtil.signIn(user).then(successCallback, errorCallback);
  };
};

export const logOut = () => {
  return (dispatch) => {
    const successCallback = (currentUser) => {
      return dispatch(receiveCurrentUser(null));
    };
    const errorCallback = (xhr) => {
      return dispatch(receiveErrors(xhr.responseJSON));
    };

    return SessionAPIUtil.logOut().then(successCallback, errorCallback);
  };
};

export const signUp = (user) => {
  return (dispatch) => {
    const successCallback = (currentUser) => {
      return dispatch(receiveCurrentUser(currentUser));
    };
    const errorCallback = (xhr) => {
      return dispatch(receiveErrors(xhr.responseJSON));
    };

    return SessionAPIUtil.signUp(user).then(successCallback, errorCallback);
  };
};
