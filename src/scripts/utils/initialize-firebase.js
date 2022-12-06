import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyDnwmikQnHOH441QwAEEMGGjog-YiEQ7hU',
  authDomain: 'time-roster.firebaseapp.com',
  projectId: 'time-roster',
  storageBucket: 'time-roster.appspot.com',
  messagingSenderId: '1068238494351',
  appId: '1:1068238494351:web:db43a67dd297626c74aefa',
};

const firebaseApp = initializeApp(config);
const firebaseAuth = getAuth(firebaseApp);

export { firebaseApp, firebaseAuth };
