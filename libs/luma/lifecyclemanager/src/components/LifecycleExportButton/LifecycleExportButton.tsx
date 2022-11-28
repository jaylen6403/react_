import { GridApi } from 'ag-grid-community';
import { exportCSV } from '../../utils/lmUtils';
import { LumaButton, LumaIcon } from '@luma-fe-workspace/design-system';

interface LifecycleExportButtonProps {
  /**
   * @param gridApi - The gridApi to use for exporting data from ag-grid
   *
   * TODO:
   *  1. Revisit once the backend can give us a csv/Excel file directly
   *  2. Determine whether the export should be the user's entire portfolio
   *     or paginated data from the grid
   */
  gridApi?: GridApi;
  /**
   * @param tableName - The name of the table, to be used to name the file that is exported
   */
  tableName?: string;
}

export const LifecycleExportButton = ({
  gridApi,
  tableName,
}: LifecycleExportButtonProps) => {
  return (
    <LumaButton
      size={'icon_only'}
      variant={'secondary'}
      icon={{
        iconComponent: <LumaIcon type="regular" iconCode="file-excel" />,
      }}
      onClick={() => {
        exportCSV(gridApi, tableName);
      }}
    />
  );
};
