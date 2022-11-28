import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LumaChip } from './LumaChip';

export default {
  component: LumaChip,
  title: 'Components/In-Progress/Chip',
  parameters: {
    zeplinLink: [
      {
        name: 'Regular Locked',
        link: 'zpl://components?coids=624df2a4cc364813c2907dbb&stid=624c74edc63a9e13edc17931',
      },
      {
        name: 'Regular Removable',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=624df2a4c67cf16f607046dc',
      },
      {
        name: 'Regular Removable Entry',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=624df2a5d87e7810ec1f6981',
      },
      {
        name: 'Regular Locked Result',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=624df2a536d32d1887e533c1',
      },
      {
        name: 'Regular Light Result Error Locked',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=6261c1c839ab2ead16347a9d',
      },
      {
        name: 'Regular Secondary Locked',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=627195e333b26c16387a0a06',
      },
      {
        name: 'Regular Light Tertiary Locked',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=627195e49d268b10d2e9ca6c',
      },
      {
        name: 'Regular Light Removable Entry Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=62913703403f7e2b510fe59f',
      },
      {
        name: 'Regular Light Locked Result Disabled',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=629137057ef8ec11327e7ef7',
      },
      // Small
      {
        name: 'Small Primary Locked',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=6261c1c8c17213ac629c4aa5',
      },
      {
        name: 'Small Light Secondary',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=627195e5a798531186b93fe6',
      },
      {
        name: 'Small Tertiary Locked',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=627195e69d268b10d2e9ca80',
      },
      {
        name: 'Small Icon Locked',
        link: 'zpl://components?stid=624c74edc63a9e13edc17931&coid=627195e6ed1c47136ce65f17',
      },
    ],
  },
} as ComponentMeta<typeof LumaChip>;

const Template: ComponentStory<typeof LumaChip> = (args) => (
  <LumaChip {...args} />
);

export const RegularLocked = Template.bind({});
RegularLocked.args = {
  variant: 'primary',
  children: 'ABC',
  state: 'locked',
  sizeVariant: 'regular',
};
RegularLocked.story = {
  name: 'Regular Locked',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2a4cc364813c2907dbb&stid=624c74edc63a9e13edc17931',
  },
};

export const RegularRemovable = Template.bind({});
RegularRemovable.args = {
  variant: 'primary',
  children: 'ABC',
  state: 'removable',
  sizeVariant: 'regular',
  onRemove: () => console.log('remove!'),
};
RegularRemovable.story = {
  name: 'Regular Removable',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a4c67cf16f607046dc',
  },
};

export const RegularRemovableEntry = Template.bind({});
RegularRemovableEntry.args = {
  variant: 'primary',
  children: 'ABC',
  state: 'removable',
  entry: true,
  value: 100,
  sizeVariant: 'regular',
};
RegularRemovableEntry.story = {
  name: 'Regular Removable Entry',
  parameters: {
    zeplinLink:
      'zpl://components?coids=624df2a5d87e7810ec1f6981&stid=624c74edc63a9e13edc17931',
  },
};

export const RegularLockedResult = Template.bind({});
RegularLockedResult.args = {
  variant: 'primary',
  children: 'ABC',
  state: 'locked',
  entry: true,
  value: 50,
  sizeVariant: 'regular',
  error: {
    hasError: true,
  },
};
RegularLockedResult.story = {
  name: 'Regular Locked Result',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=624df2a536d32d1887e533c1',
  },
};

export const RegularLightResultErrorLocked = Template.bind({});
RegularLightResultErrorLocked.args = {
  variant: 'primary',
  children: 'Total',
  state: 'locked',
  entry: true,
  value: 0,
  sizeVariant: 'regular',
  error: {
    hasError: true,
    position: 'side',
    errorMessage: 'Underlier allocations must total 100%',
  },
};
RegularLightResultErrorLocked.story = {
  name: 'Regular Light Result Error Locked',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=6261c1c839ab2ead16347a9d',
  },
};

export const RegularSecondaryLocked = Template.bind({});
RegularSecondaryLocked.args = {
  variant: 'secondary',
  children: 'Total',
  state: 'locked',
  sizeVariant: 'regular',
};
RegularSecondaryLocked.story = {
  name: 'Regular Secondary Locked',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=627195e333b26c16387a0a06',
  },
};

export const RegularLightTertiaryLocked = Template.bind({});
RegularLightTertiaryLocked.args = {
  children: 'ABC',
  state: 'locked',
  variant: 'tertiary',
  sizeVariant: 'regular',
};
RegularLightTertiaryLocked.story = {
  name: 'Regular Light Tertiary Locked',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coid=627195e49d268b10d2e9ca6c',
  },
};

export const RegularLightRemovableEntryDisabled = Template.bind({});
RegularLightRemovableEntryDisabled.args = {
  children: 'ABC',
  state: 'removable',
  variant: 'primary',
  sizeVariant: 'regular',
  entry: true,
  disabled: true,
  value: 100,
};
RegularLightRemovableEntryDisabled.story = {
  name: 'Regular Light Removable Entry Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coid=62913703403f7e2b510fe59f',
  },
};

export const RegularLightLockedResultDisabled = Template.bind({});
RegularLightLockedResultDisabled.args = {
  children: 'ABC',
  state: 'locked',
  variant: 'primary',
  sizeVariant: 'regular',
  entry: true,
  value: 0,
  disabled: true,
  error: {
    hasError: true,
    position: 'side',
    errorMessage: 'Underlier allocations must total 100%',
  },
};
RegularLightLockedResultDisabled.story = {
  name: 'Regular Light Locked Result Disabled',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coid=629137057ef8ec11327e7ef7',
  },
};

export const SmallPrimaryLocked = Template.bind({});
SmallPrimaryLocked.args = {
  children: 'ABC',
  state: 'locked',
  variant: 'primary',
  sizeVariant: 'small',
};
SmallPrimaryLocked.story = {
  name: 'Small Primary Locked',
  parameters: {
    zeplinLink:
      'zpl://components?coids=6261c1c8c17213ac629c4aa5&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallLightSecondaryLocked = Template.bind({});
SmallLightSecondaryLocked.args = {
  children: 'ABC',
  state: 'locked',
  variant: 'secondary',
  sizeVariant: 'small',
};
SmallLightSecondaryLocked.story = {
  name: 'Small Light Secondary Locked',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=627195e5a798531186b93fe6',
  },
};

export const SmallTertiaryLocked = Template.bind({});
SmallTertiaryLocked.args = {
  children: 'ABC',
  state: 'locked',
  variant: 'tertiary',
  sizeVariant: 'small',
};
SmallTertiaryLocked.story = {
  name: 'Small Tertiary Locked',
  parameters: {
    zeplinLink:
      'zpl://components?coids=627195e69d268b10d2e9ca80&stid=624c74edc63a9e13edc17931',
  },
};

export const SmallIconLocked = Template.bind({});
SmallIconLocked.args = {
  children: 'ABC',
  state: 'locked',
  variant: 'icon',
  sizeVariant: 'icon',
  iconCode: 'retweet',
};
SmallIconLocked.story = {
  name: 'Locked Icon',
  parameters: {
    zeplinLink:
      'zpl://components?stid=624c74edc63a9e13edc17931&coids=627195e6ed1c47136ce65f17',
  },
};
