const TOGGLE_MENU = 'TOGGLE_MENU';
const SHOW = 'SHOW';
const CLOSE = 'CLOSE';
const SHOW_LOGIN = 'SHOW_LOGIN';
const CLOSE_LOGIN = 'CLOSE_LOGIN';
const CLOSE_LOGIN_SUBMIT = 'CLOSE_LOGIN_SUBMIT';
const FETCH_ROOMS_REQUEST = 'FETCH_ROOMS_REQUEST';
const FETCH_ROOMS_SUCCESS = 'FETCH_ROOMS_SUCCESS';
const FETCH_ROOMS_FAILURE = 'FETCH_ROOMS_FAILURE';

export const toggleMenu = status => ({
  type: TOGGLE_MENU,
  payload: status,
});

export const show = () => ({
  type: SHOW,
  payload: true,
});

export const close = () => ({
  type: CLOSE,
  payload: false,
});

export const showLogin = () => ({
  type: SHOW_LOGIN,
  payload: true,
});

export const closeLogin = () => ({
  type: CLOSE_LOGIN,
  payload: false,
});

export const submitClose = name => ({
  type: CLOSE_LOGIN_SUBMIT,
  payload: name,
});

export const fetchRoomsRequest = () => ({
  type: FETCH_ROOMS_REQUEST,
});

export const fetchRoomsSuccess = rooms => ({
  type: FETCH_ROOMS_SUCCESS,
  payload: rooms,
});

export const fetchRoomsFailure = error => ({
  type: FETCH_ROOMS_FAILURE,
  payload: error,
});
