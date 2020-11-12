/* eslint-disable no-undef */
import axios from 'axios';
import { toast } from 'react-toastify';

const CREATE_RESERVATION = 'CREATE_RESERVATION';
const CREATE_RESERVATION_SUCESS = 'CREATE_RESERVATION_SUCESS';
const CREATE_RESERVATION_FAILURE = 'CREATE_RESERVATION_FAILURE';


const GET_RESERVATION_REQUEST = 'GET_RESERVATION_RESERVATION';
const GET_RESERVATION_SUCESS = 'GET_RESERVATION_SUCESS';
const GET_RESERVATION_FAILURE = 'GET_RESERVATION_FAILURE';

const ALLRESERVAIONSURL = "https://capstone-api-v1.herokuapp.com/reservations"

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

export const getReservationSuccess = (reservations) => ({
  type: GET_RESERVATION_SUCESS,
  payload: reservations,
});

export const getReservationFailure = error => ({
  type: GET_RESERVATION_FAILURE,
  payload: error,
});



export const startCreate = reservation => (dispatch) => {
  dispatch(createReservation());

  return axios
    .post('https://capstone-api-v1.herokuapp.com/reservations', reservation,)
    .then((response) => {
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
      (error) => {
        dispatch({
          type: CREATE_RESERVATION_FAILURE,
          payload: error,
        });
        toast.dismiss();
        toast.error(`${error}`, {
          autoClose: 3000,
          hideProgressBar: true,
        });
      },
    );
};


export const fetchReservations = () => dispatch => {
  dispatch(fetchReservaionRequest);
  axios.get(ALLRESERVAIONSURL,{
    headers: {
      'Authorization': `${sessionStorage.token}`
    }}).then(response => {
    const reservations = response.data;
    dispatch(fetchReservaionSuccess(reservations));
  }).catch(error => {
    const errorMessage = error.message;
    dispatch(fetchReservaionsFailure(errorMessage));
  });
};

export default startCreate;
