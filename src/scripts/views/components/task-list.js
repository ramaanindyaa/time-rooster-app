class TaskList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* HTML */`
    <h3>Task List</h3>
    `;
  }
}

customElements.define('task-list', TaskList);
