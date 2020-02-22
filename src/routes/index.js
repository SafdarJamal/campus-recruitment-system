import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import Landing from '../components/Landing';
import SignUpContainer from '../containers/SignUpContainer';
import LogInContainer from '../containers/LogInContainer';
import HomeContainer from '../containers/HomeContainer';
import NotFound from '../components/NotFound';

const Routes = () => {
  return (
    <Switch>
      <PublicRoute path={ROUTES.LANDING} component={Landing} exact />
      <PublicRoute path={ROUTES.SIGN_UP} component={SignUpContainer} />
      <PublicRoute path={ROUTES.LOG_IN} component={LogInContainer} />
      <PrivateRoute path={ROUTES.HOME} component={HomeContainer} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
