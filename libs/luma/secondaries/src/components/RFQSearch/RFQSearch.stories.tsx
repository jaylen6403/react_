import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RFQSearch } from './RFQSearch';

export default {
  title: 'Secondaries/RFQSearch',
  component: RFQSearch,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=612%3A31480',
    },
  },
} as ComponentMeta<typeof RFQSearch>;

const Template: ComponentStory<typeof RFQSearch> = (args, context) => {
  return (
    <div
      style={{
        height: '19rem',
        width: '56.5rem',
      }}
    >
      <RFQSearch liveRFQData={[]} setLiveRFQData={() => null} />
    </div>
  );
};
export const Primary = Template.bind({});
Primary.args = {};
