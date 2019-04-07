import React from 'react';
import Color from '../../common/color.js';

import styles from './text.module.css';

const Title = ({
  children,
  ...props,
}) => {
  return (<h2 
    className={`
      ${styles.title}
    `}
    { ...props }
  >
    {children}
  </h2>)
};


export default Title;