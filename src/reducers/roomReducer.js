const initialState = {
  rooms: [],
  error: '',
};

const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ROOMS_REQUEST':
      return {
        ...state,
      };
    case 'FETCH_ROOMS_SUCCESS':
      return {
        ...state,
        rooms: action.payload.result,
        error: '',
      };
    case 'FETCH_ROOMS_FAILURE':
      return {
        ...state,
        rooms: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default roomsReducer;
