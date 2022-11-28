import { ComponentStory, ComponentMeta } from '@storybook/react';
import { mockHandlers } from '@luma-fe-workspace/redux';

import { SecurityDetails } from './SecurityDetails';

export default {
  title: 'Secondaries/SecurityDetails',
  component: SecurityDetails,
} as ComponentMeta<typeof SecurityDetails>;

const Template: ComponentStory<typeof SecurityDetails> = () => (
  <SecurityDetails initialCusip="05572YFZ0" />
);

export const SecurityDetailsDefault = Template.bind({});
SecurityDetailsDefault.storyName = 'Security Details';
SecurityDetailsDefault.parameters = {
  msw: {
    handlers: [mockHandlers.getSuccessSecurityDetails()],
  },
};
