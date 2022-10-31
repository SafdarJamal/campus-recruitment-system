import React, { Component } from 'react';
import { connect } from 'react-redux';

import Profile from '../../../../components/Home/Company/Profile';

class ProfileContainer extends Component {
  state = {
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    companyName: this.props.user.companyName,
    companyEmail: this.props.user.companyEmail,
    companyPhone: this.props.user.companyPhone,
  };

  render() {
    const { firstName, lastName, companyName, companyEmail, companyPhone } =
      this.state;

    return (
      <Profile
        firstName={firstName}
        lastName={lastName}
        companyName={companyName}
        companyEmail={companyEmail}
        companyPhone={companyPhone}
      />
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(ProfileContainer);
