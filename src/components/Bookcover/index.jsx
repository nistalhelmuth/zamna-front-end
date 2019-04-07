import React from 'react';
import Color from '../../common/color.js';

import styles from './bookcover.module.css';

const Bookcover = ({
  imageUrl,
  ...props
}) => (
  <img 
    className={`
      ${styles.bookcover}
    `}
    src={imageUrl}
    {...props}
  />
);


export default Bookcover;