import React, { Component } from 'react';
import { connect } from 'react-redux';

import SpotifyPlayer from 'react-spotify-player';

import * as actions from '../../actions/playlist';
import styles from './playlistcard.module.css';

class PlaylistCard extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {playlist, voteAction} = this.props
    return(
      <div className={styles.playlistCard}>
        <SpotifyPlayer
          uri={playlist.uri}
          size={'compact'}
        />
        <div className={styles.votesContainer}>
          <button onClick={voteAction(1)}/>
          <h3>{playlist.votes}</h3>
          <button onClick={voteAction(-1)}/>
        </div>
      </div>
    )
  }
}

export default connect(
  undefined,
  (dispatch, playlist, playlistIndex) => ({
    voteAction(vote) {
      //dispatch(actions.ratePlaylist(playlistIndex,playlist.id,0,vote))
    }
  })
)(PlaylistCard);