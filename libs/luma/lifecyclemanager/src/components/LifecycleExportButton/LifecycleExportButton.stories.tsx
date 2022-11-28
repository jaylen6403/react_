import { LifecycleExportButton } from './LifecycleExportButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Lifecycle Manager 2/Export Button',
  component: LifecycleExportButton,
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/61f40278858cea167caf22f9/screen/62e05594a3a7ae11b8a47e42',
  },
} as ComponentMeta<typeof LifecycleExportButton>;

const Template: ComponentStory<typeof LifecycleExportButton> = (args) => (
  <LifecycleExportButton {...args} />
);

const defaultArgs = {
  gridApi: undefined,
  tableName: 'test',
};

export const LifecycleExportButtonStory = Template.bind({});
LifecycleExportButtonStory.storyName = 'Lifecycle Export Button';
LifecycleExportButtonStory.args = { ...defaultArgs };
