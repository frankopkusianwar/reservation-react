import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Header from './Header'

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={App} exact />
    </Switch>
  </BrowserRouter>
);

export default Router;
