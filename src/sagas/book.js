import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import * as types from '../types/book'
import * as actions from '../actions/book'
import { getAllBooks, getBook } from '../apis/book';

function* allBooksFetcher(action) {
  const {
    payload: {
      someparam,
    },
  } = action;
  try {
    const response = yield call(
      getAllBooks,
      someparam,
    );
    yield put(actions.fetchAllBooksConfirm(response.books))
  } catch(e){
    console.log('Saga all books fetcher failed');
  }
}

function* BookFetcher(action) {
  const {
    payload: {
      someparam,
    },
  } = action;
  try {
    const response = yield call(
      getBook,
      someparam,
    );
    yield put(actions.fetchBookConfirm(response.book))
  } catch(e){
    console.log('Saga book fetcher failed');
  }
}

function* BookSaga() {
  yield takeLatest(
    types.ALL_BOOKS_FETCHED,
    allBooksFetcher,
  );
  yield takeLatest(
    types.BOOK_FETCHED,
    BookFetcher,
  );
}

export default BookSaga