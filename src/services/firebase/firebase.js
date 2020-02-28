import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from '../../config/firebaseConfig';

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);

    this.analytics = firebase.analytics();
    this.auth = firebase.auth();
    this.firestore = firebase.firestore();
  }

  signUp = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  logIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  logOut = () => this.auth.signOut();

  verifyEmail = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_EMAIL_CONFIRMATION_REDIRECT
    });

  resetPassword = email => this.auth.sendPasswordResetEmail(email);

  updatePassword = password => this.auth.currentUser.updatePassword(password);

  addUser = (uid, userData) =>
    this.firestore
      .collection('users')
      .doc(uid)
      .set(userData);

  getUser = uid =>
    this.firestore
      .collection('users')
      .doc(uid)
      .get();

  getStudents = () =>
    this.firestore
      .collection('users')
      .where('role', '==', 'STUDENT')
      .get();

  getCompanies = () =>
    this.firestore
      .collection('users')
      .where('role', '==', 'COMPANY')
      .get();

  getJobs = () =>
    this.firestore
      .collection('users')
      .where('role', '==', 'COMPANY')
      .get();

  postAJob = (uid, userData) =>
    this.firestore
      .collection('users')
      .doc(uid)
      .update(userData);

  updateProfile = (uid, userData) =>
    this.firestore
      .collection('users')
      .doc(uid)
      .update(userData);
}

export default Firebase;
