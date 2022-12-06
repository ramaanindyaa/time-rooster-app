import { signOutHelper } from '../../utils/sign-in-helper';

class UserDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* HTML */`
    <h3>User Detail</h3>
    <h4>Username</h4>
    <button id="sign-out">Sign Out</button>
    `;

    const signOutBtn = document.getElementById('sign-out');
    signOutHelper(signOutBtn);
  }
}

customElements.define('user-detail', UserDetail);
