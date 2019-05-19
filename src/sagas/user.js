import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import * as types from '../types/user'
import * as actions from '../actions/user'
import { postUser, logUser, getAllUsers, getUser } from '../apis/user';

function* userCreator(action) {
    const {
      payload: {
          id,
          username,
          email,
          password,
      }
    } = action;
    try {
      const response = yield call(
          postUser,
          id,
          username,
          email,
          password,
      );
      yield put(actions.registerUserSuccess(response.user));
    } catch(e) {
      console.log('Saga user creator failed');
    }
}

function* userLogger(action){
  const {
    payload: {
        username,
        password,
    }
  } = action;
  try {
    const response = yield call(
        logUser,
        username,
        password,
    );
    const val = yield put(actions.logUserSuccess(response.user));
    console.log(response)
  } catch(e) {
    alert('Usuario o contraseña incorrectas');
  }
}

function* allUsersFetcher() {
  try {
    const response = yield call(getAllUsers);
    yield put(actions.fetchAllUsersSuccess(response.users))
  } catch(e) {
    console.log('Saga get all users failed');
  }
}

function* userFetcher(action) {
  const {
    payload: {
        id,
    }
  } = action;
  try {
    const response = yield call(
      getUser,
      id,
    );
    yield put(actions.fetchUserSuccess(response.user))
  } catch(e) {
    console.log('Saga get user faied')
  }
}


function* UserSaga() {
  yield takeLatest(
    types.USER_REGISTERED,
    userCreator,
  );
  yield takeLatest(
    types.USER_LOGGED,
    userLogger,
  );
  yield takeLatest(
    types.ALL_USERS_FETCHED,
    allUsersFetcher,
  );
  yield takeLatest(
    types.USER_FETCHED,
    userFetcher,
  );
}

export default UserSaga;