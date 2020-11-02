const initialState = {
  modal: false,
  name: "",
  modalInputName: ""
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW':
      return { 
        ...state,
        modal: action.payload,
        name: "",
        modalInputName: ""
      }
    case 'CLOSE':
      return { 
        ...state,
        modal: action.payload,
        name: "",
        modalInputName: ""
      }
    case 'CLOSE_LOGIN_SUBMIT':
      return { 
        ...state,
        modal: false,
        name: "",
        modalInputName: action.payload
      }
    default:
      return state;
  }
};

export default modalReducer;
