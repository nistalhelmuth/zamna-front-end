import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import Button from '../Button';

import styles from './login.module.css';

class LogInForm extends Component {

  onSubmit(values) {
    console.log(values);
    this.props.login(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form 
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="off"
        className={styles.User}>
        <Field 
          className={`
            ${styles.UserInput}
            ${styles.text_input}
          `}
          name="username"
          component="input"
          type="text"
          placeholder="Usuario"
        />
        <Field 
          className={`
            ${styles.PassInput}
            ${styles.text_input}
          `}
          name="password"
          component="input"
          type="password"
          placeholder="Contraseña"
        />
        <Button style={{marginTop: '1.5rem'}} type="submit" style={{ height: '50%', width: '7rem' }}>
          Ingresar
        </Button>
      </form>
    )
  }
}

export default reduxForm({ form: 'LogIn' })(LogInForm);