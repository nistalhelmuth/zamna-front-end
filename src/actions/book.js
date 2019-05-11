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