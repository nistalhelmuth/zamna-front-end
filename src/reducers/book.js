import { combineReducers } from 'redux';
import * as types from '../types/book';

const byId = (state = {}, action) => {
  switch(action.type) {
    case types.ALL_BOOKS_FETCHED_SUCCEEDED: {
      const { books } = action.payload;
      let books_object = {}
      for (let i in books) {
        books_object[books[i].id] = books[i];
      }
      return books_object;
    }
    default: {
      return state;
    }
  }
}

const order = (state = [], action) => {
  switch(action.type) {
    case types.ALL_BOOKS_FETCHED_SUCCEEDED: {
      const { books } = action.payload;
      const newState = Object.values(books).map(book => book.id);
      
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  byId,
  order,
});

export const getBooks = (state) => state.order.map(id => state.byId[id]); 