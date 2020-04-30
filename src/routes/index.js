import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import PublicRoute from './PublicRoute';
import EmailVerificationRoute from './EmailVerificationRoute';
import PrivateRoute from './PrivateRoute';

import Landing from '../components/Landing';
import SignUpType from '../components/SignUpType';
import SignUpContainer from '../containers/SignUpContainer';
import EmailVerificationContainer from '../containers/EmailVerificationContainer';
import LogInType from '../components/LogInType';
import LogInContainer from '../containers/LogInContainer';
import ResetPasswordContainer from '../containers/ResetPasswordContainer';
import HomeContainer from '../containers/HomeContainer';
import NotFound from '../components/NotFound';

const Routes = () => {
  return (
    <Switch>
      <PublicRoute path={ROUTES.LANDING} component={Landing} exact />
      <PublicRoute path={ROUTES.SIGN_UP} component={SignUpType} exact />
      <PublicRoute path={ROUTES.SIGN_UP_COMPANY} component={SignUpContainer} />
      <PublicRoute path={ROUTES.SIGN_UP_STUDENT} component={SignUpContainer} />
      <EmailVerificationRoute
        path={ROUTES.EMAIL_VERIFICATION}
        component={EmailVerificationContainer}
      />
      <PublicRoute path={ROUTES.LOG_IN} component={LogInType} exact />
      <PublicRoute path={ROUTES.LOG_IN_ADMIN} component={LogInContainer} />
      <PublicRoute path={ROUTES.LOG_IN_COMPANY} component={LogInContainer} />
      <PublicRoute path={ROUTES.LOG_IN_STUDENT} component={LogInContainer} />
      <PublicRoute
        path={ROUTES.RESET_PASSWORD}
        component={ResetPasswordContainer}
      />
      <PrivateRoute path={ROUTES.HOME} component={HomeContainer} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
