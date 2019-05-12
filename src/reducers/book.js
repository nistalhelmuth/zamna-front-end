import { combineReducers } from 'redux';
import * as types from '../types/book';
import * as playlistTypes from '../types/playlist';

const currentBook = (state = {}, action) => {
  switch(action.type) {
    case types.BOOK_FETCHED_SUCCEEDED: {
      return action.payload;
    }
    case playlistTypes.ALL_PLAYLIST_FETCHED_SUCCEEDED: {
      const new_state = {
        ...state,
        playlists: action.payload.playlists
      }
      return new_state;
    } 
    case playlistTypes.PLAYLIST_RATED_SUCCEEDED: {
      const {
        playlist_index,
        all_votes,
      } = action.payload
      const new_playlist = state.playlist;
      new_playlist[playlist_index].votes = all_votes;
      const new_state = {
        ...state,
        playlist: new_playlist,
      }
      return new_state;
    }
    default: {
      return state;
    }
  }
};

const byId = (state = {}, action) => {
  switch(action.type) {
    case types.ALL_BOOKS_FETCHED_SUCCEEDED: {
      const { books } = action.payload;
      let books_object = {}
      for (let i in books) {
        books_object[books[i].id] = books[i];
      }
      return books_object;
    }
    default: {
      return state;
    }
  }
}

const order = (state = [], action) => {
  switch(action.type) {
    case types.ALL_BOOKS_FETCHED_SUCCEEDED: {
      const { books } = action.payload;
      const newState = Object.values(books).map(book => book.id);
      
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  currentBook,
  byId,
  order,
});

export const getBook = state => state.currentBook;
export const getAllBooks = (state) => state.order.map(id => state.byId[id]); 