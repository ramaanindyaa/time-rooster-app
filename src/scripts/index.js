import { onAuthStateChanged } from 'firebase/auth';
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import { firebaseAuth } from './utils/initialize-firebase';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      app.renderPage();
    }
    app.renderPage();
  });
});
