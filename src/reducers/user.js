import { combineReducers } from 'redux';
import * as types from '../types/user';
import * as playlistTypes from '../types/playlist';

export const logged = (state = false, action) => {
  switch(action.type) {
    case types.USER_LOGGED_SUCCEEDED: {
      return true;
    }
    default: {
      return state;
    }
  }
}

export const user = (state = {}, action) => {
  switch(action.type) {
    case types.USER_LOGGED_SUCCEEDED: {
      const { username } = action.payload;
      return {
        username
      };
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  logged,
  user,
});

export const isLogged = state => state.logged;
export const getUser = state => state.user;