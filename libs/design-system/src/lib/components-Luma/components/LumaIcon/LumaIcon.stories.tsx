import { Story, Meta } from '@storybook/react';
import { LumaColor } from '../../LumaColors';
import { LumaIcon, IconProps } from './LumaIcon';

export default {
  component: LumaIcon,
  title: 'Components/Waiting/Icon',
} as Meta;

export const Icon = () => {
  const ICON_CODES = [
    'question-circle',
    'exclamation-circle',
    'chevron-down',
    'chevron-right',
    'phone-alt',
    'envelope',
    'user',
    'user-plus',
    'users',
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
          <LumaIcon iconCode={iconCode} />
          <p style={{ textAlign: 'center' }}>{iconCode}</p>
        </div>
      ))}
    </div>
  );
};

Icon.args = {
  iconCode: 'house',
  style: {
    fontSize: '6.25rem',
    color: LumaColor.PRIMARY_80_DAINTREE,
  },
};

const Template: Story<IconProps> = (args) => {
  return <LumaIcon {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  iconCode: 'house',
  style: {
    fontSize: '6.25rem',
    color: LumaColor.PRIMARY_80_DAINTREE,
  },
};
