import { all } from 'redux-saga/effects';
import updateSaga from './updateNameSaga';

function* rootSaga() {
  yield all([updateSaga()]);
}
export default rootSaga;
