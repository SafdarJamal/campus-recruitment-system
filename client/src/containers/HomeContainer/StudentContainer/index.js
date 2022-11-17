import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

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
        <Route path="companies" element={<CompaniesContainer />} />
        <Route path="jobs" element={<JobsContainer />} />
        <Route path="profile" element={<ProfileContainer />} />
        <Route path="profile/edit" element={<EditContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default StudentContainer;
