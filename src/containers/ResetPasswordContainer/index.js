import React, { Component } from 'react';
import { withFirebase } from '../../services/firebase';

import ResetPassword from '../../components/ResetPassword';

class ResetPasswordContainer extends Component {
  state = {
    email: '',
    success: false,
    error: null
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { firebase } = this.props;
    const { email } = this.state;

    firebase
      .resetPassword(email)
      .then(() => this.setState({ success: true, error: null }))
      .catch(error => this.setState({ success: false, error: error.message }));
  };

  render() {
    const { email, success, error } = this.state;

    return (
      <ResetPassword
        email={email}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        success={success}
        error={error}
      />
    );
  }
}

export default withFirebase(ResetPasswordContainer);
