const REGISTER_USER = 'REGISTER_USER';
const REGISTER_USER_SUCESS = 'REGISTER_USER_SUCCESS';
const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const registerUser = () => ({
  type: REGISTER_USER,
  payload: true,
});

export const registerUserSucess = response => ({
  type: REGISTER_USER_SUCESS,
  payload: { msg: response.data },
});

export const registerUserfailure = error => ({
  type: REGISTER_USER_FAILURE,
  payload: { error: error.message },
});

export const signupAction = newUser => (dispatch) => {
  dispatch(registerUser());
  return axios
    .post('https://capstone-api-v1.herokuapp.com/signup', newUser)
    .then((response) => {
      toast.dismiss();
      dispatch(registerUserSucess(response));
      if (response.status === 201) {
        toast.success('Account created successfully', {
          autoClose: 12000,
          hideProgressBar: false,
        });
      } else if (response.status === 200) {
        toast.error(`${response.data.message}`, {
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    })
    .catch(
      (error) => {
        dispatch({
          type: REGISTER_USER_FAILURE,
          payload: error.response.data,
        });
        toast.dismiss();
        toast.error(`${error.response.data.message}`, {
          autoClose: 3000,
          hideProgressBar: true,
        });
      },
    );
};

export default signupAction;
