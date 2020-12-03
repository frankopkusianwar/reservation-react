/* eslint-disable no-undef */

const LOGIN_USER = 'LOGIN_USER';
const LOGIN_USER_SUCESS = 'LOGIN_USER_SUCESS';
const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const loginUser = () => ({
  type: LOGIN_USER,
});

export const loginUserSucess = response => ({
  type: LOGIN_USER_SUCESS,
  payload: { msg: 'looged in', token:response.data.auth_token },
});

export const loginUserfailure = error => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});
