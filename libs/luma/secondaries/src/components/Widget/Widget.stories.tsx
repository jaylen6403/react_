import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Widget } from './Widget';
import { AGGridTable } from '../AGGridTable/AGGridTable';
import {
  tableRowPlaceholderData,
  tableColumnPlaceholderData,
} from './AGGridTableHelpers';

export default {
  title: 'Secondaries/Widget',
  component: Widget,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=169%3A607',
    },
  },
} as ComponentMeta<typeof Widget>;

const Template: ComponentStory<typeof Widget> = (args) => {
  return (
    <div
      style={{
        height: '17.9375rem',
        width: '44.5rem',
      }}
    >
      <Widget {...args} />
    </div>
  );
};
export const RFQ = Template.bind({});
RFQ.args = {
  title: 'RFQ SEARCH',
  table: (
    <AGGridTable
      gridOptions={{
        rowData: tableRowPlaceholderData,
        columnDefs: tableColumnPlaceholderData,
        rowHeight: 32,
        headerHeight: 48,
        rowSelection: 'multiple',
      }}
    />
  ),
};
