import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import books, * as fromBook from './book';
import user, * as fromUser from './user';
import playlists from './playlist';

export default combineReducers({
    books,
    user,
    playlists,
    form: formReducer,
});

export const getBook = state => fromBook.getBook(state.books);
export const getAllBooks = state => fromBook.getAllBooks(state.books);

export const isLogged = state => fromUser.isLogged(state.user);
export const getUser = state => fromUser.getUser(state.user);

export const getPlaylists = state => fromBook.getPlayListOrder(state.books).map(id => state.playlists[id])
