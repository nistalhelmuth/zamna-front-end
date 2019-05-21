import React, { Component } from 'react';
import { connect } from 'react-redux';

import SpotifyPlayer from 'react-spotify-player';

import * as actions from '../../actions/playlist';
import styles from './playlistcard.module.css';
import { IoMdArrowRoundUp, IoMdArrowRoundDown } from "react-icons/io";

class PlaylistCard extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {votes,uri, voteAction} = this.props
    return(
      <div className={styles.playlistCard}>
        <SpotifyPlayer
          uri={uri}
          size={'compact'}
        />
        <div className={styles.votesContainer}>
          <IoMdArrowRoundUp 
            className={styles.upDownButton} 
            onClick={() => {voteAction(votes+1)}}
          />
          <h3>{votes}</h3>
          <IoMdArrowRoundDown 
            className={styles.upDownButton} 
            onClick={() => {voteAction(votes-1)}}
          />
        </div>
      </div>
    )
  }
}

export default connect(
  undefined,
  (dispatch, { id }) => ({
    voteAction(value) {
      dispatch(actions.ratePlaylist(id,0,value))
    }
  })
)(PlaylistCard);