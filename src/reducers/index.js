import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import books, * as fromBook from './book';

export default combineReducers({
    books,
});

export const getBook = state => fromBook.getBook(state.books);
export const getAllBooks = state => fromBook.getAllBooks(state.books);
