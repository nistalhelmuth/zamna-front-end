import { fork, all } from 'redux-saga/effects';

import UserSaga from './user';
import BookSaga from './book';
import PlaylistSaga from './playlist';


function* mainSaga() {
  yield all([
    fork(UserSaga),
    fork(BookSaga),
    fork(PlaylistSaga),
  ]);
}

export default mainSaga;