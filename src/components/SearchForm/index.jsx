import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../../actions/book';
import Button from '../Button';
import * as routes from '../../common/routes';

import styles from './searchform.module.css';

class SearchForm extends Component {

  onChange(values) {
    const { book } = values;
    this.props.history.push(`${routes.HOME}?title=${book}`);
    this.props.search(book);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className={styles.Form} onSubmit={handleSubmit(this.onChange.bind(this))} >
        <p className={styles.Text}>Buscar:</p>
        <Field
          className={styles.bookInput}
          name="book"
          component="input"
          type="text"
          placeholder="Libro..."
        />
      </form>
    );
  }

}

export default withRouter(connect(
  undefined,
  dispatch => ({
    search: (title) => {
      dispatch(actions.fetchAllBooks(title));
    }
  })
)(reduxForm({ form: 'SearchBook' })(SearchForm)));