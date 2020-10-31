import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import RoomList from '../containers/RoomList';
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
const Router = () => {

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/rooms" component={RoomList} />
          <Route path="/login" component={LoginForm} exact />
          <Route path="/signup" component={SignupForm} exact />
        </Switch>
      </BrowserRouter>
    );
}

export default Router;
