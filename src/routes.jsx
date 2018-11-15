import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Register from './pages/register/Register';

export default (
  <Route>
    <Switch>
      <Redirect from="/" to="/login" exact={true} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/register" component={Register} />
    </Switch>
  </Route>
);
