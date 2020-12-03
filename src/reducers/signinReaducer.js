const initialState = {
  loggedIn: false,
};
const signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        loggedIn: false,
      };
    case 'LOGIN_USER_SUCESS':
      return {
        ...state,
        loggedIn: true,
        data: action.payload,
      };
    case 'LOGIN_USER_FAILURE':
      return {
        ...state,
        loggedIn: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default signinReducer;
