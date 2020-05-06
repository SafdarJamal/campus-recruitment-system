import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { removeUser } from '../../actions';
import { withFirebase } from '../../services/firebase';

import LogOut from '../../components/LogOut';

class LogOutContainer extends Component {
  state = { isProcessing: false };

  handleLogOut = () => {
    this.setState({ isProcessing: true });

    const { firebase, removeUser } = this.props;

    setTimeout(() => {
      firebase
        .logOut()
        .then(() => removeUser())
        .catch(error => {
          this.setState({ isProcessing: false });
          console.log(error.message);
        });
    }, 1000);
  };

  render() {
    return (
      <LogOut
        isProcessing={this.state.isProcessing}
        handleLogOut={this.handleLogOut}
      />
    );
  }
}

export default compose(
  connect(null, { removeUser }),
  withFirebase
)(LogOutContainer);
