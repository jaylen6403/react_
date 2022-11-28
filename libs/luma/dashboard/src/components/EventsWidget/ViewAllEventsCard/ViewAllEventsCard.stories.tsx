import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ViewAllEventsCard } from './ViewAllEventsCard';
import { ProductTypes } from '../../../utils/types';

export default {
  title: 'Dashboard/ViewAllEventsCard',
  component: ViewAllEventsCard,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/6260703798a7b4ac58787c42/screen/626bda60c70b2b991dff4688',
  },
} as ComponentMeta<typeof ViewAllEventsCard>;

const Template: ComponentStory<typeof ViewAllEventsCard> = (args) => (
  <ViewAllEventsCard {...args} />
);

const defaultArgs = { productType: ProductTypes.StructuredProducts };

export const Structured = Template.bind({});
Structured.args = { ...defaultArgs };

export const Annuities = Template.bind({});
Annuities.args = { ...defaultArgs, productType: ProductTypes.Annuities };
