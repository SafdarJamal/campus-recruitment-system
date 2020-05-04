import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

import Admin from '../../../components/Home/Admin/Lazy';
import CompaniesContainer from './CompaniesContainer/Lazy';
import StudentsContainer from './StudentsContainer/Lazy';
import JobsContainer from './JobsContainer/Lazy';
import ProfileContainer from './ProfileContainer/Lazy';
import EditContainer from './ProfileContainer/EditContainer/Lazy';
import NotFound from '../../../components/NotFound/Lazy';

class AdminContainer extends Component {
  render() {
    return (
      <Switch>
        <Route path={ROUTES.HOME} component={Admin} exact />
        <Route path={ROUTES.COMPANIES} component={CompaniesContainer} />
        <Route path={ROUTES.STUDENTS} component={StudentsContainer} />
        <Route path={ROUTES.JOBS} component={JobsContainer} />
        <Route path={ROUTES.PROFILE} component={ProfileContainer} exact />
        <Route path={ROUTES.PROFILE_EDIT} component={EditContainer} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default AdminContainer;
