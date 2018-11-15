import { takeLatest, all } from 'redux-saga/effects';
import register from '../containers/registration/saga';

function* actionWatcher() {
  yield takeLatest('REGISTRATION:NEW_USER', register);

}

export default function* rootSaga() {
  yield all([
    actionWatcher()
  ]);
}
