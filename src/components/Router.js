import React from 'react';
import Sidebar from "react-sidebar";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import App from './App';
import SidebarContent from './SideBar'
import RoomList from '../containers/RoomList';

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <BrowserRouter>
        <Sidebar
          sidebar={<SidebarContent />}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white", width: "15%"} }}
        >
      <div className="Header">
        <FontAwesomeIcon icon={faBars} onClick={() => this.onSetSidebarOpen(true)}/>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      </Sidebar>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/rooms" component={RoomList} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
