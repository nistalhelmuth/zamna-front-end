import * as types from '../types/playlist';

// create playlist
export const createPlaylist = () => ({
  type: types.PLAYLIST_CREATED,
  payload: {}
});

export const createPlaylistsSucced = () => ({
  type: types.PLAYLIST_CREATED_CONFIRMED,
  payload: {}
});

export const createPlaylistsFail = () => ({
  type: types.PLAYLIST_CREATEED_FAILED,
  payload: {}
});

// fetch playlists
export const fetchPlaylists = () => ({
  type: types.PLAYLIST_FETCHED,
  payload: {}
});

export const fetchPlaylistsSucceed = () => ({
  type: types.PLAYLIST_FETCHED_CONFIRMED,
  payload: {}
});

export const fetchPlaylistsFail = () => ({
  type: types.PLAYLIST_FETCHED_FAILED,
  payload: {}
});

// rate playlist
export const ratePlaylist = () => ({
  type: types.PLAYLIST_RATED,
  payload: {}
});

export const ratePlaylistSucceed = () => ({
  type: types.PLAYLIST_RATE_CONFIRMED,
  payload: {}
});

export const ratePlaylistFail = () => ({
  type: types.PLAYLIST_RATE_CONFIRMED,
  payload: {}
});

// Comment playlist
export const commentPlaylist = () => ({
  type: types.PLAYLIST_COMMENTED,
  payload: {}
});

export const commentPlaylistSucceed = () => ({
  type: types.PLAYLIST_COMMENTED_CONFIRMED,
  payload: {}
});
export const commentPlaylistFail = () => ({
  type: types.PLAYLIST_COMMENTED_CONFIRMED,
  payload: {}
});