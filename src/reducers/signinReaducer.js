const initialState = {
  isLoggingIn: false,
  loggedIn: false,
};
const signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        isLoggingIn: action.payload,
        loggedIn: false,
      };
    case 'LOGIN_USER_SUCESS':
      return {
        ...state,
        isLoggingIn: false,
        loggedIn: true,
        data: action.payload,
      };
    case 'LOGIN_USER_FAILURE':
      return {
        ...state,
        isLoggingIn: false,
        loggedIn: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default signinReducer;
