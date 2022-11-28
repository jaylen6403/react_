import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { TestTooltipText, TestText } from './Tooltip.style';

export default {
  title: 'Dashboard/Tooltip',
  component: Tooltip,
  parameters: {},
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div>
      <div
        id={'test_tooltip'}
        style={{ marginTop: '5rem' }}
        onMouseOver={() => {
          setShowTooltip(true);
        }}
        onFocus={() => {
          setShowTooltip(true);
        }}
        onMouseOut={() => {
          setShowTooltip(false);
        }}
        onBlur={() => {
          setShowTooltip(false);
        }}
      >
        <TestText>Hey this is a test...</TestText>
      </div>
      <Tooltip
        top={'3.5rem'}
        left={'0'}
        wrapperId={'test_tooltip'}
        isVisible={showTooltip}
      >
        <TestTooltipText>Hey this is a test child!</TestTooltipText>
      </Tooltip>
    </div>
  );
};

export const Primary = Template.bind({});
