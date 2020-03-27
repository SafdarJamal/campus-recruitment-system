import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import { withAPI } from '../../services/api';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import LogIn from '../../components/LogIn';

class LogInContainer extends Component {
  state = {
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
    const { email, password } = this.state;

    let role = null;

    switch (location.pathname) {
      case ROUTES.LOG_IN_ADMIN:
        role = ROLES.ADMIN;
        break;
      case ROUTES.LOG_IN_COMPANY:
        role = ROLES.COMPANY;
        break;
      case ROUTES.LOG_IN_STUDENT:
        role = ROLES.STUDENT;
        break;
      default:
        break;
    }

    api
      .logIn(role, { email, password })
      .then(response => {
        const { user, token } = response.data;

        localStorage.setItem('token', token);
        setUser({ user });
      })
      .catch(error => this.setState({ error: error.message }));
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <LogIn
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
)(LogInContainer);