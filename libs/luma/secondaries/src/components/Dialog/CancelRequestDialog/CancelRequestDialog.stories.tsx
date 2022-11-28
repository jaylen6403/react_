import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CancelRequestDialog } from './CancelRequestDialog';

export default {
  title: 'Secondaries/Dialog',
  component: CancelRequestDialog,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=4137%3A497221',
    },
  },
} as ComponentMeta<typeof CancelRequestDialog>;

const Template: ComponentStory<typeof CancelRequestDialog> = (
  args,
  context
) => <CancelRequestDialog {...args} />;
export const CancelRequestDialogDefault = Template.bind({});
CancelRequestDialogDefault.storyName = 'Cancel Request Dialog';
CancelRequestDialogDefault.args = {
  id: 'rfq-search-name',
  showDialog: true,
  setShowDialog(value: boolean) {
    console.log(value ? 'Dialog opened' : 'Dialog closed');
  },
  deleteText: 'CANCEL',
  onDelete() {
    console.log('Item deleted');
  },
  title: 'CANCEL REQUEST',
  description:
    'Are you sure you want to cancel the request? You received [6] bids.',
};
