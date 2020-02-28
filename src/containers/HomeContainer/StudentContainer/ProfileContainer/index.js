import React, { Component } from 'react';
import { connect } from 'react-redux';

import Profile from '../../../../components/Home/Student/Profile';

class ProfileContainer extends Component {
  render() {
    const { user } = this.props;

    return <Profile user={user} />;
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(ProfileContainer);
