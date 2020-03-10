import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../../../store/actions';
import { withFirebase } from '../../../../services/firebase';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

import Edit from '../../../../components/Home/Student/Profile/Edit';

class EditContainer extends Component {
  state = {
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    phone: this.props.user.phone,
    error: null
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { user, firebase, history, setUser } = this.props;
    const { firstName, lastName, phone } = this.state;

    const newData = {
      firstName,
      lastName,
      phone
    };

    const userData = { ...user, ...newData };

    firebase
      .updateProfile(firebase.auth.currentUser.uid, userData)
      .then(() => setUser({ user: userData }))
      .then(() => history.push(ROUTES.PROFILE))
      .catch(error => this.setState({ error }));
  };

  render() {
    const { firstName, lastName, phone, error } = this.state;

    return (
      <Edit
        firstName={firstName}
        lastName={lastName}
        phone={phone}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={error}
      />
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default compose(
  connect(mapStateToProps, { setUser }),
  withFirebase,
  withRouter
)(EditContainer);
