import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaBeer } from 'react-icons/fa';
import Bookcover from '../Bookcover';
import Rating from '../Rating';
import renderHTML from 'react-render-html';
import PlaylistCard from '../PlaylistCard';

import * as actions from '../../actions/book';
import * as playlistActions from '../../actions/playlist';
import * as selectors from '../../reducers';
import styles from './book.module.css';
import Button from '../Button';

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
    const { book,playlists, postPlaylist } = this.props;
    return(
      <div className={styles.book}>

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
            {playlists && playlists.map(playlist => <PlaylistCard votes={playlist.votes} uri={playlist.uri} id={playlist.id}/>)}
            <hr/>
            <div className={styles.postPlaylist}>
              <label>Ingresa el URI de spotify: </label>
              <input placeholder="Uri..."/>
              <Button 
                onClick={() => {postPlaylist('spotify:album:2FKht5Fz3aEk6t9ZEFk5lp')}}>
                Crear PLaylist
              </Button>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <h3>Similar books:</h3>
            {book.id && book.similar_books.map(book => (
                <Link to={`/book/${book.id}`} style={{textDecoration: 'none', margin: 0}}>
                    <Bookcover imageUrl={book.img} />
                </Link>
              ))
            }
          </div>
        </div> 
      </div>);
  }

}


export default withRouter(connect(
  state => ({
    book: selectors.getBook(state),
    playlists: selectors.getPlaylists(state),
  }),
  dispatch => ({
    getBook(id) {
      dispatch(actions.fetchBook(id));
    },
    postPlaylist(uri) {
      dispatch(playlistActions.createPlaylist(uri));
    }
  }),
)(BookApp));