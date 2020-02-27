import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

import Admin from '../../../components/Home/Admin';
import CompaniesContainer from './CompaniesContainer';
import StudentsContainer from './StudentsContainer';
import JobsContainer from './JobsContainer';
import ProfileContainer from './ProfileContainer';
import NotFound from '../../../components/NotFound';

class AdminContainer extends Component {
  render() {
    return (
      <Switch>
        <Route path={ROUTES.HOME} component={Admin} exact />
        <Route path={ROUTES.COMPANIES} component={CompaniesContainer} />
        <Route path={ROUTES.STUDENTS} component={StudentsContainer} />
        <Route path={ROUTES.JOBS} component={JobsContainer} />
        <Route path={ROUTES.PROFILE} component={ProfileContainer} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default AdminContainer;
