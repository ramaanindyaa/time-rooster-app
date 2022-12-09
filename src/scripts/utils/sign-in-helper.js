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
  signInBtn.addEventListener('click', async (e) => {
    e.stopPropagation();
    await signInWithPopup(firebaseAuth, _createLoginProvider());
  });
};

const signOutHelper = (signOutBtn) => {
  signOutBtn.addEventListener('click', async (e) => {
    e.stopPropagation();
    await signOut(firebaseAuth);
  });
};

export {
  signInHelper, signOutHelper,
};
