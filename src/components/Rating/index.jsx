import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { MdStar } from 'react-icons/md';
import Color from '../../common/color.js';

import styles from './rating.module.css';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      rating: props.stars,
    }
  }

  onStartClick = (nextValue, prevValue, name) => {
    this.setState({rating: nextValue});
  }

  render() {
    const { stars, maxStars = 5, book, className } = this.props;
    return (
      <div className={`
        ${styles.ratingContainer}
        ${className}
      `}>
        <StarRatingComponent
          className={styles.rating}
          name={`rate-${book}`}
          starCount={maxStars}
          value={this.state.rating}
          onStarClick={this.onStartClick}
          starColor={Color.mainColor}
          emptyStarColor={Color.secundaryColor}
          renderStarIcon={() =>  <MdStar /> }
        />
        <span className={styles.ratingLabel}> {this.state.rating} </span>
      </div>
    );
  }
}

export default Rating;