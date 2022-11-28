import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OrderBlotter } from './OrderBlotter';

export default {
  title: 'Secondaries/OrderBlotter',
  component: OrderBlotter,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=2253%3A455521',
    },
  },
} as ComponentMeta<typeof OrderBlotter>;

const Template: ComponentStory<typeof OrderBlotter> = (args, context) => {
  return (
    <div
      style={{
        height: '156.25rem',
        width: '156.25rem',
      }}
    >
      <OrderBlotter setLiveOrderData={() => undefined} />
    </div>
  );
};
export const Primary = Template.bind({});
