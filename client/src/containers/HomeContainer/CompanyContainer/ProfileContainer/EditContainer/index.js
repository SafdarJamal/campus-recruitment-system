import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../../../../actions';
import { withAPI } from '../../../../../services/api';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../../../../constants/routes';

import Edit from '../../../../../components/Home/Company/Profile/Edit';

class EditContainer extends Component {
  state = {
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    companyName: this.props.user.companyName,
    companyEmail: this.props.user.companyEmail,
    companyPhone: this.props.user.companyPhone,
    error: null
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { api, setUser, history } = this.props;
    const {
      firstName,
      lastName,
      companyName,
      companyEmail,
      companyPhone
    } = this.state;

    const data = {
      firstName,
      lastName,
      companyName,
      companyEmail,
      companyPhone
    };

    api
      .updateProfile(data)
      .then(() => api.getProfile())
      .then(response => setUser({ user: response.data }))
      .then(() => history.push(ROUTES.PROFILE))
      .catch(error => this.setState({ error: error.response.data.message }));
  };

  render() {
    const {
      firstName,
      lastName,
      companyName,
      companyEmail,
      companyPhone,
      error
    } = this.state;

    return (
      <Edit
        firstName={firstName}
        lastName={lastName}
        companyName={companyName}
        companyEmail={companyEmail}
        companyPhone={companyPhone}
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
