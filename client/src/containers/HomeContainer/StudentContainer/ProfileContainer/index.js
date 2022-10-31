import React, { Component } from 'react';
import { connect } from 'react-redux';

import Profile from '../../../../components/Home/Student/Profile';

class ProfileContainer extends Component {
  state = {
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    phone: this.props.user.phone,
  };

  render() {
    const { firstName, lastName, phone } = this.state;

    return <Profile firstName={firstName} lastName={lastName} phone={phone} />;
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(ProfileContainer);
