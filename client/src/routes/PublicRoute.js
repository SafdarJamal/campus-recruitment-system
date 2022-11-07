import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const PublicRoute = ({ user, component: Component }) =>
  !user ? <Component /> : <Navigate to={ROUTES.HOME} />;

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(PublicRoute);
