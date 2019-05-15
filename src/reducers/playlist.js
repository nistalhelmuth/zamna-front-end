import * as types from '../types/playlist';

export const playlistsById = (state = false, action) => {
  switch(action.type) {
    case types.ALL_PLAYLIST_FETCHED_SUCCEEDED: {
      const { playlists } = action.payload;
      let playlist_object = {}
      for (let i in playlists) {
        playlist_object[playlists[i].id] = playlists[i];
      }
      return playlist_object;
    }
    case types.PLAYLIST_RATED_SUCCEEDED: {
      const { playlist_id, new_votes } = action.payload;
      const playlist_data = state[playlist_id];
      playlist_data.votes = new_votes;
      const new_state = {
        ...state,
        [playlist_id]: playlist_data,
      }
      return new_state;
    }
    default: {
      return state;
    }
  }
}

export default playlistsById;

