import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { removeUser } from '../../store/actions';
import { withFirebase } from '../../services/firebase';

import LogOut from '../../components/LogOut';

class LogOutContainer extends Component {
  handleLogOut = () => {
    const { firebase, removeUser } = this.props;

    firebase
      .logOut()
      .then(() => {
        removeUser();
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  render() {
    return <LogOut handleLogOut={this.handleLogOut} />;
  }
}

export default compose(
  connect(null, { removeUser }),
  withFirebase
)(LogOutContainer);
