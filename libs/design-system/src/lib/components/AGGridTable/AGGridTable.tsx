import 'ag-grid-enterprise/dist/styles/ag-grid.css';
import { CustomAgGrid, TableContainer } from './AGGridTable.styles';
import { GetRowNodeIdFunc, GridOptions } from 'ag-grid-community';
import { LicenseManager } from 'ag-grid-enterprise';

LicenseManager.setLicenseKey(
  'CompanyName=Luma Financial Technologies, LLC,LicensedApplication=Luma,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=1,AssetReference=AG-017904,ExpiryDate=12_September_2022_[v2]_MTY2MjkzNzIwMDAwMA==fa6279babc79792e4bac4be842243ea3'
);

type TableProps = {
  gridOptions: GridOptions | undefined;
  customStyles?: string;
  getRowNodeId?: GetRowNodeIdFunc;
};
export const AGGridTable = ({
  gridOptions,
  customStyles,
  getRowNodeId,
}: TableProps) => {
  return (
    <TableContainer>
      <CustomAgGrid
        getRowNodeId={getRowNodeId}
        gridOptions={gridOptions}
        icons={{
          sortAscending: '<i class="fa fa-arrow-up"/>',
          sortDescending: '<i class="fa fa-arrow-down"/>',
        }}
        customStyles={customStyles}
      />
    </TableContainer>
  );
};
