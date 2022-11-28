import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputDialog } from './InputDialog';

export default {
  title: 'Secondaries/Dialog',
  component: InputDialog,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=932%3A286462',
    },
  },
} as ComponentMeta<typeof InputDialog>;

const Template: ComponentStory<typeof InputDialog> = (args) => (
  <InputDialog {...args} />
);

export const Default = Template.bind({});
Default.storyName = 'Input Dialog';
Default.args = {
  id: 'rfq-search-name',
  showDialog: true,
  setShowDialog(value: boolean) {
    console.log(value ? 'Dialog opened' : 'Dialog closed');
  },
  submitText: 'Search',
  onSubmit() {
    console.log('Submitting new search list name');
  },
  title: 'Search Name',
  setInputTarget: console.log,
  limit: 10,
  parentId: '__parent',
};
