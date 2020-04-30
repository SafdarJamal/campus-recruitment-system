import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const EmailVerificationRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user ? (
        user.emailVerified ? (
          <Redirect to={ROUTES.HOME} />
        ) : (
          <Component {...props} />
        )
      ) : (
        <Redirect to={ROUTES.LOG_IN} />
      )
    }
  />
);

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(EmailVerificationRoute);
