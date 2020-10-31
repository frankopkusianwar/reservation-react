import React from 'react';
import { Link } from 'react-router-dom';
import Router from './Router'
import Sidebar from "react-sidebar";
import { useDispatch, useSelector } from 'react-redux';
import SidebarContent from './SideBar'
import { toggleMenu } from '../actions/index'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Main = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.sidebarOpen);
  
  const onSetSidebarOpen = (open) => {
    dispatch(toggleMenu(open));
  }
  return (
    <div className="Header">
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
          <Router />
        </Sidebar>
    </div>
  );
}

export default Main;
