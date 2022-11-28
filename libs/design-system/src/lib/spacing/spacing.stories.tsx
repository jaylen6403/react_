import { Story, Meta } from '@storybook/react';

import { Table, TableData, TableHeader, TableHeading } from './spacing.styles';
import { spacing } from './spacing';

export default {
  title: 'Styleguide/Spacing',
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/styleguide/60881b0d7cfcc39928f106be/components?coid=60881c38ab2b8508bba20079',
  },
} as Meta;

const Spacing = ({ name, value }: { name: string; value: string }) => (
  <tr>
    <TableData>{name}</TableData>
    <TableData>{value}</TableData>
    <TableData>
      <div
        style={{ backgroundColor: '#e8e8e8', height: value, width: value }}
      />
    </TableData>
  </tr>
);

const Template: Story = (args) => (
  <div>
    <Table>
      <TableHeader>
        <tr>
          <TableHeading>Token</TableHeading>
          <TableHeading>Value</TableHeading>
          <TableHeading>Example</TableHeading>
        </tr>
      </TableHeader>

      <tbody>
        {Object.entries(spacing).map(([name, value]) => (
          <Spacing name={name} key={name} value={value} />
        ))}
      </tbody>
    </Table>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
