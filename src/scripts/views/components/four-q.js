class FourQ extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* HTML */`
    <h3>Four Quadrant</h3>
    `;
  }
}

customElements.define('four-q', FourQ);
