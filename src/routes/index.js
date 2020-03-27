import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import Landing from '../components/Landing';
import SignUpType from '../components/SignUpType';
import SignUpContainer from '../containers/SignUpContainer';
import LogInType from '../components/LogInType';
import LogInContainer from '../containers/LogInContainer';
import HomeContainer from '../containers/HomeContainer';
import NotFound from '../components/NotFound';

const Routes = () => {
  return (
    <Switch>
      <PublicRoute path={ROUTES.LANDING} component={Landing} exact />
      <PublicRoute path={ROUTES.SIGN_UP} component={SignUpType} exact />
      <PublicRoute path={ROUTES.SIGN_UP_COMPANY} component={SignUpContainer} />
      <PublicRoute path={ROUTES.SIGN_UP_STUDENT} component={SignUpContainer} />
      <PublicRoute path={ROUTES.LOG_IN} component={LogInType} exact />
      <PublicRoute path={ROUTES.LOG_IN_ADMIN} component={LogInContainer} />
      <PublicRoute path={ROUTES.LOG_IN_COMPANY} component={LogInContainer} />
      <PublicRoute path={ROUTES.LOG_IN_STUDENT} component={LogInContainer} />
      <PrivateRoute path={ROUTES.HOME} component={HomeContainer} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
