import React, { Component } from 'react';
import { withFirebase } from '../../services/firebase';

import EmailVerification from '../../components/EmailVerification';

class EmailVerificationContainer extends Component {
  state = {
    success: false,
    error: null
  };

  handleSubmit = e => {
    e.preventDefault();

    const { firebase } = this.props;

    firebase
      .verifyEmail()
      .then(() => this.setState({ success: true, error: null }))
      .catch(error => this.setState({ success: false, error: error.message }));
  };

  render() {
    const { success, error } = this.state;

    return (
      <EmailVerification
        handleSubmit={this.handleSubmit}
        success={success}
        error={error}
      />
    );
  }
}

export default withFirebase(EmailVerificationContainer);
