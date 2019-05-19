import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaSpotify } from 'react-icons/fa';

import Color from '../../common/color.js';
import Title from '../Text/Title';
import Subtitle from '../Text/Subtitle';
import Bookcover from '../Bookcover';
import Rating from '../Rating';
import Button from '../Button';

import styles from './bookcard.module.css';
import { dispatch } from 'rxjs/internal/observable/range';

const BookCard = ({
  title,
  author,
  imageUrl,
  rating,
  id,
  ...props
}) => (
  <div className={styles.Container}>
    <div className={styles.LeftContainer}>
      <Bookcover imageUrl={imageUrl} />
    </div>
    <div className={styles.RightContainer}>
      <div>
        <Title> {title} </Title>
        <Subtitle> {author} </Subtitle>
        <Rating className={styles.rating} stars={rating} />
      </div>
      <Link to={`/book/${id}`} style={{textDecoration: 'none', margin: 0}}>
        <Button Icon={FaSpotify} iconLeft style={{margin: 0, width: '100%'}}>
          <p className={styles.text}> Playlists </p>
        </Button>
      </Link>
    </div>
  </div>
);


export default withRouter(connect(
  undefined,
  dispatch => ({
    goToBookPage() {
      // push page
    }
  }),
)(BookCard));