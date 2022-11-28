import { Story, Meta } from '@storybook/react';
import { GetRowIdParams } from 'ag-grid-community';
import { LumaAgGrid, AgGridProps } from './LumaAgGrid';

type dataModel = {
  id: string;
  state: string;
};

export default {
  component: LumaAgGrid,
  title: 'Components/Needs-Mock/LumaAgGrid',
} as Meta;

const Template: Story<AgGridProps> = (args) => {
  return <LumaAgGrid {...args} />;
};

const columnDefs = [{ field: 'id' }, { field: 'state' }];
const rowData: dataModel[] = [
  { id: '355e5a71', state: 'IN_PROGRESS' },
  { id: '888ecbcb', state: 'TRADING' },
];
const defaultColDef = {
  sortable: true,
  menuTabs: ['filterMenuTab'],
};
const sideBar = {
  toolPanels: [
    {
      id: 'columns',
      labelDefault: 'Columns',
      labelKey: 'columns',
      iconKey: 'columns',
      toolPanel: 'agColumnsToolPanel',
      toolPanelParams: {
        suppressRowGroups: true,
        suppressValues: true,
        suppressPivots: true,
        suppressPivotMode: true,
        suppressColumnFilter: true,
        suppressColumnSelectAll: true,
        suppressColumnExpandAll: true,
      },
    },
  ],
};

export const Default = Template.bind({});
Default.args = {
  gridOptions: {
    columnDefs: columnDefs,
    rowData: rowData,
    defaultColDef: defaultColDef,
    rowSelection: 'single',
    sideBar: sideBar,
    suppressContextMenu: true,
    getRowId: (row: GetRowIdParams<dataModel>) => row.data.id,
    onRowSelected: (event) => console.log(event),
    onGridReady: (params) => console.log(params),
  },
  gridStyles: { height: 500, width: 1200 },
};
