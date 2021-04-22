const initialState = {
  reservations: [],
  error: '',
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RESERVAION_REQUEST':
      return {
        ...state,
      };
    case 'GE_RESERVATION_SUCCESS':
      return {
        ...state,
        reservations: action.payload,
        error: '',
      };
    case 'GET_RESERVAION_FAILURE':
      return {
        ...state,
        reservations: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reservationReducer;
