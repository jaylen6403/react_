import { useState, useEffect } from 'react';

import {
  useAppSelector,
  selectLifecycleProducts,
} from '@luma-fe-workspace/redux';
import { ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';

import { productBlotterColumns } from './columnHelpers';
import { AGGridTable } from '../AGGridTable/AGGridTable';
import { ProductBlotterWrapper } from './ProductBlotter.styles';

export const ProductBlotter = () => {
  const productList = useAppSelector(selectLifecycleProducts);
  const [gridApi, setGridApi] = useState<GridApi>();

  useEffect(() => {
    productList && gridApi?.setRowData(productList);
  }, [productList, gridApi]);

  const onDataRendered = (params: GridReadyEvent) => {
    const gridColumnApi: ColumnApi = params.columnApi;
    gridColumnApi.autoSizeAllColumns();
  };

  return (
    <ProductBlotterWrapper>
      <AGGridTable
        gridOptions={{
          rowHeight: 40,
          headerHeight: 48,
          onGridReady: (e: GridReadyEvent) => setGridApi(e.api),
          onFirstDataRendered: onDataRendered,
          columnDefs: productBlotterColumns,
        }}
      />
    </ProductBlotterWrapper>
  );
};
