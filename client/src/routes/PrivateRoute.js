import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const PrivateRoute = ({ user, component: Component }) =>
  user ? <Component /> : <Navigate to={ROUTES.LOG_IN} replace />;

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(PrivateRoute);
