import * as types from '../types/user';

export const registerUser = (
  id,
  username,
  email,
  password,
) => ({
  type: types.USER_REGISTERED,
  payload: {
    id,
    username,
    email,
    password,
  }
});

export const registerUserConfirm = (
  user,
) => ({
  type: types.USER_REGISTERED_CONFIRMED,
  payload: {
    user,
  }
});

export const registerUserFail = () => ({
  type: types.USER_REGISTERED_FAILED,
  payload: {}
});

export const logUser = (
  email,
  password,
) => ({
  type: types.USER_LOGGED,
  payload: {
    email,
    password,
  }
});

export const logUserConfirm = (
  user,
) => ({
  type: types.USER_LOGGED_CONFIRMED,
  payload: {
    user,
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

export const fetchAllUsersConfirm = (
  users,
) => ({
  type: types.ALL_USERS_FETCHED_CONFIRMED,
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

export const fetchUserConfirm = (
  user,
) => ({
  type: types.USER_FETCHED_CONFIRMED,
  payload: {
    user,
  }
});

export const fetchUserFail = () => ({
  type: types.USER_FETCHED_FAILED,
  payload: {}
});