import * as types from '../types/user';

export const registerUser = () => ({
  type: types.USER_REGISTERED,
  payload: {}
});

export const registerUserConfirm = () => ({
  type: types.USER_REGISTERED_CONFIRMED,
  payload: {}
});

export const registerUserFail = () => ({
  type: types.USER_REGISTERED_FAILED,
  payload: {}
});

export const logUser = () => ({
  type: types.USER_LOGGED,
  payload: {}
});

export const logUserConfirm = () => ({
  type: types.USER_LOGGED_CONFIRMED,
  payload: {}
});

export const logUserFail = () => ({
  type: types.USER_LOGGED_FAILED,
  payload: {}
});

export const fetchUser = () => ({
  type: types.USER_FETCHED,
  payload: {}
});

export const fetchUserConfirm = () => ({
  type: types.USER_FETCHED_CONFIRMED,
  payload: {}
});

export const fetchUserFail = () => ({
  type: types.USER_FETCHED_FAILED,
  payload: {}
});