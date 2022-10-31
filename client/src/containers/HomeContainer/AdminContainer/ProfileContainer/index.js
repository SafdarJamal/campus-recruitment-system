import React, { Component } from 'react';
import { connect } from 'react-redux';

import Profile from '../../../../components/Home/Admin/Profile';

class ProfileContainer extends Component {
  state = {
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
  };

  render() {
    const { firstName, lastName } = this.state;

    return <Profile firstName={firstName} lastName={lastName} />;
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(ProfileContainer);
