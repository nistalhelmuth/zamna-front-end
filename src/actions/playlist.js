import * as types from '../types/playlist';

export const createPlaylist = () => ({
  type: types.PLAYLIST_CREATED,
  payload: {}
});

export const createPlaylistConfirm = () => ({
  type: types.PLAYLIST_CREATED_CONFIRMED,
  payload: {}
});

export const createPlaylistFail = () => ({
  type: types.PLAYLIST_CREATEED_FAILED,
  payload: {}
});

export const fetchPlaylist = () => ({
  type: types.PLAYLIST_FETCHED,
  payload: {}
});

export const fetchPlaylistConfirm = () => ({
  type: types.PLAYLIST_FETCHED_CONFIRMED,
  payload: {}
});

export const fetchPlaylistFail = () => ({
  type: types.PLAYLIST_FETCHED_FAILED,
  payload: {}
});

export const ratePlaylist = () => ({
  type: types.PLAYLIST_RATED,
  payload: {}
});

export const ratePlaylistConfirm = () => ({
  type: types.PLAYLIST_RATE_CONFIRMED,
  payload: {}
});

export const commentPlaylist = () => ({
  type: types.PLAYLIST_COMMENTED,
  payload: {}
});

export const commentPlaylistConfirm = () => ({
  type: types.PLAYLIST_COMMENTED_CONFIRMED,
  payload: {}
});