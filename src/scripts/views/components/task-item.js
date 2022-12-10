import taskManipulation from '../../utils/task-manipulation';

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

  set taskId(taskId) {
    this._taskId = taskId;
  }

  render() {
    this.innerHTML = /* HTML */`
    <button>
    <h4>${this._task.name}</h4>
    <p>Scheduled at: ${this._task.schedule}</p>
    </button>
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
      // console.log(`${this._task.name}`);
      // console.log(`${this._taskId}`);
      taskManipulation.editTask(this._taskId, this._task);
    });
  }
}

customElements.define('task-item', TaskItem);
