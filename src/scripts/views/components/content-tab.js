import 'native-html-tabs';
import { getAllTasks } from '../../utils/database-helper';
import './calendar';
import './four-q';
import './task-list';

class ContentTab extends HTMLElement {
  connectedCallback() {
    this.render();
    getAllTasks();
  }

  render() {
    this.innerHTML = /* HTML */`
    <tab-group>
      <tab-title-list>
          <tab-title><button>Calendar</button></tab-title>
          <tab-title active><button>Four Quadrant</button></tab-title>
          <tab-title><button>Task List</button></tab-title>
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
