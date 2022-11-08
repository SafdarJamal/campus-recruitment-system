import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route path={ROUTES.HOME} element={<Admin />} />
        <Route path={ROUTES.COMPANIES} element={<CompaniesContainer />} />
        <Route path={ROUTES.STUDENTS} element={<StudentsContainer />} />
        <Route path={ROUTES.JOBS} element={<JobsContainer />} />
        <Route path={ROUTES.PROFILE} element={<ProfileContainer />} />
        <Route path={ROUTES.PROFILE_EDIT} element={<EditContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default AdminContainer;
