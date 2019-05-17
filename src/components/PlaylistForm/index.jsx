import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import Button from '../Button';

import styles from './playlistform.module.css';

class PlaylistForm extends Component {

  onSubmit(values) {
    const { uri } = values;
    const { postPlaylist, book_id } = this.props;
    postPlaylist(uri, book_id);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form 
        className={styles.playlistForm} 
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="off"
      >
        <label>Ingresa el URI de spotify:</label>
        <Field
          name="uri"
          component="input"
          type="text"
          placeholder="URI"
        />
        <Button 
          type="submit"
        >
          Crear PLaylist
        </Button>
      </form>
    )
  }
}

export default reduxForm({ form: 'NewPlaylist' })(PlaylistForm);