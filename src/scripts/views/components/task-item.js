import taskManipulation from '../../utils/task-manipulation';

class TaskItem extends HTMLElement {
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
    <h4>${this._task.name}</h4>
    `;
  }

  afterRender() {
    // Add classes for certain condition
    if (this._task.importance) {
      this.classList.add('important');
    }

    if (this._task.urgency) {
      this.classList.add('urgent');
    }

    if (!this._task.importance && !this._task.urgency) {
      this.classList.add('eliminate');
    }

    // Remove [Scheduled at:] from being rendered if its empty
    if (this._task.schedule) {
      this.innerHTML += `<p>Scheduled at: ${this._task.schedule}</p>`;
    }

    this.addEventListener('click', (e) => {
      e.stopPropagation();
      taskManipulation.editTask(this._taskId, this._task);
    });
  }
}

customElements.define('task-item', TaskItem);
