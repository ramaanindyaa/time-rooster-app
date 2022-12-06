import { signInHelper } from '../../utils/sign-in-helper';

class signInAlert extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* HTML */`
    <h3>Please Sign In Before Using The App</h3>
    <button id="sign-in">Sign In</button>
    `;

    const signInBtn = document.getElementById('sign-in');
    signInHelper(signInBtn);
  }
}

customElements.define('sign-in-alert', signInAlert);
