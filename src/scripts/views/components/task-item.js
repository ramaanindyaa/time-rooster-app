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

    this.addEventListener('click', () => {
      console.log(`${this._task.name}`);
    });
  }
}

customElements.define('task-item', TaskItem);
