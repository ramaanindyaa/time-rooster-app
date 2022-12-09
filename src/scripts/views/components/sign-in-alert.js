import { signInHelper } from '../../utils/sign-in-helper';

class signInAlert extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* HTML */`
    <section id="sign-in-box">
    <h3>Please Sign In Before Using The App</h3>
    <button id="sign-in">Sign In</button>
    </section>
    `;

    const signInBtn = document.getElementById('sign-in');
    signInHelper(signInBtn);
  }
}

customElements.define('sign-in-alert', signInAlert);
