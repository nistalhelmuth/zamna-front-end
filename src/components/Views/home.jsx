import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaBeer } from 'react-icons/fa';

import * as actions from '../../actions/book'

import BookList from '../BooksList';

class HomeApp extends Component {
  constructor(props) {
    
    super(props);
  }

  componentWillMount() {
    this.props.fetchBook();
  }

  render() {
    return (
      <div>
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