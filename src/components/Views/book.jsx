import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaBeer } from 'react-icons/fa';
import Bookcover from '../Bookcover';
import Rating from '../Rating';
import renderHTML from 'react-render-html';
import SpotifyPlayer from 'react-spotify-player';
import { dispatch } from 'rxjs/internal/observable/range';
import PlaylistCard from '../PlaylistCard';

import * as actions from '../../actions/book';
import * as selectors from '../../reducers';
import styles from './book.module.css';

class BookApp extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const pathname = this.props.location.pathname;
    const id = parseInt(pathname.split('/')[2]);
    this.props.getBook(id)
  }

  render() {
    const { book } = this.props;
    console.log(book)
    console.log(book.platlists)
    return(
      <div className={styles.book}>
        {/*this.props.location.pathname*/}
        <div className={styles.content}>
          <div className={styles.leftContainer}>
            <div className={styles.top}>
              <div className={styles.imgCol}>
                <Bookcover imageUrl={book.img} />
                <h7>Rate this book:</h7>
                <Rating stars={book.average_rating} />
                <h7>{book.num_pages} pages</h7>
                <h7>{book.publisher}</h7>
              </div>
              <div className={styles.infoCol}>
                <h1>{book.title}</h1>
                <h3>by {book.author}</h3>
                <h3>{book.publication_year}</h3>
                <h5>{renderHTML( `<span> ${book.description} </span>` )}</h5>
              </div>
            </div>
            <hr/>
            {book.playlists && book.playlists.map((playlist, i) => <PlaylistCard playlist={playlist} playlistIndex={i}/>)}
          </div>
          <div className={styles.rightContainer}>
            <h3>Similar books:</h3>
            {book.id && book.similar_books.map(book => <Bookcover imageUrl={book.img} />)}
          </div>
        </div> 
      </div>);
  }

}


export default withRouter(connect(
  state => ({
    book: selectors.getBook(state),
  }),
  dispatch => ({
    getBook(id) {
      dispatch(actions.fetchBook(id))
    },
  }),
)(BookApp));