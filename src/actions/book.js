import * as types from '../types/book';

export const fetchBook = (id) => ({
  type: types.BOOK_FETCHED,
  payload: {
    id,
  }
});

export const fetchBookSuccess = (
  id,
  title,
  author,
  average_rating,
  original_publication_year,
  img,
  small_img,
) => ({
  type: types.BOOK_FETCHED_SUCCEEDED,
  payload: {
    id,
    title,
    author,
    average_rating,
    original_publication_year,
    img,
    small_img,
  }
});

export const fetchBookFail = (id) => ({
  type: types.BOOK_FETCHED_FAILED,
  payload: {
    id,
  }
});

export const fetchAllBooks = (
  title='he'
) => ({
  type: types.ALL_BOOKS_FETCHED,
  payload: {
    title,
  }
});

export const fetchAllBooksSuccess = (
  books,
) => ({
  type: types.ALL_BOOKS_FETCHED_SUCCEEDED,
  payload: {
    books,
  }
});

export const fetchAllBooksFail = () => ({
  type: types.ALL_BOOKS_FETCHED_FAILED,
  payload: {}
});
