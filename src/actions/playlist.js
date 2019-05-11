import * as types from '../types/playlist';

// create playlist
export const createPlaylist = (
  name,
  link,
  user,
  description,
  book,
) => ({
  type: types.PLAYLIST_CREATED,
  payload: {
    name,
    link,
    user,
    description,
    book,
  }
});

export const createPlaylistsConfirm = (
  playlist,
) => ({
  type: types.PLAYLIST_CREATED_CONFIRMED,
  payload: {
    playlist,
  }
});

export const createPlaylistsFail = () => ({
  type: types.PLAYLIST_CREATED_FAILED,
  payload: {}
});

// fetch playlists
export const fetchPlaylists = (
  someparam,
) => ({
  type: types.ALL_PLAYLISTS_FETCHED,
  payload: {
    someparam,
  }
});

export const fetchPlaylistsConfirm = (
  playlists,
) => ({
  type: types.ALL_PLAYLISTS_FETCHED_CONFIRMED,
  payload: {
    playlists,
  }
});

export const fetchPlaylistsFail = () => ({
  type: types.ALL_PLAYLISTS_FETCHED_FAILED,
  payload: {}
});

// rate playlist
export const ratePlaylist = (
  rating,
  playlist,
) => ({
  type: types.PLAYLIST_RATED,
  payload: {
    rating,
    playlist,
  }
});

export const ratePlaylistConfirm = () => ({
  type: types.PLAYLIST_RATED_CONFIRMED,
  payload: {}
});

export const ratePlaylistFail = () => ({
  type: types.PLAYLIST_RATED_CONFIRMED,
  payload: {}
});

// Comment playlist
export const commentPlaylist = (
  comment,
  playlist,
) => ({
  type: types.PLAYLIST_COMMENTED,
  payload: {
    comment,
    playlist,
  }
});

export const commentPlaylistConfirm = () => ({
  type: types.PLAYLIST_COMMENTED_CONFIRMED,
  payload: {}
});
export const commentPlaylistFail = () => ({
  type: types.PLAYLIST_COMMENTED_CONFIRMED,
  payload: {}
});