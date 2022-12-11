import Swal from 'sweetalert2';
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
        <div> 
          <h3>Important and Urgent</h3>
          <p>Do it Now !</p>
        </div>
        <button id="info-do" class="quadrant-info">
          <i class="fa fa-info-circle" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="quadrant" id="schedule">
      <div class='four-q-grid-title'>
        <div>
          <h3>Important</h3>
          <p>Scheduled it !</p>
        </div>
        <button id="info-schedule" class="quadrant-info">
          <i class="fa fa-info-circle" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="quadrant" id="delegate">
      <div class='four-q-grid-title'>
        <div> 
          <h3>Urgent</h3>
          <p>Delegate it !</p>
        </div>
        <button id="info-delegate" class="quadrant-info">
          <i class="fa fa-info-circle" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="quadrant" id="eliminate">
      <div class='four-q-grid-title'>
        <div> 
          <h3>Not Important Nor Urgent</h3>
          <p>Eliminate it !</p>
        </div>
        <button id="info-eliminate" class="quadrant-info">
          <i class="fa fa-info-circle" aria-hidden="true"></i>
        </button>
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
        if (!this._tasks[task].schedule) {
          scheduleElement.classList.add('warning');
        }
      } else if (this._tasks[task].urgency) {
        delegateElement.appendChild(taskItemElement);
      } else {
        eliminateElement.appendChild(taskItemElement);
      }
    });

    const doChildElement = doElement.childElementCount - 1;
    if (doChildElement > 2) {
      doElement.classList.add('warning');
    }

    document.querySelectorAll('.quadrant-info').forEach((element) => {
      element.addEventListener('click', () => {
        switch (element.getAttribute('id')) {
          case 'info-do':
            Swal.fire(
              'Important and Urgent',
              'Kuadran ini dipenuhi dengan aktivitas yang sangat mendesak dan penting atau aktivitas yang harus diselesaikan pada waktu yang sangat dekat. Bila aktivitas pada kuadran ini tidak dikerjakan sesegera mungkin, akan mendatangkan masalah di kemudian hari.',
              'info',
            );
            break;
          case 'info-delegate':
            Swal.fire(
              'Urgent',
              'Kuadran ini diisi dengan aktivitas-aktivitas yang penting namun tidak mendesak dan masih memiliki waktu yang banyak untuk dikerjakan. Fokus dalam kuadran ini menekankan pada pencapaian tujuan panjang.',
              'info',
            );
            break;
          case 'info-schedule':
            Swal.fire(
              'Important',
              'Aktivitas pada kuadran ini tidak terlalu penting untuk diselesaikan dengan cepat. Berbeda dengan kuadran Important and Urgent, kegiatan di kuadran ini dapat ditunda sampai aktivitas di kuadran pertama selesai dikerjakan.',
              'info',
            );
            break;
          case 'info-eliminate':
            Swal.fire(
              'Not Important Nor Urgent',
              'Kuadran ini berisi aktivitas tidak mendesak dan tidak penting atau bisa juga disebut kegiatan yang membawa kebahagiaan sesaat. Oleh karena itu, yang termasuk dalam kuadran empat setidaknya perlu dikurangi serta diminimalisir agar tidak membuang-buang waktu.',
              'info',
            );
            break;
          default:
            break;
        }
      });
    });
  }
}

customElements.define('four-q', FourQ);
