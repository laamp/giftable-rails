import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import * as sessionActions from '../actions/session';
import { signUp, logIn, logOut } from '../utils/session';

export function* signUpNewUser(action) {
  try {
    const data = yield call(signUp, action.payload.user);
    yield put({ type: sessionActions.CREATE_NEW_USER_SUCCESS, data });
  } catch (err) {
    yield put(sessionActions.sessionErrors(err));
  }
}

export function* logInUser(action) {
  try {
    const data = yield call(logIn, action.payload.user);
    yield put({ type: sessionActions.LOG_IN_USER_SUCCESS, data });
  } catch (err) {
    yield put(sessionActions.sessionErrors(err));
  }
}

export function* logOutUser() {
  try {
    const data = yield call(logOut);
    yield put({ type: sessionActions.LOG_OUT_USER_SUCCESS });
  } catch (err) {
    yield put(sessionActions.sessionErrors(err));
  }
}

export function* sessionError(action) {
  yield put({
    type: sessionActions.SESSION_ERRORS_SUCCESS,
    payload: action.payload
  });
}

export default function* rootSaga() {
  yield takeLatest('SIGNUP_REQUEST', signUpNewUser);
  yield takeLatest('LOGIN_REQUEST', logInUser);
  yield takeLatest('LOGOUT_REQUEST', logOutUser);
  yield takeLatest('SESSION_ERRORS_REQUEST', sessionError);
}
