import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ROLES from '../../constants/roles';

import Admin from '../../components/Home/Admin';
import Company from '../../components/Home/Company';
import Student from '../../components/Home/Student';

class HomeContainer extends Component {
  render() {
    const { user } = this.props;

    return (
      <>
        {user.role === ROLES.ADMIN && <Admin user={user} />}
        {user.role === ROLES.COMPANY && <Company user={user} />}
        {user.role === ROLES.STUDENT && <Student user={user} />}
      </>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(HomeContainer);
