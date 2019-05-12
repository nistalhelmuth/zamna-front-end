import React from 'react';
import Color from '../../common/color.js';
import Button from '../Button';

import styles from './signup.css';
import Title from '../Text/Title'

const SignUp = ({
    userId,
    ...props
  }) => (
    <div className={'ContainerS'}>
      <div className={'ImageContainer'}> 
        <img
            className={'Image'}
        />
      </div>
      <div className={'SignUp'}> 
        <Title className={'Text'}> {'¿Te gustaría registrarte?'} </Title>
        <input className={'UserInputS'} placeholder={'Usuario'}/>
        <input className={'EmailInputS'} placeholder={'Email'}/>
        <input className={'PassInputS'} type={'password'} placeholder={'Contraseña'}/>
        <Button style={{position: 'relative', left: '5rem', height: '50%', width: '10rem', }}>
                <p className={'Text'}> Registrarse </p>
        </Button>
      </div>
    </div>
  );

  export default SignUp;