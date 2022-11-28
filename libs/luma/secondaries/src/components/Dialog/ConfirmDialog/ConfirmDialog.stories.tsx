import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConfirmDialog } from './ConfirmDialog';

export default {
  title: 'Secondaries/Dialog',
  component: ConfirmDialog,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=3332%3A510290',
    },
  },
} as ComponentMeta<typeof ConfirmDialog>;

const Template: ComponentStory<typeof ConfirmDialog> = (args, context) => (
  <ConfirmDialog {...args} />
);
export const ConfirmDialogDefault = Template.bind({});
ConfirmDialogDefault.storyName = 'Confirm Dialog';
ConfirmDialogDefault.args = {
  id: 'rfq-search-name',
  showDialog: true,
  setShowDialog(value: boolean) {
    console.log(value ? 'Dialog opened' : 'Dialog closed');
  },
  deleteText: 'Delete (3)',
  onDelete() {
    console.log('Item deleted');
  },
  title: 'Delete Securit[y/ies]',
  description: 'Do you want to delete the 3 securities selected?',
};
