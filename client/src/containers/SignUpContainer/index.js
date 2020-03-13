import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import { withAPI } from '../../services/api';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import SignUp from '../../components/SignUp';

class SignUpContainer extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    error: null
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { api, setUser, location } = this.props;
    const { firstName, lastName, email, password } = this.state;

    let role = null;

    switch (location.pathname) {
      case ROUTES.SIGN_UP_COMPANY:
        role = ROLES.COMPANY;
        break;
      case ROUTES.SIGN_UP_STUDENT:
        role = ROLES.STUDENT;
        break;
      default:
        break;
    }

    api
      .signUp({ firstName, lastName, email, password }, role)
      .then(response => {
        const { user, token } = response.data;

        localStorage.setItem('token', token);
        setUser({ user });
      })
      .catch(error => this.setState({ error: error.message }));
  };

  render() {
    const { firstName, lastName, email, password, error } = this.state;

    return (
      <SignUp
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={error}
      />
    );
  }
}

export default compose(
  connect(null, { setUser }),
  withAPI,
  withRouter
)(SignUpContainer);
