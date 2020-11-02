import axios from 'axios';

const TOGGLE_MENU = 'TOGGLE_MENU'
const SHOW = 'SHOW'
const CLOSE = 'CLOSE'
const CLOSE_LOGIN_SUBMIT = 'CLOSE_LOGIN_SUBMIT'
const FETCH_ROOMS_REQUEST = 'FETCH_ROOMS_REQUEST';
const FETCH_ROOMS_SUCCESS = 'FETCH_ROOMS_SUCCESS';
const FETCH_ROOMS_FAILURE = 'FETCH_ROOMS_FAILURE';
const FETCH_ONE_ROOM_REQUEST = 'FETCH_ONE_ROOM_REQUEST';
const FETCH_ONE_ROOM_REQUEST_SUCCESS = 'FETCH_ONE_ROOM_REQUEST_SUCCESS';
const FETCH_ONE_ROOM_REQUEST_FAILURE = 'FETCH_ONE_ROOM_REQUEST_FAILURE';

const ALLROOMSURL = `https://capstone-api-v1.herokuapp.com/rooms`

export const toggleMenu = status => ({
  type: TOGGLE_MENU,
  payload: status,
});

export const show = () => ({
  type: SHOW,
  payload: true
});

export const close = () => ({
  type: CLOSE,
  payload: false
});

export const submitClose = (name) => ({
  type: CLOSE_LOGIN_SUBMIT,
  payload: name,
});


export const fetchRoomsRequest = () => ({
  type: FETCH_ROOMS_REQUEST,
});

export const fetchRoomsSuccess = (rooms) => ({
  type: FETCH_ROOMS_SUCCESS,
  payload: rooms,
});

export const fetchRoomsFailure = error => ({
  type: FETCH_ROOMS_FAILURE,
  payload: error,
});

export const fetchOneRoomRequest = () => ({
  type: FETCH_ONE_ROOM_REQUEST,
});

export const fetchOneRoomSuccess = room => ({
  type: FETCH_ONE_ROOM_REQUEST_SUCCESS,
  payload: room,
});

export const fetchOneRoomFailure = error => ({
  type: FETCH_ONE_ROOM_REQUEST_FAILURE,
  payload: error,
});

export const fetchRooms = () => dispatch => {
  dispatch(fetchRoomsRequest);
  axios.get(ALLROOMSURL).then(response => {
    const rooms = response.data;
    dispatch(fetchRoomsSuccess(rooms));
  }).catch(error => {
    const errorMessage = error.message;
    dispatch(fetchRoomsFailure(errorMessage));
  });
};

export const fetchOneRoom = room_id => dispatch => {
  const ROOMURL = ``;
  dispatch(fetchOneRoom);
  axios.get(ROOMURL).then(response => {
    const room = response.data;
    dispatch(fetchOneRoomSuccess(room));
  }).catch(error => {
    const errorMessage = error.message;
    dispatch(fetchOneRoomFailure(errorMessage));
  });
};
