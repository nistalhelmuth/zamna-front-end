import * as types from '../types/user';

export const registerUser = (
  username,
  email,
  password,
) => ({
  type: types.USER_REGISTERED,
  payload: {
    username,
    email,
    password,
  }
});

export const registerUserSuccess = (
  id,
  username,
) => ({
  type: types.USER_REGISTERED_SUCCEEDED,
  payload: {
    id,
    username,
  }
});

export const registerUserFail = () => ({
  type: types.USER_REGISTERED_FAILED,
  payload: {}
});

export const logUser = (
  username,
  password,
) => ({
  type: types.USER_LOGGED,
  payload: {
    username,
    password,
  }
});

export const logUserSuccess = (
  id,
  username,
  jwt,
) => ({
  type: types.USER_LOGGED_SUCCEEDED,
  payload: {
    id,
    username,
    jwt,
  }
});

export const logUserFail = () => ({
  type: types.USER_LOGGED_FAILED,
  payload: {}
});

export const fetchAllUsers = () => ({
  type: types.ALL_USERS_FETCHED,
  payload: {}
});

export const fetchAllUsersSuccess = (
  users,
) => ({
  type: types.ALL_USERS_FETCHED_SUCCEEDED,
  payload: {
    users,
  }
});

export const fetchAllUsersFail = () => ({
  type: types.ALL_USERS_FETCHED_FAILED,
  payload: {}
});

export const fetchUser = (
  id,
) => ({
  type: types.USER_FETCHED,
  payload: {
    id,
  }
});

export const fetchUserSuccess = (
  id,
  username,
) => ({
  type: types.USER_FETCHED_SUCCEEDED,
  payload: {
    id,
    username,
  }
});

export const fetchUserFail = () => ({
  type: types.USER_FETCHED_FAILED,
  payload: {}
});