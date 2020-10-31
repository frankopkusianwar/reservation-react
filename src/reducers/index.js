import { combineReducers } from 'redux';
import sideBar from './sideBar'

const rootReducer = combineReducers({
  sidebarOpen: sideBar,
});

export default rootReducer;