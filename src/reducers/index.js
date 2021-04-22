import { combineReducers } from 'redux';
import sideBar from './sideBar';
import modalReducer from './modalReducer';
import roomReducer from './roomReducer';
import signupReducer from './signupReducer';
import signinReducer from './signinReaducer';
import modalLogin from './modalLogin';
import reservationReducer from './reservation';

const rootReducer = combineReducers({
  sidebarOpen: sideBar,
  modal: modalReducer,
  loginModal: modalLogin,
  rooms: roomReducer,
  register: signupReducer,
  login: signinReducer,
  reservations: reservationReducer,
});

export default rootReducer;
