import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

import Company from '../../../components/Home/Company/Lazy';
import StudentsContainer from './StudentsContainer/Lazy';
import JobsContainer from './JobsContainer/Lazy';
import NewContainer from './JobsContainer/NewContainer/Lazy';
import ProfileContainer from './ProfileContainer/Lazy';
import EditContainer from './ProfileContainer/EditContainer/Lazy';
import NotFound from '../../../components/NotFound/Lazy';

class CompanyContainer extends Component {
  render() {
    return (
      <Routes>
        <Route path={ROUTES.HOME} element={<Company />} exact />
        <Route path={ROUTES.STUDENTS} element={<StudentsContainer />} />
        <Route path={ROUTES.JOBS} element={<JobsContainer />} exact />
        <Route path={ROUTES.JOBS_NEW} element={<NewContainer />} />
        <Route path={ROUTES.PROFILE} element={<ProfileContainer />} exact />
        <Route path={ROUTES.PROFILE_EDIT} element={<EditContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default CompanyContainer;
