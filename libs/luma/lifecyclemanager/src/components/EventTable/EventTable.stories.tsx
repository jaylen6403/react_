import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EventTable } from './EventTable';

export default {
  title: 'Lifecycle Manager 2/EventTable',
  component: EventTable,
  parameters: {
    design: {
      type: 'zeplin',
      url: 'https://app.zeplin.io/project/61f40278858cea167caf22f9/screen/62e05594a3a7ae11b8a47e42',
    },
  },
} as ComponentMeta<typeof EventTable>;

const Template: ComponentStory<typeof EventTable> = () => (
  <div style={{ height: '156.25rem', width: '156.25rem' }}>
    <EventTable />
  </div>
);

export const List = Template.bind({});
