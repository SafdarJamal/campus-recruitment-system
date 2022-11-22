import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

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
        <Route index element={<Admin />} />
        <Route path="companies" element={<CompaniesContainer />} />
        <Route path="students" element={<StudentsContainer />} />
        <Route path="jobs" element={<JobsContainer />} />
        <Route path="profile" element={<ProfileContainer />} />
        <Route path="profile/edit" element={<EditContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default AdminContainer;
