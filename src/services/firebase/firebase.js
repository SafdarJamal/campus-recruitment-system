import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from '../../config/firebaseConfig';
import * as ROLES from '../../constants/roles';

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);

    this.analytics = firebase.analytics();
    this.auth = firebase.auth();
    this.firestore = firebase.firestore();

    this.usersCollectionRef = this.firestore.collection('users');
    this.jobsCollectionRef = this.firestore.collection('jobs');
  }

  signUp = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  logIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  logOut = () => this.auth.signOut();

  resetPassword = email => this.auth.sendPasswordResetEmail(email);

  updatePassword = password => this.auth.currentUser.updatePassword(password);

  addUser = (uid, data) => this.usersCollectionRef.doc(uid).set(data);

  getUser = uid => this.usersCollectionRef.doc(uid).get();

  getCompanies = () =>
    this.usersCollectionRef.where('role', '==', ROLES.COMPANY).get();

  getStudents = () =>
    this.usersCollectionRef.where('role', '==', ROLES.STUDENT).get();

  getJobs = () => this.jobsCollectionRef.get();

  getCompanyJobs = uid => this.jobsCollectionRef.where('uid', '==', uid).get();

  postJob = data => this.jobsCollectionRef.add(data);

  deleteJob = id => this.jobsCollectionRef.doc(id).delete();

  updateProfile = (uid, data) => this.usersCollectionRef.doc(uid).update(data);

  deleteUser = uid => this.usersCollectionRef.doc(uid).delete();
}

export default Firebase;
