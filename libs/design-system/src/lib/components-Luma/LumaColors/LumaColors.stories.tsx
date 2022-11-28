import { Story, Meta } from '@storybook/react';
import {
  ColorRoot,
  Details,
  Name,
  Patch,
  Root,
  Value,
} from './LumaColors.styles';
import { LumaColor } from './Lumacolors';

export default {
  title: 'Styleguide/Colors',
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/styleguide/624c74edc63a9e13edc17931/colors',
  },
} as Meta;
const LumaColors = ({ name, color }: { name: string; color: string }) => (
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
    {Object.entries(LumaColor).map(([name, color]) => (
      <LumaColors color={color} name={name} key={name} />
    ))}
  </Root>
);
export const Default = Template.bind({});
Default.args = {};
