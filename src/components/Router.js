import React from 'react';
import Sidebar from "react-sidebar";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import App from './App';
import Header from './Header'
import SidebarContent from './SideBar'

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
        <Header />
        <Sidebar
          sidebar={<SidebarContent />}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white", width: "15%"} }}
        >
      <FontAwesomeIcon icon={faBars} onClick={() => this.onSetSidebarOpen(true)}/>
      </Sidebar>
        <Switch>
          <Route path="/" component={App} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
