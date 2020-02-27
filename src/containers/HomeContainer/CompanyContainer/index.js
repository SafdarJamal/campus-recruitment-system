import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

import Company from '../../../components/Home/Company';
import StudentsContainer from './StudentsContainer';
import JobsContainer from './JobsContainer';
import ProfileContainer from './ProfileContainer';
import NotFound from '../../../components/NotFound';

class CompanyContainer extends Component {
  render() {
    return (
      <Switch>
        <Route path={ROUTES.HOME} component={Company} exact />
        <Route path={ROUTES.STUDENTS} component={StudentsContainer} />
        <Route path={ROUTES.JOBS} component={JobsContainer} />
        <Route path={ROUTES.PROFILE} component={ProfileContainer} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default CompanyContainer;
