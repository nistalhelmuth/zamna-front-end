import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import Button from '../Button';

import styles from './register.module.css';

class RegisterForm extends Component {

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
          className={styles.UserInput}
          name="username"
          component="input"
          type="text"
          placeholder="Usuario"
        />
        <Field 
          className={styles.PassInput}
          name="password"
          component="input"
          type="password"
          placeholder="Contraseña"
        />
        <Field 
          className={styles.UserInput}
          name="username"
          component="input"
          type="text"
          placeholder="Usuario"
        />
        <Field 
          className={styles.PassInput}
          name="password"
          component="input"
          type="password"
          placeholder="Contraseña"
        />
        <Button type="submit" style={{ height: '50%', width: '7rem' }}>
          <p className={styles.Text}> Ingresar </p>
        </Button>
      </form>
    )
  }
}

export default reduxForm({ form: 'Register' })(RegisterForm);