/* eslint-disable no-undef */

const CREATE_RESERVATION = 'CREATE_RESERVATION';
const CREATE_RESERVATION_SUCESS = 'CREATE_RESERVATION_SUCESS';
const CREATE_RESERVATION_FAILURE = 'CREATE_RESERVATION_FAILURE';

const GET_RESERVATION_REQUEST = 'GET_RESERVATION_RESERVATION';
const GET_RESERVATION_SUCESS = 'GET_RESERVATION_SUCESS';
const GET_RESERVATION_FAILURE = 'GET_RESERVATION_FAILURE';

export const createReservation = () => ({
  type: CREATE_RESERVATION,
  payload: true,
});

export const createReservationSucess = response => ({
  type: CREATE_RESERVATION_SUCESS,
  payload: { msg: response.message },
});

export const createReservationFailure = error => ({
  type: CREATE_RESERVATION_FAILURE,
  payload: error,
});

export const getReservationRequest = () => ({
  type: GET_RESERVATION_REQUEST,
});

export const getReservationSuccess = reservations => ({
  type: GET_RESERVATION_SUCESS,
  payload: reservations,
});

export const getReservationFailure = error => ({
  type: GET_RESERVATION_FAILURE,
  payload: error,
});
