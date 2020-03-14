import axios from 'axios';

class API {
  constructor() {
    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.headers.common['Auth-Token'] = localStorage.getItem('token');
  }

  signUp = (role, data) => axios.post(`/api/user/signup/${role}`, data);

  logIn = (role, data) => axios.post(`/api/user/login/${role}`, data);

  getCompanies = () => axios.get('/api/companies');

  getCompany = id => axios.get(`/api/companies/${id}`);

  deleteCompany = id => axios.delete(`/api/companies/${id}`);

  getStudents = () => axios.get('/api/students');

  getStudent = id => axios.get(`/api/companies/${id}`);

  deleteStudent = id => axios.delete(`/api/companies/${id}`);

  getJobs = () => axios.get('/api/jobs');

  getJob = id => axios.get(`/api/jobs/${id}`);

  postJob = data => axios.post('/api/jobs', data);

  deleteJob = id => axios.delete(`/api/jobs/${id}`);

  getProfile = () => axios.get('/api/profile');

  updateProfile = data => axios.patch(`/api/profile`, data);
}

export default API;
