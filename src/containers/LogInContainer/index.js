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
    error: null
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { firebase, setUser } = this.props;
    const { email, password } = this.state;

    firebase
      .logIn(email, password)
      .then(response => firebase.getUser(response.user.uid))
      .then(querySnapshot => {
        const user = querySnapshot.data();
        setUser({ user });
      })
      .catch(error => {
        const errorMessage = error.message;
        this.setState({ error: errorMessage });
      });
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
  withFirebase
)(LogInContainer);
