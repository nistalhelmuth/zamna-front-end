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
      title,
    },
  } = action;

  try {
    const raw_books = yield call(
      getAllBooks,
      title,
    );
  
    const books_list = raw_books.map(
      book => ({
        id: parseInt(book.best_book.id._text),
        img: book.best_book.image_url._text,
        title: book.best_book.title._text,
        author: book.best_book.author.name._text,
        average_rating: parseFloat(book.average_rating._text),
      })
    );

    yield put(actions.fetchAllBooksSuccess(books_list));
  }
  catch (e) {
    console.log("Error")
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
    yield put(actions.fetchBookSuccess(response.book))
  } catch (e) {
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