import 'ag-grid-enterprise/dist/styles/ag-grid.css';
import { useCallback, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { CustomAgGrid } from './AGGridTableDashboard.style';
import { ColDef, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { LicenseManager } from 'ag-grid-enterprise';
LicenseManager.setLicenseKey(
  'CompanyName=Luma Financial Technologies, LLC,LicensedApplication=Luma,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=1,AssetReference=AG-017904,ExpiryDate=12_September_2022_[v2]_MTY2MjkzNzIwMDAwMA==fa6279babc79792e4bac4be842243ea3'
);
type TableProps = {
  gridOptions: GridOptions | undefined;
  customStyles?: string;
  columnDefs: ColDef[];
  rowData: any[];
  isMobile: boolean;
};
export const AGGridTable = ({
  gridOptions,
  customStyles,
  rowData,
  columnDefs,
  isMobile,
}: TableProps) => {
  const gridRef = useRef<AgGridReact>(null);
  const onGridReady = useCallback((params: GridReadyEvent) => {
    params.api.sizeColumnsToFit();
    window.addEventListener('resize', function () {
      setTimeout(function () {
        params.api.sizeColumnsToFit();
      });
    });
    gridRef.current?.api.sizeColumnsToFit();
  }, []);
  return (
    <CustomAgGrid
      ref={gridRef}
      rowData={rowData}
      columnDefs={columnDefs}
      gridOptions={gridOptions}
      customStyles={customStyles}
      onGridReady={onGridReady}
      isMobile={isMobile}
    />
  );
};
