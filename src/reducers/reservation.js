const initialState = {
  isReserving: false,
  reservation: {},
  error: {},
};
const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_RESERVATION':
      return {
        ...state,
        isReserving: action.payload,
        isReserved: false,
      };
    case 'CREATE_RESERVATION_SUCESS':
      return {
        ...state,
        isReserving: false,
        reservation: action.payload,
        isReserved: true,
      };
    case 'CREATE_RESERVATION_FAILURE':
      return {
        ...state,
        error: action.payload,
        isReserved: false,
      };
    default:
      return state;
  }
};

export default reservationReducer;

