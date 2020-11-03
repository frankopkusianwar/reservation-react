import { combineReducers } from 'redux';
import sideBar from './sideBar'
import modalReducer from './modalReducer'
import roomReducer from './roomReducer'
import signupReducer from './signupReducer'
import signinReducer from '../reducers/signinReaducer'
import modalLogin from './modalLogin'

const rootReducer = combineReducers({
  sidebarOpen: sideBar,
  modalReducer,
  modalLogin,
  rooms: roomReducer,
  signupReducer,
  signinReducer,
});

export default rootReducer;
