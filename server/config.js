// Import necessary functions from Firebase
const { initializeApp } = require('firebase/app');
const { getFirestore, collection } = require('firebase/firestore');

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC1RLyKLT78lv-_figHZTF9qhD8ttbWSn4',
  authDomain: 'newone-cf383.firebaseapp.com',
  projectId: 'newone-cf383',
  storageBucket: 'newone-cf383.firebasestorage.app',
  messagingSenderId: '1007217521106',
  appId: '1:1007217521106:web:11ba416b0705ea565b180b',
  measurementId: 'G-1FC1E982H3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Access the 'Users' collection
const Users = collection(db, 'Users');

module.exports = Users;
