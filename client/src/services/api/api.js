import axios from 'axios';
import * as ROLES from '../../constants/roles';

class API {
  constructor() {
    axios.defaults.baseURL = 'http://localhost:8080';
  }

  signUp = (data, role) => {
    if (role === ROLES.COMPANY) return this.signUpCompany(data);
    if (role === ROLES.STUDENT) return this.signUpStudent(data);
  };

  logIn = (data, role) => {
    if (role === ROLES.ADMIN) return this.logInAdmin(data);
    if (role === ROLES.COMPANY) return this.logInCompany(data);
    if (role === ROLES.STUDENT) return this.logInStudent(data);
  };

  signUpCompany = data => axios.post('/api/user/signup/company', data);
  signUpStudent = data => axios.post('/api/user/signup/student', data);

  logInAdmin = data => axios.post('/api/user/login/admin', data);
  logInCompany = data => axios.post('/api/user/login/company', data);
  logInStudent = data => axios.post('/api/user/login/student', data);

  getCompanies = () =>
    axios.get('/api/companies', {
      headers: { 'Auth-Token': localStorage.getItem('token') }
    });

  getCompany = id =>
    axios.get(`/api/companies/${id}`, {
      headers: { 'Auth-Token': localStorage.getItem('token') }
    });

  deleteCompany = id =>
    axios.delete(`/api/companies/${id}`, {
      headers: { 'Auth-Token': localStorage.getItem('token') }
    });

  getStudents = () =>
    axios.get('/api/students', {
      headers: { 'Auth-Token': localStorage.getItem('token') }
    });

  getStudent = id =>
    axios.get(`/api/companies/${id}`, {
      headers: { 'Auth-Token': localStorage.getItem('token') }
    });

  deleteStudent = id =>
    axios.delete(`/api/companies/${id}`, {
      headers: { 'Auth-Token': localStorage.getItem('token') }
    });

  getJobs = () =>
    axios.get('/api/jobs', {
      headers: { 'Auth-Token': localStorage.getItem('token') }
    });

  getJob = id =>
    axios.get(`/api/jobs/${id}`, {
      headers: { 'Auth-Token': localStorage.getItem('token') }
    });

  deleteJob = id =>
    axios.delete(`/api/jobs/${id}`, {
      headers: { 'Auth-Token': localStorage.getItem('token') }
    });
}

export default API;
