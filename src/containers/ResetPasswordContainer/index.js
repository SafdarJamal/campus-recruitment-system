import React, { Component } from 'react';
import { withFirebase } from '../../services/firebase';

import ResetPassword from '../../components/ResetPassword';

class ResetPasswordContainer extends Component {
  state = {
    email: '',
    isProcessing: false,
    success: false,
    error: null
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isProcessing: true });

    const { firebase } = this.props;
    const { email } = this.state;

    firebase
      .resetPassword(email)
      .then(() =>
        this.setState({ isProcessing: false, success: true, error: null })
      )
      .catch(error =>
        this.setState({
          isProcessing: false,
          success: false,
          error: error.message
        })
      );
  };

  render() {
    const { email, isProcessing, success, error } = this.state;

    return (
      <ResetPassword
        email={email}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isProcessing={isProcessing}
        success={success}
        error={error}
      />
    );
  }
}

export default withFirebase(ResetPasswordContainer);
