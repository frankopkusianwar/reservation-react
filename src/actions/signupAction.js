const REGISTER_USER = 'REGISTER_USER';
const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const registerUser = () => ({
  type: REGISTER_USER,
  payload: true,
});

export const registerUserSucess = response => ({
  type: REGISTER_USER_SUCCESS,
  payload: { msg: response.message },
});

export const registerUserfailure = error => ({
  type: REGISTER_USER_FAILURE,
  payload: { error: error.message },
});
