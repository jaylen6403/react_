import { ComponentStory, ComponentMeta } from '@storybook/react';
import GridTable from './GridTable';

export default {
  title: 'Secondaries/GridTable',
  component: GridTable,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=612%3A31480',
    },
  },
} as ComponentMeta<typeof GridTable>;

const Template: ComponentStory<typeof GridTable> = (args) => {
  return <GridTable {...args} />;
};

export const OrderTable = Template.bind({});
OrderTable.args = {
  data: {
    orderId: 1342322,
    status: 'FILLED',
    side: 'SELL',
    executed: '2/14/2022 @ 11:30:23 AM',
    account: 4322423,
    associatedRequestId: 1,
    associatedResponseId: 2,
  },
  header: 'Order',
};

export const ModalTable = Template.bind({});
ModalTable.args = {
  data: {
    orderId: 1342322,
    status: 'FILLED',
    side: 'SELL',
    executed: '2/14/2022 @ 11:30:23 AM',
    account: 4322423,
    associatedRequestId: 1,
    associatedResponseId: 2,
  },
};
