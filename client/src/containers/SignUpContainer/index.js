import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import { withAPI } from '../../services/api';
import withRouter from '../../services/withRouter';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import SignUp from '../../components/SignUp';

class SignUpContainer extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isProcessing: false,
    error: null,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isProcessing: true });

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
      .signUp(role, { firstName, lastName, email, password })
      .then(response => {
        const { user, token } = response.data;

        localStorage.setItem('token', token);
        setUser({ user });
      })
      .catch(error =>
        this.setState({
          isProcessing: false,
          error: error.response.data.message,
        })
      );
  };

  dismissAlert = () => this.setState({ error: null });

  render() {
    const { firstName, lastName, email, password, isProcessing, error } =
      this.state;

    return (
      <SignUp
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isProcessing={isProcessing}
        error={error}
        dismissAlert={this.dismissAlert}
      />
    );
  }
}

export default compose(
  connect(null, { setUser }),
  withAPI,
  withRouter
)(SignUpContainer);
