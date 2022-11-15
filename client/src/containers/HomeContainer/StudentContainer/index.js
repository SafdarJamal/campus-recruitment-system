import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

import Student from '../../../components/Home/Student/Lazy';
import CompaniesContainer from './CompaniesContainer/Lazy';
import JobsContainer from './JobsContainer/Lazy';
import ProfileContainer from './ProfileContainer/Lazy';
import EditContainer from './ProfileContainer/EditContainer/Lazy';
import NotFound from '../../../components/NotFound/Lazy';

class StudentContainer extends Component {
  render() {
    return (
      <Routes>
        <Route index element={<Student />} />
        <Route path={ROUTES.COMPANIES} element={<CompaniesContainer />} />
        <Route path={ROUTES.JOBS} element={<JobsContainer />} />
        <Route path={ROUTES.PROFILE} element={<ProfileContainer />} />
        <Route path={ROUTES.PROFILE_EDIT} element={<EditContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default StudentContainer;
