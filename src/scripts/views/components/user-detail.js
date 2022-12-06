class UserDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* HTML */`
    <h3>User Detail</h3>
    <h4>Username</h4>
    `;
  }
}

customElements.define('user-detail', UserDetail);
