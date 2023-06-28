import { call, all, takeEvery } from 'redux-saga/effects';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export function* incrementAsync() {
  yield call(delay, 1000);
  console.log('This is a result of our function with delay');
}

function* watchFunc() {
  yield takeEvery('TEST', incrementAsync);
}

export default function* rootSaga() {
  yield all([
    watchFunc(),
  ]);
}