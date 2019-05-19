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
import SearchForm from '../SearchForm'
import LogInForm from '../LogInForm';
import RegisterForm from '../RegisterForm';
import Popup from "reactjs-popup";

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
        <SearchForm />
      </div>
      {!isLogged ? 
        <div className={styles.Buttons}>
          <Popup
            trigger={<Button style={{padding: '0 2rem'}} >Ingresar</Button>}
            position="bottom center"
            closeOnDocumentClick
            contentStyle={{
              borderRadius: '0.5rem',
              width: '18rem',
            }}
          >
            <LogInForm login={login} /> 
          </Popup> 
          <Popup
            trigger={<Button style={{padding: '0 2rem'}} >Registrar</Button>}
            position="bottom center"
            closeOnDocumentClick
            contentStyle={{
              borderRadius: '0.5rem',
              width: '18rem',
            }}
          >
            <RegisterForm login={login} /> {/*CAMBIAR CON REGISTER*/}
          </Popup>
        </div> : null
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
