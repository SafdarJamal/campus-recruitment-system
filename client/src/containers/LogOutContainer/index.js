import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeUser } from '../../actions';

import LogOut from '../../components/LogOut';

class LogOutContainer extends Component {
  state = { isProcessing: false };

  handleLogOut = () => {
    this.setState({ isProcessing: true });

    const { removeUser } = this.props;

    setTimeout(() => {
      localStorage.removeItem('token');
      removeUser();
    }, 1000);
  };

  render() {
    return (
      <LogOut
        handleLogOut={this.handleLogOut}
        isProcessing={this.state.isProcessing}
      />
    );
  }
}

export default connect(null, { removeUser })(LogOutContainer);
