import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from '../../components/Home';

class HomeContainer extends Component {
  render() {
    return <Home user={this.props.user} />;
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(HomeContainer);
