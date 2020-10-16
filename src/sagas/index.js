import { all } from 'redux-saga/effects';
import calculations from './calculations';

export default function* rootSaga() {
  yield all([
    ...calculations,
  ]);
}
