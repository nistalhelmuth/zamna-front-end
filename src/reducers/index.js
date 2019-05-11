import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import books, * as fromBooks from './book';

export default combineReducers({
    books,
});


export const getAllBooks = (state) => fromBooks.getBooks(state.books);
