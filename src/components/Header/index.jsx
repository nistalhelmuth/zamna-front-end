import React from 'react';
import Color from '../../common/color.js';
import Subtitle from '../Text/Subtitle';
import Button from '../Button';

import './header.css';

const Header = ({
    userId,
    ...props
  }) => (
    <div className={"Container"}>
      <div className={"Logo"}> 
        <img 
            className={'LogoImg'}
            src={'eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDIzIiwicGF0aCI6IlwvZlwvOWFhNWIxZTYtZmQ0Yy00MmMzLWE0ZjAtODM0YzFjYzRlNjEwXC9kY2xrc2cyLTJhOGQzN2UzLTcwZGQtNDZiMy1iNDliLTAyYzIzZGE0ZjIxZC5wbmciLCJ3aWR0aCI6Ijw9MTAyMyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19'}
        />
      </div>
      <div className={'Input'}> 
        <p className={'Text'}>Buscar:</p>
        <input className={'bookInput'} placeholder={'Nombre del libro'}/>
      </div>
      <div className={'User'}>
            <input className={'UserInput'} placeholder={'Usuario'}/>
            <input className={'PassInput'} type={'password'} placeholder={'Contraseña'}/>
            <Button style={{position: 'relative', left: '5rem', height: '50%', width: '7rem', }}>
                <p className={'Text'}> Ingresar </p>
            </Button>
      </div>
    </div>
  );

  export default Header;