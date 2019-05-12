import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaBeer } from 'react-icons/fa';

import * as actions from '../../actions/book'
import { dispatch } from 'rxjs/internal/observable/range';

class BookApp extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const pathname = this.props.location.pathname;
    const id = parseInt(pathname.split('/')[2]);
    this.props.getBook(id)
  }

  render() {
    return(<div>{this.props.location.pathname}</div>);
  }

}


export default withRouter(connect(
  undefined,
  dispatch => ({
    getBook(id) {
      dispatch(actions.fetchBook(id))
    },
  }),
)(BookApp));