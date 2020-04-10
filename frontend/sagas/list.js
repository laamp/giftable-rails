import { call, put, takeEvery } from 'redux-saga/effects';

import * as listActions from '../actions/lists';
import { getAllLists } from '../utils/lists';

function* fetchAllLists(action) {
  try {
    const response = yield call(getAllLists, action.payload.id);
    yield put({
      type: listActions.GET_ALL_LISTS_SUCCESS,
      lists: response.data,
    });
  } catch (err) {
    yield put(listActions.listErrors(err));
  }
}

function* listErrors(action) {
  yield put({
    type: listActions.LIST_ERRORS_SUCCESS,
    errors: action.payload.errors.response.data,
  });
}

export function* watchGetAllLists() {
  yield takeEvery(listActions.GET_ALL_LISTS_REQUEST, fetchAllLists);
}

export function* watchListErrors() {
  yield takeEvery(listActions.LIST_ERRORS_REQUEST, listErrors);
}
