import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Loading from './pages/loading/Loading';
import Recommendations from './pages/recommendations/Recommendations';
import Explore from './pages/explore/Explore';
import Hunt from './pages/hunt/Hunt';
import Crave from './pages/crave/Crave';

export default (
  <Route>
    <Switch>
      <Redirect from="/" to="/login" exact={true} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/loading" component={Loading} />
      <Route path="/recommendations" component={Recommendations} />
      <Route path="/explore" component={Explore} />
      <Route path="/hunt" component={Hunt} />
      <Route path="/crave" component={Crave} />
    </Switch>
  </Route>
);
