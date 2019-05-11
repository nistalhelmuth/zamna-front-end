import React from 'react';
import Color from '../../common/color.js';
import Title from '../Text/Title';
import Subtitle from '../Text/Subtitle';
import Bookcover from '../Bookcover';
import Rating from '../Rating';

import styles from './bookcard.module.css';

const BookCard = ({
  title,
  author,
  imageUrl,
  rating,
  ...props
}) => (
  <div className={styles.Container}>
    <div className={styles.LeftContainer}>
      <Bookcover imageUrl={imageUrl} />
    </div>
    <div className={styles.RightContainer}>
      <Title> {title} </Title>
      <Subtitle> {author} </Subtitle>
      <Rating stars={rating} />
    </div>
  </div>
);


export default BookCard;