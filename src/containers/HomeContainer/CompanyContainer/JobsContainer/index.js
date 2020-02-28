import React, { Component } from 'react';
import { connect } from 'react-redux';

import Jobs from '../../../../components/Home/Company/Jobs';

class JobsContainer extends Component {
  render() {
    const { user } = this.props;

    return <Jobs jobs={user.jobs ? user.jobs : []} />;
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(JobsContainer);
