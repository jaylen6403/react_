import { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageUserModel } from '@luma-fe-workspace/redux';
import {
  GridOptions,
  IServerSideGetRowsParams,
  GetRowIdParams,
} from 'ag-grid-community';
import { LumaAgGrid } from '@luma-fe-workspace/design-system';
import { Title, Header } from '../HomePage/HomePage.styles';
import { CreationHubPages } from '../HomePage/HomePageUtils';
import { usePricingAPI } from '../PricingForm/usePricingAPI';
import { PricingType } from '../../';

export const Pricings = () => {
  const PAGE_SIZE = 10;
  const api = usePricingAPI();
  const navigate = useNavigate();

  const [columnDefs] = useState([
    { field: 'id', filter: 'agTextColumnFilter' },
    { field: 'state', filter: 'agTextColumnFilter' },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      menuTabs: ['filterMenuTab'],
    };
  }, []);

  const gridStyles = useMemo(() => {
    return {
      height: 450,
    };
  }, []);

  const sideBar = useMemo(() => {
    return {
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
  }, []);

  const onRowSelected = useCallback((e) => {
    const id = e.node.data.id;
    if (e.node.isSelected()) {
      navigate(`${CreationHubPages.PricingView}/${id}`);
    }
  }, []);

  const onGridReady = useCallback((params) => {
    const datasource = createServerSideDatasource();
    params.api.setServerSideDatasource(datasource);
  }, []);

  const createServerSideDatasource = useCallback(() => {
    return {
      getRows: async (params: IServerSideGetRowsParams) => {
        const startPage = params?.request?.startRow || 0;
        const page = startPage / PAGE_SIZE;
        try {
          const result = (await api
            .getPricings({
              size: PAGE_SIZE,
              page: page,
            })
            .unwrap()) as PageUserModel;
          if (result) {
            params.success({
              rowData: result.content as PricingType[],
              rowCount: result.totalElements,
            });
          } else {
            params.fail();
          }
        } catch (e) {
          console.error(e);
        }
      },
    };
  }, []);

  const gridOptions: GridOptions = {
    columnDefs: columnDefs,
    defaultColDef: defaultColDef,
    rowModelType: 'serverSide',
    rowSelection: 'single',
    sideBar: sideBar,
    pagination: true,
    paginationPageSize: PAGE_SIZE,
    cacheBlockSize: PAGE_SIZE,
    serverSideInfiniteScroll: true,
    suppressContextMenu: true,
    getRowId: (row: GetRowIdParams<PricingType>) => row.data.id,
    onRowSelected: onRowSelected,
    onGridReady: onGridReady,
  };

  return (
    <>
      <Title>
        <Header>Pricings</Header>
      </Title>
      <LumaAgGrid
        gridOptions={gridOptions}
        gridStyles={gridStyles}
      ></LumaAgGrid>
    </>
  );
};
