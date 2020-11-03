import { combineReducers } from 'redux';
import sideBar from './sideBar'
import modalReducer from './modalReducer'
import roomReducer from './roomReducer'
import signupReducer from './signupReducer'
import signinReducer from '../reducers/signinReaducer'
import modalLogin from './modalLogin'
import reservationReducer from './reservation'

const rootReducer = combineReducers({
  sidebarOpen: sideBar,
  modalReducer,
  modalLogin,
  rooms: roomReducer,
  signupReducer,
  signinReducer,
  reservationReducer,
});

export default rootReducer;
