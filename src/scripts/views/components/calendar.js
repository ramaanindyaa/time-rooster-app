class Calendar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* HTML */`
    <h3>Calendar Element</h3>
    `;
  }
}

customElements.define('calendar-element', Calendar);
