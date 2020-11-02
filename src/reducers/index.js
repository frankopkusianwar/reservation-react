import { combineReducers } from 'redux';
import sideBar from './sideBar'
import modalReducer from './modalReducer'

const rootReducer = combineReducers({
  sidebarOpen: sideBar,
  modalReducer,
});

export default rootReducer;