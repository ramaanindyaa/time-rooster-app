import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';
import { firebaseAuth } from './initialize-firebase';

const _createLoginProvider = () => {
  // Use GoogleAuth as Login method
  const loginProvider = new GoogleAuthProvider();
  loginProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  loginProvider.setCustomParameters({ prompt: 'select_account' });
  return loginProvider;
};

const signInHelper = (signInBtn) => {
  signInBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    signInWithPopup(firebaseAuth, _createLoginProvider());
  });
};

const signOutHelper = (signOutBtn) => {
  signOutBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    signOut(firebaseAuth);
  });
};

export { signInHelper, signOutHelper };
