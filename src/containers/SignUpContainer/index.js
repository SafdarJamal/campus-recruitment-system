import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import { withFirebase } from '../../services/firebase';

import SignUp from '../../components/SignUp';

class SignUpContainer extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    error: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { firebase, setUser } = this.props;
    const { firstName, lastName, email, password } = this.state;

    firebase
      .signUp(email, password)
      .then(success => {
        const user = success.user;
        // console.log(user);

        const userData = {
          firstName,
          lastName,
          email
        };

        return firebase.addUser(user.uid, userData);
      })
      .then(() => firebase.getUser(firebase.auth.currentUser.uid))
      .then(querySnapshot => {
        const userData = querySnapshot.data();
        setUser({ user: userData });
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);

        this.setState({ error: errorMessage });
      });
  };

  render() {
    return (
      <SignUp
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
      />
    );
  }
}

export default compose(
  connect(null, { setUser }),
  withFirebase
)(SignUpContainer);
