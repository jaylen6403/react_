import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RFQBlotter } from './RFQBlotter';

export default {
  title: 'Secondaries/RFQBlotter',
  component: RFQBlotter,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=2253%3A450588',
    },
  },
} as ComponentMeta<typeof RFQBlotter>;

const Template: ComponentStory<typeof RFQBlotter> = (args, context) => {
  return (
    <div
      style={{
        height: '156.25rem',
        width: '156.25rem',
      }}
    >
      <RFQBlotter
        liveRFQData={[]}
        setLiveRFQData={() => null}
        newCreatedRFQs={[]}
        setNewCreatedRFQs={() => null}
      />
    </div>
  );
};
export const Primary = Template.bind({});
