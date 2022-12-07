import 'native-html-tabs';
import './calendar';
import './four-q';
import './task-list';

class ContentTab extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* HTML */`
    <tab-group>
      <tab-title-list>
          <tab-title active>Calendar</tab-title>
          <tab-title>Four Quadrant</tab-title>
          <tab-title>Task List</tab-title>
      </tab-title-list>
      <tab-content-list>
          <tab-content><calendar-element></calendar-element></tab-content>
          <tab-content><four-q></four-q></tab-content>
          <tab-content><task-list></task-list></tab-content>
      </tab-content-list>
    </tab-group>
    `;
  }
}

customElements.define('content-tab', ContentTab);
