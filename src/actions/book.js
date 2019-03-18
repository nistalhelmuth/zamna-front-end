import * as types from '../types/book';

export const fetchBook = () => ({
  type: types.Book_FETCHED,
  payload: {}
});

export const fetchBookConfirm = () => ({
  type: types.BOOK_FETCHED_CONFIRMED,
  payload: {}
});

export const fetchBookFail = () => ({
  type: types.BOOK_FETCHED_FAILED,
  payload: {}
});