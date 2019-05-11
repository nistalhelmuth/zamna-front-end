import * as types from '../types/playlist';

// create playlist
export const createPlaylist = (
  id,
  name,
  link,
  user,
  description,
) => ({
  type: types.PLAYLIST_CREATED,
  payload: {
    id,
    name,
    link,
    user,
    description,
  }
});

export const createPlaylistsSuccess = (
  id,
) => ({
  type: types.PLAYLIST_CREATED_SUCCEEDED,
  payload: {
    id,
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
  type: types.ALL_PLAYLISTS_FETCHED_FAILED,
  payload: {
    id,
  }
});

// rate playlist
export const ratePlaylist = (
  rating,
  playlist,
  user_id,
) => ({
  type: types.PLAYLIST_RATED,
  payload: {
    rating,
    playlist,
    user_id,
  }
});

export const ratePlaylistSuccess = () => ({
  type: types.PLAYLIST_RATED_SUCCEEDED,
  payload: {}
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
  type: types.PLAYLIST_COMMENTED_CONFIRMED,
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