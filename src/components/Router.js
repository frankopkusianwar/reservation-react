import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import App from './App';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={App} exact />
    </Switch>
  </BrowserRouter>
);

export default Router;
