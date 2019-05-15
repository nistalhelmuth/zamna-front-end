import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import * as types from '../types/playlist'
import * as actions from '../actions/playlist'
import { postPlaylist, getAllPlaylists, postRateInPlaylist, postCommentInPlaylist } from '../apis/playlist';

function* playlistCreator(action) {
    const {
      payload: {
        name,
        link,
        user,
        description,
        book,
      }
    } = action;
    try {
      const response = yield call(
          postPlaylist,
          name,
          link,
          user,
          description,
          book,
      );
      yield put(actions.createPlaylistsSuccess(response.playlist));
    } catch(e) {
      console.log('Saga playlist creator failed');
    }
}

function* playlistFetcher(action) {
  const {
    payload: {
      book_id,
    }
  } = action;
  try {
    
    const response = yield call(
        getAllPlaylists,
        book_id,
    );
    yield put(actions.fetchPlaylistsSuccess(response));
  } catch(e) {
    console.log('Saga playlist fetcher failed');
  }
}

function* playlistRater(action) {
  const {
    payload: {
      playlist_id,
      user_id,
      votes,
    }
  } = action;
  try {
    const response = yield call(
      postRateInPlaylist,
      playlist_id,
      votes,
    );
    yield put(actions.ratePlaylistSuccess(response.id,response.votes));
  } catch(e) {
    console.log(e);
    console.log('Saga playlist rater failed');
  }
}

function* playlistCommenter(action) {
  const {
    payload: {
      comment,
      playlist,
    }
  } = action;
  try {
    yield call(
      postRateInPlaylist,
      comment,
      playlist,
    );
    yield put(actions.commentPlaylistSuccess());
  } catch(e) {
    console.log('Saga playlist commenter failed');
  }
}

function* UserSaga() {
  yield takeLatest(
    types.PLAYLIST_CREATED,
    playlistCreator,
  );
  yield takeLatest(
    types.ALL_PLAYLIST_FETCHED,
    playlistFetcher,
  )
  yield takeLatest(
    types.PLAYLIST_RATED,
    playlistRater,
  )
  yield takeLatest(
    types.PLAYLIST_COMMENTED,
    playlistCommenter,
  )
}

export default UserSaga;