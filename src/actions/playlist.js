import * as types from '../types/playlist';

// create playlist
export const createPlaylist = (
  uri,
  book_id,
  user_id,
) => ({
  type: types.PLAYLIST_CREATED,
  payload: {
    uri,
    book_id,
    user_id,
  }
});

export const createPlaylistsSuccess = (
  playlist,
) => ({
  type: types.PLAYLIST_CREATED_SUCCEEDED,
  payload: {
    ...playlist
  }
});

export const createPlaylistsFail = () => ({
  type: types.PLAYLIST_CREATED_FAILED,
  payload: {}
});

// fetch playlists
export const fetchPlaylists = (
  book_id,
) => ({
  type: types.ALL_PLAYLIST_FETCHED,
  payload: {
    book_id,
  }
});

export const fetchPlaylistsSuccess = (
  playlists,
) => ({
  type: types.ALL_PLAYLIST_FETCHED_SUCCEEDED,
  payload: {
    playlists,
  }
});

export const fetchPlaylistsFail = (
  id,
) => ({
  type: types.ALL_PLAYLIST_FETCHED_FAILED,
  payload: {
    id,
  }
});

// rate playlist
export const ratePlaylist = (
  playlist_id,
  user_id,
  votes,
) => ({
  type: types.PLAYLIST_RATED,
  payload: {
    playlist_id,
    user_id,
    votes,
  }
});

export const ratePlaylistSuccess = (
  playlist_id,
  new_votes,
) => ({
  type: types.PLAYLIST_RATED_SUCCEEDED,
  payload: {
    playlist_id,
    new_votes,
  }
});

export const ratePlaylistFail = (
  id,
) => ({
  type: types.PLAYLIST_RATED_FAILED,
  payload: {
    id,
  }
});

// Comment playlist
export const commentPlaylist = (
  book_id,
  playlist_id,
  user_id,
  comment,
) => ({
  type: types.PLAYLIST_COMMENTED,
  payload: {
    book_id,
  playlist_id,
  user_id,
  comment,
  }
});

export const commentPlaylistSuccess = () => ({
  type: types.PLAYLIST_COMMENT_SUCCEEDED,
  payload: {}
});
export const commentPlaylistFail = (
  id,
) => ({
  type: types.PLAYLIST_COMMENT_SUCCEEDED,
  payload: {
    id,
  }
});