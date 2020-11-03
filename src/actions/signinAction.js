/* eslint-disable no-undef */
import axios from 'axios';
import { toast } from 'react-toastify';

const LOGIN_USER = 'LOGIN_USER ';
const LOGIN_USER_SUCESS = 'LOGIN_USER_SUCESS';
const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const loginUser = () => ({
  type: LOGIN_USER,
  payload: true,
});

export const loginUserSucess = response => ({
  type: LOGIN_USER_SUCESS,
  payload: { msg: 'looged in', token:response.data.auth_token },
});

export const loginUserfailure = error => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

export const signinAction = credentials => (dispatch) => {
  console.log(credentials)
  dispatch(loginUser());
  return axios
    .post('https://capstone-api-v1.herokuapp.com/auth/login', credentials)
    .then((response) => {
      console.log(response)
      sessionStorage.setItem('token', response.data.auth_token);
      toast.dismiss();
      dispatch(loginUserSucess(response));
      toast.success('successfully loggedin!', {
        autoClose: 12000,
        hideProgressBar: false,
      });
    })
    .catch(
      (error) => {
        dispatch({
          type: LOGIN_USER_FAILURE,
          payload: error,
        });
        toast.dismiss();
        toast.error(`${error.response.message}`, {
          autoClose: 3000,
          hideProgressBar: true,
        });
      },
    );
};

export default signinAction;
