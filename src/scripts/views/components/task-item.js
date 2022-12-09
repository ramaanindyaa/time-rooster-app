import { openTask } from '../../utils/database-helper';

class TaskItem extends HTMLElement {
  // connectedCallback() {
  //   this.render();
  //   this.afterRender();
  // }

  set task(task) {
    this._task = task;
    this.render();
    this.afterRender();
  }

  set taskKey(taskKey) {
    this._taskKey = taskKey;
  }

  render() {
    this.innerHTML = /* HTML */`
    <h4>${this._task.name}</h4>
    <p>Scheduled at: ${this._task.schedule}</p>
    `;
  }

  afterRender() {
    if (this._task.importance) {
      this.classList.add('important');
    }

    if (this._task.urgency) {
      this.classList.add('urgent');
    }

    if (!this._task.importance && !this._task.urgency) {
      this.classList.add('eliminate');
    }

    this.addEventListener('click', (e) => {
      e.stopPropagation();
      console.log(`${this._task.name}`);
      console.log(`${this._taskKey}`);
      openTask(this._taskKey);
    });
  }
}

customElements.define('task-item', TaskItem);
