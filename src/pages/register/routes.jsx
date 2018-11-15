import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import BasicDetails from '../../containers/registration/BasicDetails';
import SecondaryDetails from '../../containers/registration/SecondaryDetails';
import DietDetails from '../../containers/registration/DietDetails';
import HealthDetails from '../../containers/registration/HealthDetails';
import UserCredentials from '../../containers/registration/UserCredentials';

export default (
    <Route>
      <Switch>
            <Redirect from="/register" to="/register/basicDetails" exact={true} />
            <Route path="/register/basicDetails" component={BasicDetails} />
            <Route path="/register/secondaryDetails" component={SecondaryDetails} />
            <Route path="/register/dietDetails" component={DietDetails} />
            <Route path="/register/healthDetails" component={HealthDetails} />
            <Route path="/register/userCredentials" component={UserCredentials} />
      </Switch>
    </Route>
  );