import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaBeer } from 'react-icons/fa';
import * as actions from '../../actions/book'

import BookList from '../BooksList';
import styles from './home.module.css';

class HomeApp extends Component {
  constructor(props) {
    
    super(props);
  }

  componentWillMount() {
    this.props.fetchBook();
  }

  render() {
    return (
      <div className={styles.home}>
        <BookList />   
      </div>
    );
  }
}

export default connect(
  undefined,
  dispatch => ({
    fetchBook() {
      dispatch(actions.fetchAllBooks())
    },
  }),
)(HomeApp);