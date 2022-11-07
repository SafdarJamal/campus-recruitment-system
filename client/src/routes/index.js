import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import Landing from '../components/Landing/Lazy';
import SignUpType from '../components/SignUpType/Lazy';
import SignUpContainer from '../containers/SignUpContainer/Lazy';
import LogInType from '../components/LogInType/Lazy';
import LogInContainer from '../containers/LogInContainer/Lazy';
import HomeContainer from '../containers/HomeContainer/Lazy';
import NotFound from '../components/NotFound/Lazy';

const AppRoutes = () => {
  return (
    <Routes>
      <PublicRoute path={ROUTES.LANDING} component={Landing} />
      <PublicRoute path={ROUTES.SIGN_UP} component={SignUpType} />
      <PublicRoute path={ROUTES.SIGN_UP_COMPANY} component={SignUpContainer} />
      <PublicRoute path={ROUTES.SIGN_UP_STUDENT} component={SignUpContainer} />
      <PublicRoute path={ROUTES.LOG_IN} component={LogInType} />
      <PublicRoute path={ROUTES.LOG_IN_ADMIN} component={LogInContainer} />
      <PublicRoute path={ROUTES.LOG_IN_COMPANY} component={LogInContainer} />
      <PublicRoute path={ROUTES.LOG_IN_STUDENT} component={LogInContainer} />
      <PrivateRoute path={ROUTES.HOME} component={HomeContainer} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
