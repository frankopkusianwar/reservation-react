const initialState = {
  loginmodal: false,
  name: "",
  modalInputName: ""
};

const modalLogin = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_LOGIN':
      return { 
        ...state,
        loginmodal: action.payload,
        name: "",
        modalInputName: ""
      }
    case 'CLOSE_LOGIN':
      return { 
        ...state,
        loginmodal: action.payload,
        name: "",
        modalInputName: ""
      }
    case 'CLOSE_LOGIN_SUBMITION':
      return { 
        ...state,
        loginmodal: false,
        name: "",
        modalInputName: action.payload
      }
    default:
      return state;
  }
};

export default modalLogin;
