import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyDnwmikQnHOH441QwAEEMGGjog-YiEQ7hU',
  authDomain: 'time-roster.firebaseapp.com',
  databaseURL: 'https://time-roster-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'time-roster',
  storageBucket: 'time-roster.appspot.com',
  messagingSenderId: '1068238494351',
  appId: '1:1068238494351:web:db43a67dd297626c74aefa',
};

const firebaseApp = initializeApp(config);
const firebaseAuth = getAuth(firebaseApp);

function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
}

export { config, firebaseApp, firebaseAuth, getCurrentUser };
