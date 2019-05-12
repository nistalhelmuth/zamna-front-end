import React from 'react';
import Color from '../../common/color.js';

import styles from './footer.css';
import Title from '../Text/Title'
import Subtitle from '../Text/Subtitle'

const Footer = ({
    userId,
    ...props
  }) => (
    <div className={'ContainerF'}>
      <div className={'Company'}>
        <Title className={'Text'}> {'Zamná'} </Title>
            <div className={'Bullets'}>
                <Title className={'Text2'}> {'Acerca de'} </Title>
                <Title className={'Text2'}> {'Privacidad'} </Title>
                <Title className={'Text2'}> {'Ayuda'} </Title>
            </div>
      </div>
      <div className={'Contact'}>
        <Title className={'Text'}> {'Contáctanos'} </Title>
          <img
            className={'Icon'} 
            src={''}
          />
          <img
            className={'Icon'} 
            src={''}
          />
          <img
            className={'Icon'} 
            src={''}
          />
          <img
            className={'Icon'} 
            src={''}
          />
      </div>
    </div>
  );

  export default Footer;