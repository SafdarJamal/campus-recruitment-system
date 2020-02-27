import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

import Student from '../../../components/Home/Student';
import CompaniesContainer from './CompaniesContainer';
import JobsContainer from './JobsContainer';
import ProfileContainer from './ProfileContainer';
import NotFound from '../../../components/NotFound';

class StudentContainer extends Component {
  render() {
    return (
      <Switch>
        <Route path={ROUTES.HOME} component={Student} exact />
        <Route path={ROUTES.COMPANIES} component={CompaniesContainer} />
        <Route path={ROUTES.JOBS} component={JobsContainer} />
        <Route path={ROUTES.PROFILE} component={ProfileContainer} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default StudentContainer;
