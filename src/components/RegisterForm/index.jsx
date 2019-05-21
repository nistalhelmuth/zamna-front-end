import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';

import Button from '../Button';
import * as actions from '../../actions/user';

import styles from './register.module.css';

export const passwordsMustMatch = (value, allValues) => 
  value !== allValues.password ? 
    alert('Passwords do not match') :
     undefined

class RegisterForm extends Component {

  onSubmit(values) {
    if (values.password === values.passwordConfirmation) {
      const { email, username, password } = values;
      this.props.register(email, username, password);
    } else {
      alert('Error en los registros.');
      this.props.clear();
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form 
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="off"
        className={styles.User}
      >
        <Field 
          className={styles.text_input}
          name="email"
          component="input"
          type="text"
          placeholder="Correo"
        />
        <Field 
          className={styles.text_input}
          name="username"
          component="input"
          type="text"
          placeholder="Usuario"
        />
        <Field 
          className={styles.text_input}
          name="password"
          component="input"
          type="password"
          placeholder="Contraseña"
        />
        <Field 
          className={styles.text_input}
          name="passwordConfirmation"
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

export default connect(
  undefined,
  dispatch => ({
    register: (email, username, password) => {
      dispatch(actions.registerUser(username, email, password));
    },
    clear: () => {
      dispatch(reset('Register'));
    }
  })
)(reduxForm({ form: 'Register' })(RegisterForm));