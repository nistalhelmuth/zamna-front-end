import React from 'react';
import Color from '../../common/color.js';

import styles from './text.module.css';

const Subtitle = ({
  children,
  ...props,
}) => {
  return (<h3 
    className={`
      ${styles.subtitle}
    `}
    style={{color: Color.greyColor}}
    { ...props }
  >
    {children}
  </h3>)
};


export default Subtitle;