import axios from 'axios';
import { toast } from 'react-toastify';
import { fetchRoomsRequest, fetchRoomsSuccess, fetchRoomsFailure } from '../actions/index';
import { loginUser, loginUserSucess, loginUserfailure } from '../actions/signinAction';
import { registerUser, registerUserSucess, registerUserfailure } from '../actions/signupAction';
import {
  createReservation, createReservationSucess, createReservationFailure,
  getReservationRequest, getReservationSuccess, getReservationFailure,
} from '../actions/reservation';

const ALLROOMSURL = 'https://capstone-api-v1.herokuapp.com/rooms';
const ALLRESERVAIONSURL = 'https://capstone-api-v1.herokuapp.com/reservations';

export const signupAction = newUser => dispatch => {
  dispatch(registerUser());
  return axios
    .post('https://capstone-api-v1.herokuapp.com/signup', { user: newUser })
    .then(response => {
      toast.dismiss();
      dispatch(registerUserSucess(response));
      if (response.status === 201) {
        toast.success('Account created successfully', {
          autoClose: 12000,
          hideProgressBar: false,
        });
      } else if (response.status === 200) {
        toast.error(`${response.message}`, {
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    })
    .catch(
      error => {
        dispatch(registerUserfailure(error));
        toast.dismiss();
        toast.error(`${error.response}`, {
          autoClose: 3000,
          hideProgressBar: true,
        });
      },
    );
};

export const signinAction = credentials => dispatch => {
  dispatch(loginUser());
  return axios
    .post('https://capstone-api-v1.herokuapp.com/auth/login', credentials)
    .then(response => {
      localStorage.setItem('token', response.data.auth_token);
      toast.dismiss();
      dispatch(loginUserSucess(response));
      toast.success('successfully loggedin!', {
        autoClose: 12000,
        hideProgressBar: false,
      });
    })
    .catch(
      error => {
        dispatch(loginUserfailure(error));
        toast.dismiss();
        toast.error(`${error.response.message}`, {
          autoClose: 3000,
          hideProgressBar: true,
        });
      },
    );
};

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

export const startCreate = reservation => dispatch => {
  dispatch(createReservation());

  return axios
    .post('https://capstone-api-v1.herokuapp.com/reservations', reservation)
    .then(response => {
      toast.dismiss();
      dispatch(createReservationSucess(response));
      if (response.status === 201) {
        toast.success('Reservation created successfully', {
          autoClose: 12000,
          hideProgressBar: false,
        });
      } else if (response.status === 200) {
        toast.error(`${response.message}`, {
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    })
    .catch(
      error => {
        dispatch(createReservationFailure(error));
        toast.dismiss();
        toast.error(`${error}`, {
          autoClose: 3000,
          hideProgressBar: true,
        });
      },
    );
};

export const fetchReservations = () => dispatch => {
  dispatch(getReservationRequest);
  axios.get(ALLRESERVAIONSURL, {
    headers: {
      Authorization: `${localStorage.token}`,
    },
  }).then(response => {
    const reservations = response.data;
    dispatch(getReservationSuccess(reservations));
  }).catch(error => {
    const errorMessage = error.message;
    dispatch(getReservationFailure(errorMessage));
  });
};
