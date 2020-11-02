import { combineReducers } from 'redux';
import sideBar from './sideBar'
import modalReducer from './modalReducer'
import roomReducer from './roomReducer'

const rootReducer = combineReducers({
  sidebarOpen: sideBar,
  modalReducer,
  rooms: roomReducer,
});

export default rootReducer;
