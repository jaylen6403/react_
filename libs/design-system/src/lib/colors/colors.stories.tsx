import { Story, Meta } from '@storybook/react';

import { ColorRoot, Details, Name, Patch, Root, Value } from './colors.styles';
import { colors } from './colors';

export default {
  title: 'Secondaries/Colors',
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/styleguide/60881b0d7cfcc39928f106be/colors',
  },
} as Meta;

const Color = ({ name, color }: { name: string; color: string }) => (
  <ColorRoot>
    <Patch color={color} />

    <Details>
      <Name title={name}>{name}</Name>

      <Value>{color}</Value>
    </Details>
  </ColorRoot>
);

const Template: Story = (args) => (
  <Root>
    {Object.entries(colors).map(([name, color]) => (
      <Color color={color} name={name} key={name} />
    ))}
  </Root>
);

export const Default = Template.bind({});
Default.args = {};
