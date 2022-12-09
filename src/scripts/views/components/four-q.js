import taskManipulation from '../../utils/task-manipulation';
import './task-item';

class FourQ extends HTMLElement {
  set tasks(tasks) {
    this._tasks = tasks;
    this.render();
    this.afterRender();
  }

  async render() {
    this.innerHTML = /* HTML */ `
    <div class="four-q-title">
      <h2 >Four Quadrant</h2>
      <button id="add_task">Add Task</button>
    </div>
    <div class="quadrant" id="do">
      <div class='four-q-grid-title'> 
        <h3>Important and Urgent</h3>
        <p>Do it Now !</p>
      </div>
    </div>
    <div class="quadrant" id="schedule">
      <div class='four-q-grid-title'> 
        <h3>Important</h3>
        <p>Scheduled it !</p>
      </div>
    </div>
    <div class="quadrant" id="delegate">
      <div class='four-q-grid-title'> 
        <h3>Urgent</h3>
        <p>Delegate it !</p>
      </div>
    </div>
    <div class="quadrant" id="eliminate">
      <div class='four-q-grid-title'> 
        <h3>Not Important and Not Urgent</h3>
        <p>Eliminate it if possible !</p>
      </div>
    </div>
    `;
  }

  async afterRender() {
    const addTaskBtn = document.getElementById('add_task');
    addTaskBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      taskManipulation.taskInputForm();
    });
    console.log(this._tasks);

    const doElement = document.getElementById('do');
    const scheduleElement = document.getElementById('schedule');
    const delegateElement = document.getElementById('delegate');
    const eliminateElement = document.getElementById('eliminate');

    Object.keys(this._tasks || {}).forEach((task) => {
      const taskItemElement = document.createElement('task-item');
      taskItemElement.task = this._tasks[task];
      taskItemElement.taskId = task;
      if (this._tasks[task].importance && this._tasks[task].urgency) {
        doElement.appendChild(taskItemElement);
      } else if (this._tasks[task].importance) {
        scheduleElement.appendChild(taskItemElement);
      } else if (this._tasks[task].urgency) {
        delegateElement.appendChild(taskItemElement);
      } else {
        eliminateElement.appendChild(taskItemElement);
      }
    });
  }
}

customElements.define('four-q', FourQ);
