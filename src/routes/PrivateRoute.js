import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const PrivateRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user ? <Component {...props} /> : <Redirect to={ROUTES.SIGN_IN} />
    }
  />
);

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(PrivateRoute);
