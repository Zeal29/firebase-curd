
import * as firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey           : 'AIzaSyC13OvsTO5f1GLoM-An3nK9mYQgpNPvO_Q',
  authDomain       : 'fir-curd-21f1a.firebaseapp.com',
  databaseURL      : 'https://fir-curd-21f1a.firebaseio.com',
  projectId        : 'fir-curd-21f1a',
  storageBucket    : 'fir-curd-21f1a.appspot.com',
  messagingSenderId: '206936481470',
  appId            : '1:206936481470:web:2de947162e329b321c88ef',
  measurementId    : 'G-LEDHT9RK1E'
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase.firestore();
