import React from 'react';
import Color from '../../common/color.js';

import styles from './button.module.css';

const Button = ({
  color=Color.mainColor,
  secundaryColor=Color.secundaryColor,
  contentColor='light', // light || dark
  zValue = 'float' , //'flat' || 'float' || 'top'
  children,
  Icon,
  iconLeft=false,
  iconRight=false,
  iconTop=false,
  iconBottom=false,
  onClick,
}) => (
  <button className={`
    ${styles.button}
    ${styles[zValue]}
    ${Icon ? styles.hasIcon : ''}
    ${children ? styles.children : ''}
    ${iconLeft ? styles.iconLeft : ''}
    ${iconRight ? styles.iconRight : ''}
    ${iconTop ? styles.iconTop : ''}
    ${iconBottom ? styles.iconBottom : ''}
    ${styles[contentColor]}
  `} 
  style={{
    "background-color": color ? color : "none",
    "background-image": color && secundaryColor ? `linear-gradient(to bottom right, ${secundaryColor}, ${color})` : "none",
  }}
  onClick={()=> console.log(styles)} >
    { Icon && <Icon className="icon" /> }
    {children}
  </button>
);


export default Button;