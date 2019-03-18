import React from 'react';

import './button.css';

const Button = ({
  color='white',
  zValue = 'float' , //'flat' || 'float' || 'top'
  children,
  Icon,
  iconLeft=false,
  iconRight=false,
  iconTop=false,
  iconBottom=false,
  gradient,
  onClick,
}) => (
  <button className={`
    button
    ${zValue}
    ${Icon ? 'hasIcon' : ''}
    ${children ? 'children' : ''}
    ${iconLeft ? 'iconLeft' : ''}
    ${iconRight ? 'iconRight' : ''}
    ${iconTop ? 'iconTop' : ''}
    ${iconBottom ? 'iconBottom' : ''}
  `} 
  style={{"background-color": color}}
  onClick={()=> console.log(styles)} >
    { Icon && <Icon className="icon" /> }
    {children}
  </button>
);


export default Button;