import React from 'react';
import * as actions from '../../actions/user';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Color from '../../common/color.js';
import Subtitle from '../Text/Subtitle';
import Button from '../Button';
import zamnaName from '../../images/zamnaName.png'

import * as selectors from '../../reducers';

import styles from './header.module.css';
import { selector } from 'postcss-selector-parser';
import LogInForm from '../LogInForm/index.jsx';

const Header = ({
  userId,
  isLogged,
  login,
  ...props
}) => (
    <div className={styles.Container}>
      <div className={styles.Logo}>
      <Link to={`/home`} style={{textDecoration: 'none', margin: 0}}>
          <img 
              className={styles.LogoImg}
              src={zamnaName}
          />
        </Link>
      </div>
      <div className={`
        ${styles.Input}
        ${isLogged ? styles.InputLogged : null}
      `} >
        <p className={styles.Text}>Buscar:</p>
        <input className={`
          ${styles.bookInput}
          ${isLogged ? styles.InputTextLogged : null}
        `} placeholder={'Nombre del libro'} />
      </div>
      {!isLogged ?
        <LogInForm login={login} /> : null
      }
    </div>
  );

export default connect(
  state => ({
    isLogged: selectors.isLogged(state),
  }),
  dispatch => ({
    login(values) {
      dispatch(actions.logUser(
        values.username,
        values.password,
      ));
    },
  })
)(Header);
