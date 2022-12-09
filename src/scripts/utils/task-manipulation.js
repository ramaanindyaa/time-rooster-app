import Swal from 'sweetalert2';
import { pushTask } from './database-helper';

const _createTaskObject = () => {
  const id = new Date().toISOString();
  const name = document.getElementById('task_name').value;
  const detail = document.getElementById('task_detail').value;
  const importance = document.getElementById('task_importance').checked;
  const urgency = document.getElementById('task_urgency').checked;
  const schedule = document.getElementById('task_schedule').value;
  const dateAdded = new Date().toDateString();

  const taskObject = {
    id,
    name,
    urgency,
    importance,
    detail,
    schedule,
    dateAdded,
  };

  if (taskObject.name === '') {
    console.log('task has no name');
    return null;
  }
  return (taskObject);
};

const taskManipulation = {
  async addTask() {
    const { value: formValues } = await Swal.fire({
      title: 'Input Task',
      html: /* HTML */ `
        <div class="form-element">
          <label for="task_name">Task Name</label>
          <input id="task_name" class="swal2-input">
        </div>
        <div class="form-element">
          <label for="task_detail">Task Detail</label>
          <textarea id="task_detail" class="swal2-textarea" aria-label="Type your message here"></textarea>
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
      preConfirm: () => [
        pushTask(_createTaskObject()),
      ],
    });

    if (formValues) {
      console.log(formValues);
    }
  },
};

export default taskManipulation;
