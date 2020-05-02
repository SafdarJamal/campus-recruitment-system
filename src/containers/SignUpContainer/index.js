import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import { withFirebase } from '../../services/firebase';
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

    const { firebase, setUser, location } = this.props;
    const { firstName, lastName, email, password } = this.state;

    firebase
      .signUp(email, password)
      .then(response => {
        const uid = response.user.uid;
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

        const data = {
          uid,
          firstName,
          lastName,
          email,
          role
        };

        return firebase.addUser(uid, data);
      })
      .then(() => firebase.getUser(firebase.auth.currentUser.uid))
      .then(querySnapshot => {
        const user = querySnapshot.data();
        setUser({ user });
      })
      .then(() => firebase.verifyEmail())
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
  withFirebase,
  withRouter
)(SignUpContainer);
