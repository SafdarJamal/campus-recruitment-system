import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import { withFirebase } from '../../services/firebase';

import LogIn from '../../components/LogIn';

class LogInContainer extends Component {
  state = {
    email: '',
    password: '',
    isProcessing: false,
    error: null
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isProcessing: true });

    const { firebase, setUser } = this.props;
    const { email, password } = this.state;

    firebase
      .logIn(email, password)
      .then(response => firebase.getUser(response.user.uid))
      .then(querySnapshot => {
        const user = querySnapshot.data();
        setUser({ user });
      })
      .catch(error =>
        this.setState({ isProcessing: false, error: error.message })
      );
  };

  dismissAlert = () => this.setState({ error: null });

  render() {
    const { email, password, isProcessing, error } = this.state;

    return (
      <LogIn
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
  withFirebase
)(LogInContainer);
