/* eslint-disable no-undef */
import axios from 'axios';
import { toast } from 'react-toastify';

const CREATE_RESERVATION = 'CREATE_RESERVATION';
const CREATE_RESERVATION_SUCESS = 'CREATE_RESERVATION_SUCESS';
const CREATE_RESERVATION_FAILURE = 'CREATE_RESERVATION_FAILURE';

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


export const startCreate = reservation => (dispatch) => {
  dispatch(createReservation());
  return axios
    .post('https://capstone-api-v1.herokuapp.com/reservation', {reservation})
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
          payload: error.response,
        });
        toast.dismiss();
        toast.error(`${error.response}`, {
          autoClose: 3000,
          hideProgressBar: true,
        });
      },
    );
};

export default startCreate;
