import './task-item';

class FourQ extends HTMLElement {
  // connectedCallback() {
  //   this.render();
  // }

  set tasks(tasks) {
    this._tasks = tasks;
    this.render();
  }

  render() {
    this.innerHTML = '';

    Object.keys(this._tasks).forEach((task) => {
      const taskItemElement = document.createElement('task-item');
      taskItemElement.task = this._tasks[task];
      this.appendChild(taskItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = '<h3>Four Quadrant</h3>';
    this.innerHTML += `<h3 class="placeholder">${message}</h2>`;
  }
}

customElements.define('four-q', FourQ);
