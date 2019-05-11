import * as types from '../types/book';

export const fetchBook = (
  someparam
) => ({
  type: types.BOOK_FETCHED,
  payload: {
    someparam,
  }
});

export const fetchBookConfirm = (
  book,
) => ({
  type: types.BOOK_FETCHED_CONFIRMED,
  payload: {
    book,
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
