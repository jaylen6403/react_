import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Blotter } from './Blotter';

export default {
  title: 'Secondaries/Blotter',
  component: Blotter,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=2253%3A455521',
    },
  },
} as ComponentMeta<typeof Blotter>;

const Template: ComponentStory<typeof Blotter> = (args, context) => {
  return (
    <div
      style={{
        height: '156.25rem',
        width: '156.25rem',
      }}
    >
      <Blotter
        liveRFQData={[]}
        setLiveRFQData={() => null}
        newCreatedRFQs={[]}
        setNewCreatedRFQs={() => null}
        setLiveOrderData={() => undefined}
      />
    </div>
  );
};
export const Primary = Template.bind({});
