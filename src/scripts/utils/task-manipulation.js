import Swal from 'sweetalert2';
import { pushTask, removeTask, setTask } from './database-helper';

const _createTaskObject = () => {
  const id = new Date().toISOString();
  const name = document.getElementById('task_name').value;
  const detail = document.getElementById('task_detail').value;
  const importance = document.getElementById('task_importance').checked;
  const urgency = document.getElementById('task_urgency').checked;
  const schedule = document.getElementById('task_schedule').value;
  const dateAdded = new Date().toDateString();

  if (name === '') {
    return null;
  }

  const taskObject = {
    id,
    name,
    urgency,
    importance,
    detail,
    schedule,
    dateAdded,
  };

  return (JSON.parse(JSON.stringify(taskObject)));
};

const _updateTaskObject = (task) => {
  const { id } = task;
  const name = document.getElementById('task_name').value;
  const detail = document.getElementById('task_detail').value;
  const importance = document.getElementById('task_importance').checked;
  const urgency = document.getElementById('task_urgency').checked;
  const schedule = document.getElementById('task_schedule').value;
  const { dateAdded } = task;

  if (name === '') {
    return null;
  }

  const taskObject = {
    id,
    name,
    urgency,
    importance,
    detail,
    schedule,
    dateAdded,
  };

  return (taskObject);
};

const taskManipulation = {
  async taskInputForm() {
    await Swal.fire({
      title: 'Input Task',
      html: /* HTML */ `
        <div class="form-element">
          <label for="task_name">Task Name</label>
          <input id="task_name" class="swal2-input">
        </div>
        <div class="form-element">
          <label for="task_detail">Task Detail</label>
          <textarea id="task_detail" class="swal2-textarea" aria-label="Type your task detail here"></textarea>
        </div>
        <div class="form-element">
          <input id="task_importance" type="checkbox">
          <label for="task_importance" class="swal2-label">Is this Task Important?</label>
        </div>
        <div class="form-element">
          <input id="task_urgency" type="checkbox">
          <label for="task_urgency" class="swal2-label">Is this Task Urgent?</label>
        </div>
        <div class="form-element">
          <label for="task_schedule">(Optional) Schedule Task?</label>
          <input id="task_schedule" class="swal2-input" type="date">
        </div>
      `,
      focusConfirm: false,
      showCloseButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await pushTask(_createTaskObject())
          .then(Swal.fire('Edited!', '', 'success'));
      }
    });
  },

  async editTask(taskId, task) {
    await Swal.fire({
      title: 'Edit Task',
      html: /* HTML */ `
        <div class="form-element">
          <label for="task_name">Task Name</label>
          <input id="task_name" class="swal2-input" value="${task.name}">
        </div>
        <div class="form-element">
          <label for="task_detail">Task Detail</label>
          <textarea id="task_detail" class="swal2-textarea" aria-label="Type your task detail here">${task.detail}</textarea>
        </div>
        <div class="form-element">
          <input id="task_importance" type="checkbox" ${task.importance ? 'checked' : ''}>
          <label for="task_importance" class="swal2-label">Is this Task Important?</label>
        </div>
        <div class="form-element">
          <input id="task_urgency" type="checkbox" ${task.urgency ? 'checked' : ''}>
          <label for="task_urgency" class="swal2-label">Is this Task Urgent?</label>
        </div>
        <div class="form-element">
          <label for="task_schedule">(Optional) Schedule Task?</label>
          <input id="task_schedule" class="swal2-input" type="date" value="${task.schedule}">
        </div>
      `,
      focusConfirm: false,
      showCloseButton: true,
      showDenyButton: true,
      denyButtonText: '<i class="fa fa-trash " aria-hidden="true"></i>',
      confirmButtonText: '<i class="fa fa-check " aria-hidden="true"></i>',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await setTask(taskId, _updateTaskObject(task))
          .then(Swal.fire('Edited!', '', 'success'));
      } else if (result.isDenied) {
        await removeTask(taskId)
          .then(Swal.fire('Deleted!', '', 'success'));
      }
    });
  },
};

export default taskManipulation;
