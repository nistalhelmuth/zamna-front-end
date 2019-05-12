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
      id,
    },
  } = action;
  const response = yield call(
    getBook,
    id,
  );

  console.log(response.similar_books.book[0]);

  const recomendation = response.similar_books.book.map(
    book => ({
      id: parseInt(book.id._text),
      img: book.image_url._cdata,
      title: book.title._text,
      average_rating: parseFloat(book.average_rating._text),
    })
  );
  
  const book = {
    id: response.id._text,
    average_rating: parseFloat(response.average_rating._text),
    description: response.description._cdata,
    img: response.image_url._text,
    num_pages: parseInt(response.num_pages._cdata),
    publisher: response.publisher._text,
    title: response.title._text,
    similar_books: recomendation,
  };

  console.log(book)

  yield put(actions.fetchBookSuccess(book))
  try {
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