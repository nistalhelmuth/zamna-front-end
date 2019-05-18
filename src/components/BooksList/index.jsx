import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/book';

import Color from '../../common/color.js';
import Title from '../Text/Title';
import Subtitle from '../Text/Subtitle';
import Bookcover from '../Bookcover';
import Rating from '../Rating';
import BookCard from '../BookCard';

import styles from './bookList.module.css';

const BookList = ({
  books=[]
}) => (
  <div className={styles.Container}>
    { books.length > 0 ? 
      books.map(
        book => <BookCard 
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  imageUrl={book.img}
                  rating={book.average_rating}
                 />
      )
    : null}

  </div>
);


export default connect(
  state => ({
    books: selectors.getAllBooks(state),
  }),
  dispatch => ({

  })
)(BookList);