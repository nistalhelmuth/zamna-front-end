import React from 'react';
import Color from '../../common/color.js';

import styles from './footer.css';
import Title from '../Text/Title'
import Subtitle from '../Text/Subtitle'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import youtube from '../../images/yt.png'

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
            src={facebook}
          />
          <img
            className={'Icon'} 
            src={twitter}
          />
          <img
            className={'Icon'} 
            src={youtube}
          />
      </div>
    </div>
  );

  export default Footer;