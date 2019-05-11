import * as types from '../types/book';

export const fetchBook = () => ({
  type: types.BOOK_FETCHED,
  payload: {
    id,
  }
});

export const fetchBookSucced = () => ({
  type: types.BOOK_FETCHED_SUCCEEDED,
  payload: {
    
  }
});

export const fetchBookFail = () => ({
  type: types.BOOK_FETCHED_FAILED,
  payload: {}
});

export const fetchAllBooks = (
  someparam
) => ({
  type: types.ALL_BOOKS_FETCHED,
  payload: {
    someparam,
  }
});

export const fetchAllBooksConfirm = (
  books,
) => ({
  type: types.ALL_BOOKS_FETCHED_CONFIRMED,
  payload: {
    books,
  }
});

export const fetchAllBooksFail = () => ({
  type: types.ALL_BOOKS_FETCHED_FAILED,
  payload: {}
});
