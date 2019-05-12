import React from 'react';
import Color from '../../common/color.js';
import Subtitle from '../Text/Subtitle';
import Button from '../Button';
import zamnaName from '../../images/zamnaName.png'

import './header.css';

const Header = ({
    userId,
    ...props
  }) => (
    <div className={"Container"}>
      <div className={"Logo"}> 
        <img 
            className={'LogoImg'}
            src={zamnaName}
        />
      </div>
      <div className={'Input'}> 
        <p className={'Text'}>Buscar:</p>
        <input className={'bookInput'} placeholder={'Nombre del libro'}/>
      </div>
      <div className={'User'}>
            <input className={'UserInput'} placeholder={'Usuario'}/>
            <input className={'PassInput'} type={'password'} placeholder={'Contraseña'}/>
            <Button style={{height: '50%', width: '7rem', }}>
                <p className={'Text'}> Ingresar </p>
            </Button>
      </div>
    </div>
  );

  export default Header;