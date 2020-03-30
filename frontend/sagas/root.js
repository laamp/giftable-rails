import { all } from 'redux-saga/effects';

import * as sessionSagas from './session';

export default function* rootSaga() {
  yield all([
    sessionSagas.watchSignUpNewUser(),
    sessionSagas.watchLogInUser(),
    sessionSagas.watchLogOutUser(),
    sessionSagas.watchSessionError()
  ]);
}
