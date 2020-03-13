import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../../../actions';
import { withAPI } from '../../../../services/api';
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

    const { api, user, setUser, history } = this.props;
    const { firstName, lastName, phone } = this.state;

    const data = {
      firstName,
      lastName,
      phone
    };

    api
      .updateProfile(user._id, data, user.role)
      .then(response => setUser({ user: response.data }))
      .then(() => history.push(ROUTES.PROFILE))
      .catch(error => this.setState({ error: error.message }));
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
  withAPI,
  withRouter
)(EditContainer);
