import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from "react-sidebar";
import { useDispatch, useSelector } from 'react-redux';
import SidebarContent from './SideBarContent'
import { toggleMenu } from '../actions/index'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoomList from '../containers/RoomList';
import RoomDetails from '../containers/RoomDetails'
import App from './App';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


const Router = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.sidebarOpen);
  
  const onSetSidebarOpen = (open) => {
    dispatch(toggleMenu(open));
  }
  return (
    <div className="Main">
      <BrowserRouter>
        <Switch>
          <Sidebar
              sidebar={<SidebarContent />}
              open={status}
              onSetOpen={onSetSidebarOpen}
              styles={{ sidebar: { background: "white", width: "15%"} }}
            >
            <div className="Header">
              <FontAwesomeIcon icon={faBars} onClick={() => onSetSidebarOpen(true)}/>
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <Route path="/" component={App} exact />
            <Route path="/login" component={LoginForm} exact />
            <Route path="/signup" component={SignupForm} exact />
            <Route path="/rooms" component={RoomList} />
            <Route path="/details" component={RoomDetails} />
          </Sidebar>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
