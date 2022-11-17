import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

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
        <Route index element={<Company />} />
        <Route path="students" element={<StudentsContainer />} />
        <Route path="jobs" element={<JobsContainer />} />
        <Route path="jobs/new" element={<NewContainer />} />
        <Route path="profile" element={<ProfileContainer />} />
        <Route path="profile/edit" element={<EditContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default CompanyContainer;
