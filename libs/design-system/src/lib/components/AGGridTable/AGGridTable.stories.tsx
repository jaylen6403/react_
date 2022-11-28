import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CellClassParams } from 'ag-grid-community';
import { AGGridTable } from './AGGridTable';
import { colors } from '@luma-fe-workspace/design-system';

export default {
  title: 'Secondaries/AGGridTable',
  component: AGGridTable,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=201%3A3237',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '15.625rem', width: '62.5rem' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof AGGridTable>;

const Template: ComponentStory<typeof AGGridTable> = (args) => (
  <AGGridTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  gridOptions: {
    columnDefs: [
      { field: '#', sortable: true, resizable: false, maxWidth: 40 },
      { field: 'Order', sortable: true },
      { field: 'Status', sortable: true },
      { field: 'Account', sortable: true },
    ],
    rowData: [
      {
        '#': 1,
        Order: 43323,
        Status: 'Pending',
        Account: 'Default',
      },
      {
        '#': 2,
        Order: 43323,
        Status: 'Pending',
        Account: 'Default',
      },
    ],
    rowHeight: 32,
    headerHeight: 48,
    rowSelection: 'multiple',
    defaultColDef: { resizable: true },
    rowDragManaged: true,
    enableRangeSelection: true,
    animateRows: true,
  },
};

export const EditableTableCell = Template.bind({});
EditableTableCell.args = {
  gridOptions: {
    rowData: [{ Price: 'Enter' }, { Price: 'Enter' }],
    undoRedoCellEditing: true,
    undoRedoCellEditingLimit: 5,
    columnDefs: [
      {
        field: 'Price',
        editable: true,
        singleClickEdit: true,

        cellStyle: (params: CellClassParams) => {
          if (params.value !== 'Enter') {
            return {
              color: `${colors.greyDarker}`,
              backgroundColor: `${colors.white}`,
              border: `0.0625rem solid ${colors.greyLight}`,
              outline: 'none',
            };
          } else {
            return {
              color: colors.greyLight,
              backgroundColor: `${colors.white}`,
              border: `0.0625rem solid ${colors.greyLight}`,
              outline: 'none',
            };
          }
        },
      },
    ],
    rowHeight: 32,
    headerHeight: 48,
  },
};
