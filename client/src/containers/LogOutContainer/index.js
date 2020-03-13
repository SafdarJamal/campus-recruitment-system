import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeUser } from '../../actions';

import LogOut from '../../components/LogOut';

class LogOutContainer extends Component {
  handleLogOut = () => {
    const { removeUser } = this.props;

    localStorage.removeItem('token');
    removeUser();
  };

  render() {
    return <LogOut handleLogOut={this.handleLogOut} />;
  }
}

export default connect(null, { removeUser })(LogOutContainer);
