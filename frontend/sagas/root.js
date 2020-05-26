import { all } from 'redux-saga/effects';

import * as sessionSagas from './session';
import * as listSagas from './list';

export default function* rootSaga() {
  yield all([
    sessionSagas.watchSignUpNewUser(),
    sessionSagas.watchLogInUser(),
    sessionSagas.watchLogOutUser(),
    sessionSagas.watchSessionError(),
    listSagas.watchGetAllLists(),
    listSagas.watchListErrors(),
    listSagas.watchCreateNewList(),
  ]);
}
