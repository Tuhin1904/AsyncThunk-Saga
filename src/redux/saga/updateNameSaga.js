import { updateName } from '../slices/firstSlice';
import { put, call, takeEvery } from 'redux-saga/effects';

const getUserName = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users');
  const result = await res.json();
  return result[1].name;
};

function* fetchUser() {
  try {
    const userName = yield call(getUserName);
    console.log('userName', userName);
    yield put(updateName(userName));
  } catch (e) {
    console.log('Error is :', e);
  }
}
// function* changeAge() {
//   yield put(updateAge(10));
// }

// function* changeStatus() {
//   yield put(updateStatus('Sadhu'));
// }

function* updateSaga() {
  yield takeEvery('firstSlice/updateName', fetchUser);
  //   yield takeEvery('firstSlice/updateAge', changeAge);
  //   yield takeEvery('firstSlice/updateStatus', changeStatus);
}

export default updateSaga;
