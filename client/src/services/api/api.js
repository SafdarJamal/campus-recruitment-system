import axios from 'axios';

class API {
  constructor() {
    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  signUp = (role, data) => axios.post(`/api/user/signup/${role}`, data);

  logIn = (role, data) => axios.post(`/api/user/login/${role}`, data);

  getCompanies = () =>
    axios.get('/api/companies', {
      headers: { 'Auth-Token': localStorage.getItem('token') },
    });

  getCompany = id =>
    axios.get(`/api/companies/${id}`, {
      headers: { 'Auth-Token': localStorage.getItem('token') },
    });

  deleteCompany = id =>
    axios.delete(`/api/companies/${id}`, {
      headers: { 'Auth-Token': localStorage.getItem('token') },
    });

  getStudents = () =>
    axios.get('/api/students', {
      headers: { 'Auth-Token': localStorage.getItem('token') },
    });

  getStudent = id =>
    axios.get(`/api/students/${id}`, {
      headers: { 'Auth-Token': localStorage.getItem('token') },
    });

  deleteStudent = id =>
    axios.delete(`/api/students/${id}`, {
      headers: { 'Auth-Token': localStorage.getItem('token') },
    });

  getJobs = () =>
    axios.get('/api/jobs', {
      headers: { 'Auth-Token': localStorage.getItem('token') },
    });

  getJob = id =>
    axios.get(`/api/jobs/${id}`, {
      headers: { 'Auth-Token': localStorage.getItem('token') },
    });

  postJob = data =>
    axios.post('/api/jobs', data, {
      headers: { 'Auth-Token': localStorage.getItem('token') },
    });

  applyToJob = id =>
    axios.patch(`/api/jobs/${id}/apply`, null, {
      headers: { 'Auth-Token': localStorage.getItem('token') },
    });

  deleteJob = id =>
    axios.delete(`/api/jobs/${id}`, {
      headers: { 'Auth-Token': localStorage.getItem('token') },
    });

  getProfile = () =>
    axios.get('/api/profile', {
      headers: { 'Auth-Token': localStorage.getItem('token') },
    });

  getProfileById = id =>
    axios.get(`/api/profile/${id}`, {
      headers: { 'Auth-Token': localStorage.getItem('token') },
    });

  updateProfile = data =>
    axios.patch(`/api/profile`, data, {
      headers: { 'Auth-Token': localStorage.getItem('token') },
    });
}

export default API;
