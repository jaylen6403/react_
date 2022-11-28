import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PerformanceHeader } from './PerformanceHeader';

export default {
  title: 'Lifecycle Manager 2/Annuity Pdf Components',
  component: PerformanceHeader,
  parameters: {},
} as ComponentMeta<typeof PerformanceHeader>;

const Template: ComponentStory<typeof PerformanceHeader> = (args) => {
  return <PerformanceHeader {...args} />;
};

export const PerformanceHeaderComponent = Template.bind({});
PerformanceHeaderComponent.args = {
  name: '18m Point to Point Capped Dual Direcetional',
  subName: 'on Worst of RUT, NDX, INDU',
  carrier:
    'https://app.lumafintech.com/cms-assets/DEV/images/company-logos/annuities/transamerica.png',
};
