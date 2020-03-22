import * as APIUtilSession from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logOutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signUp = user => dispatch =>
  APIUtilSession.signUp(user).then(
    user => dispatch(receiveCurrentUser(user.data)),
    error => dispatch(receiveErrors(error.response.data))
  );

export const logIn = user => dispatch =>
  APIUtilSession.logIn(user).then(
    user => dispatch(receiveCurrentUser(user.data)),
    error => dispatch(receiveErrors(error.response.data))
  );

export const logOut = () => dispatch =>
  APIUtilSession.logOut().then(
    () => dispatch(logOutCurrentUser()),
    error => dispatch(receiveErrors(error.response.data))
  );
