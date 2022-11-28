import { Story, Meta } from '@storybook/react';
import { colors } from '../../colors';
import { Icon, IconProps } from './Icon';

export default {
  component: Icon,
  title: 'Components/Waiting/Icon',
} as Meta;

const Template: Story<IconProps> = (args) => {
  return <Icon {...args} />;
};

export const Icons = () => {
  const ICON_CODES = [
    'question-circle',
    'exclamation-circle',
    'chevron-down',
    'chevron-double-right',
    'phone-alt',
    'envelope',
    'user',
    'user-plus',
    'user-friends',
  ] as const;
  return (
    <div
      style={{
        display: 'grid',
        fontSize: '1.25rem',
        gap: '0.625rem',
        gridTemplateColumns: 'repeat(3, 1fr)',
      }}
    >
      {ICON_CODES.map((iconCode) => (
        <div
          key={iconCode}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Icon iconCode={iconCode} />
          <p style={{ textAlign: 'center' }}>{iconCode}</p>
        </div>
      ))}
    </div>
  );
};
Icons.args = {
  iconCode: 'house',
  style: {
    fontSize: '6.25rem',
    color: colors['luma-daintree'],
  },
};

export const Default = Template.bind({});
Default.args = {
  iconCode: 'house',
  style: {
    fontSize: '6.25rem',
    color: colors['luma-daintree'],
  },
};
