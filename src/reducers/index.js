import { combineReducers } from 'redux';
import sideBar from './sideBar'
import modalReducer from './modalReducer'
import roomReducer from './roomReducer'
import signupReducer from './signupReducer'

const rootReducer = combineReducers({
  sidebarOpen: sideBar,
  modalReducer,
  rooms: roomReducer,
  signupReducer,
});

export default rootReducer;
