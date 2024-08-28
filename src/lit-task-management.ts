import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Task } from './models/Task.js';
import './components/task-item.js';

@customElement('lit-task-management')
export class LitTaskManagement extends LitElement {
  @property({ type: Object }) task: Task = {
    id: 1,
    title: 'Task 1',
    completed: false,
  };

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--lit-task-management-background-color);
    }

    main {
      flex-grow: 1;
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  render() {
    return html`
      <main>
        <task-item .task=${this.task}></task-item>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}
