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
      <Route
        path={ROUTES.LANDING}
        element={<PublicRoute component={Landing} />}
      />
      <Route
        path={ROUTES.SIGN_UP}
        element={<PublicRoute component={SignUpType} />}
      />
      <Route
        path={ROUTES.SIGN_UP_COMPANY}
        element={<PublicRoute component={SignUpContainer} />}
      />
      <Route
        path={ROUTES.SIGN_UP_STUDENT}
        element={<PublicRoute component={SignUpContainer} />}
      />
      <Route
        path={ROUTES.LOG_IN}
        element={<PublicRoute component={LogInType} />}
      />
      <Route
        path={ROUTES.LOG_IN_ADMIN}
        element={<PublicRoute component={LogInContainer} />}
      />
      <Route
        path={ROUTES.LOG_IN_COMPANY}
        element={<PublicRoute component={LogInContainer} />}
      />
      <Route
        path={ROUTES.LOG_IN_STUDENT}
        element={<PublicRoute component={LogInContainer} />}
      />
      <Route
        path={`${ROUTES.HOME}/*`}
        element={<PrivateRoute component={HomeContainer} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
