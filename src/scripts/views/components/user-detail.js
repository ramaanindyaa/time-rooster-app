import { getCurrentUser } from '../../utils/initialize-firebase';
import { signOutHelper } from '../../utils/sign-in-helper';

class UserDetail extends HTMLElement {
  async connectedCallback() {
    const user = await getCurrentUser();
    this.render(user);
  }

  render(user) {
    this.innerHTML = /* HTML */`
    <h3>User Detail</h3>
    <h4>${user.displayName}</h4>
    <button id="sign-out">Sign Out</button>
    `;

    const signOutBtn = document.getElementById('sign-out');
    signOutHelper(signOutBtn);
  }
}

customElements.define('user-detail', UserDetail);
