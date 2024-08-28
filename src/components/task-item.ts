import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Task } from '../models/Task.js';

@customElement('task-item')
export class TaskItem extends LitElement {
  @property({ type: Object })
  task!: Task;

  static styles = css`
    :host {
      display: block;
      margin-bottom: 8px;
    }
    .task {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f3f3f3;
      padding: 10px;
      border-radius: 4px;
    }
    .completed {
      text-decoration: line-through;
    }
    button {
      margin-left: 10px;
    }
  `;

  toggleCompleted() {
    this.dispatchEvent(
      new CustomEvent('toggle-completed', {
        detail: { id: this.task.id },
        bubbles: true,
        composed: true,
      }),
    );
  }

  deleteTask() {
    this.dispatchEvent(
      new CustomEvent('delete-task', {
        detail: { id: this.task.id },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      <div class="task">
        <span class="${this.task.completed ? 'completed' : ''}"
          >${this.task.title}</span
        >
        <div>
          <button @click=${this.toggleCompleted}>
            ${this.task.completed ? 'Undo' : 'Complete'}
          </button>
          <button @click=${this.deleteTask}>Delete</button>
        </div>
      </div>
    `;
  }
}
