import * as types from '../types/playlist';

// create playlist
export const createPlaylist = () => ({
  type: types.PLAYLIST_CREATED,
  payload: {}
});

export const createPlaylistsConfirm = () => ({
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

export const fetchPlaylistsConfirm = () => ({
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

export const ratePlaylistConfirm = () => ({
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

export const commentPlaylistConfirm = () => ({
  type: types.PLAYLIST_COMMENTED_CONFIRMED,
  payload: {}
});
export const commentPlaylistFail = () => ({
  type: types.PLAYLIST_COMMENTED_CONFIRMED,
  payload: {}
});