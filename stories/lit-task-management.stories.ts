import { html, TemplateResult } from 'lit';
import '../src/lit-task-management.js';

export default {
  title: 'LitTaskManagement',
  component: 'lit-task-management',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  header,
  backgroundColor = 'white',
}: ArgTypes) => html`
  <lit-task-management
    style="--lit-task-management-background-color: ${backgroundColor}"
    .header=${header}
  ></lit-task-management>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
