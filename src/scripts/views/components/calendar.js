import CalendarBox from './calendar-template';

class Calendar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = /* HTML */`
    <h3>Calendar Element</h3>
    ${await CalendarBox.render()}
    `;

    await CalendarBox.afterRender();
  }
}

customElements.define('calendar-element', Calendar);
