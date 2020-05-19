import { call, put, takeLatest } from 'redux-saga/effects';

import * as sessionActions from '../actions/session';
import { signUp, logIn, logOut } from '../utils/session';

function* signUpNewUser(action) {
  try {
    const response = yield call(signUp, action.payload.user);
    yield put({
      type: sessionActions.CREATE_NEW_USER_SUCCESS,
      currentUser: response.data,
    });
  } catch (err) {
    yield put(sessionActions.sessionErrors(err));
  }
}

function* logInUser(action) {
  try {
    const response = yield call(logIn, action.payload.user);
    yield put({
      type: sessionActions.LOG_IN_USER_SUCCESS,
      currentUser: response.data,
    });
  } catch (err) {
    yield put(sessionActions.sessionErrors(err));
  }
}

function* logOutUser() {
  try {
    const data = yield call(logOut);
    yield put({ type: sessionActions.LOG_OUT_USER_SUCCESS, data });
  } catch (err) {
    yield put(sessionActions.sessionErrors(err));
  }
}

function* sessionError(action) {
  yield put({
    type: sessionActions.SESSION_ERRORS_SUCCESS,
    errors: action.payload.errors.response.data,
  });
}

export function* watchSignUpNewUser() {
  yield takeLatest(sessionActions.CREATE_NEW_USER_REQUEST, signUpNewUser);
}

export function* watchLogInUser() {
  yield takeLatest(sessionActions.LOG_IN_USER_REQUEST, logInUser);
}

export function* watchLogOutUser() {
  yield takeLatest(sessionActions.LOG_OUT_USER_REQUEST, logOutUser);
}

export function* watchSessionError() {
  yield takeLatest(sessionActions.SESSION_ERRORS_REQUEST, sessionError);
}
