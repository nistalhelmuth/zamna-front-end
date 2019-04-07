import React from 'react';
import Color from '../../common/color.js';

import styles from './text.module.css';

const H1 = ({
  children,
  ...props,
}) => {
  return (<h1 
    className={`
      ${styles.h1}
    `}
    { ...props }
  >
    {children}
  </h1>)
};


export default H1;