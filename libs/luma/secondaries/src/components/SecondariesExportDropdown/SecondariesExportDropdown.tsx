import { colors } from '@luma-fe-workspace/design-system';
import { GridApi } from 'ag-grid-community';
import { SecondariesDropdown } from '../../lib/luma-secondaries.styles';
import { exportCSV, exportExcel } from '../AGGridTable/AGGridTable';

interface SecondariesExportDropdownProps {
  gridApi?: GridApi;
  tableName?: string;
}

export const SecondariesExportDropdown = ({
  gridApi,
  tableName,
}: SecondariesExportDropdownProps) => {
  return (
    <SecondariesDropdown
      items={[
        {
          display: 'CSV Export',
          onClick: () => {
            exportCSV(gridApi, tableName);
          },
        },
        {
          display: 'Excel Export',
          onClick: () => {
            exportExcel(gridApi, tableName);
          },
        },
      ]}
      placeholder="EXPORT"
      variant="secondary"
      iconCodeLeft="file-spreadsheet"
    />
  );
};
