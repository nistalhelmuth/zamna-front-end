import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/book'

import H1 from '../Text/H1';
import Subtitle from '../Text/Subtitle';
import styles from './home.module.css';

import logo from '../../images/zamnaLogo.png'
import features from '../../images/features.png'


const LogoCart = () => (
  <div className={styles.startCart}>
    <img id="comp-jr5xq619imgimage" style={{ width: '250px', height: '250px' }} alt="zamná.png" data-type="image" itemprop="image" src={logo} />
    <H1 style={{ margin: '0', color: 'white', fontSize: '100px' }}>Zamná</H1>
    <p style={{ width: '100%', paddingLeft: '4rem', margin: 0, color: 'white', fontSize: '25px', fontWeight: 'light' }}>STARTUP</p>
  </div>
);

class StartApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.start}>

        <div className={styles.startFirst}>
          <div className={styles.startFirstLeft}>
            <H1 style={{ fontSize: '60px', color: 'white', fontWeight: 100 }} >La primera librería de música para tus libros favoritos</H1>
          </div>
          <div className={styles.startFirstRight}>
            <LogoCart />
          </div>
        </div>

        <div className={styles.startSecond}>
          <div>
            <Subtitle style={{fontSize: '40px'}} > Librería de música </Subtitle>
            <Subtitle> Zamná, la librería de música personalizada para tus libros favoritos </Subtitle>
            <img width='500px' style={{margin: '4rem 0 0 0rem'}} src={features} />
          </div>
        </div>

      </div>
        );
      }
    }
    
    export default connect(
      undefined,
      undefined,
)(StartApp);