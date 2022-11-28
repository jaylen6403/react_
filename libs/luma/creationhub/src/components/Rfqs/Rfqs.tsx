import { useState, useMemo, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { GridOptions, GetRowIdParams, GridApi } from 'ag-grid-community';
import { GetIssuerPricingUsingGetApiResponse } from '@luma-fe-workspace/redux';
import { LumaAgGrid } from '@luma-fe-workspace/design-system';
import { Title, Header } from '../HomePage/HomePage.styles';
import { usePricingAPI } from '../PricingForm/usePricingAPI';
import { CreationHubPages } from '../HomePage/HomePageUtils';
import {
  SearchWrapper,
  SearchIcon,
  SearchInput,
  ClearIcon,
} from './Rfqs.styles';

export function Rfqs() {
  const PAGE_SIZE = 10;
  const api = usePricingAPI();
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState('');
  const gridAPI = useRef({ current: null } as unknown as GridApi);

  const fetchData = async () => {
    try {
      const result = (await api
        .getIssuerPricings({})
        .unwrap()) as GetIssuerPricingUsingGetApiResponse[];
      gridAPI?.current?.setRowData(result);
    } catch (err) {
      console.error(err);
    }
  };

  const [columnDefs] = useState([
    {
      field: 'pricingId',
      suppressMovable: true,
      lockPosition: true,
      pinned: true,
    },
    { field: 'requestStatus' },
    { field: 'underliers' },
    { field: 'productType' },
    { field: 'solveFor' },
    { field: 'initialFixingDate' },
    { field: 'currency' },
    { field: 'notional' },
    { field: 'tenor' },
    { field: 'externalId' },
    { field: 'client' },
    { field: 'reOffer' },
    { field: 'strikeLevel' },
    { field: 'callType' },
    { field: 'callFrequency' },
    { field: 'firstCall' },
    { field: 'couponPA' },
    { field: 'couponType' },
    { field: 'couponSettlementFrequency' },
    { field: 'couponTriggerLevel' },
    { field: 'couponMemory' },
    { field: 'barrierLevel' },
    { field: 'downsideGearing' },
    { field: 'barrierType' },
    { field: 'issueDate' },
    { field: 'finalFixingDate' },
    { field: 'redemptionDate' },
    { field: 'basketType' },
    { field: 'atcStepDirection', hide: true },
    { field: 'issuePrice', hide: true },
    { field: 'issueSize', hide: true },
    { field: 'settlementType', hide: true },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      suppressMenu: true,
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
            suppressColumnFilter: false,
            suppressColumnSelectAll: true,
            suppressColumnExpandAll: true,
          },
        },
      ],
    };
  }, []);

  const onSearchTyping = useCallback((e) => {
    const value = e?.target?.value;
    setSearchText(value);
  }, []);

  const onSearchChanged = useCallback((e) => {
    const value = e?.target?.value;
    gridAPI?.current?.setQuickFilter(value);
  }, []);

  const onClearSearch = useCallback(() => {
    const value = '';
    setSearchText(value);
    gridAPI?.current?.setQuickFilter(value);
  }, []);

  const onRowSelected = useCallback((e) => {
    const id = e.node.data.pricingId;
    if (e.node.isSelected() && id) {
      navigate(`${CreationHubPages.IssuerPricingView}/${id}`);
    }
  }, []);

  const onGridReady = useCallback((params) => {
    gridAPI.current = params.api;
    fetchData();
  }, []);

  const gridOptions: GridOptions = {
    columnDefs: columnDefs,
    defaultColDef: defaultColDef,
    rowSelection: 'single',
    sideBar: sideBar,
    pagination: true,
    paginationPageSize: PAGE_SIZE,
    cacheBlockSize: PAGE_SIZE,
    serverSideInfiniteScroll: true,
    suppressContextMenu: true,
    detailRowAutoHeight: true,
    getRowId: (row: GetRowIdParams<GetIssuerPricingUsingGetApiResponse>) =>
      row.data.pricingId,
    onRowSelected: onRowSelected,
    onGridReady: onGridReady,
  };

  return (
    <>
      <Title>
        <Header>Pricings</Header>
      </Title>
      <SearchWrapper>
        <SearchIcon iconCode="search" />
        <SearchInput
          value={searchText}
          placeholder="Search..."
          onInput={onSearchTyping}
          onChange={debounce((e) => onSearchChanged(e), 500)}
        />
        {searchText && (
          <ClearIcon iconCode="times-circle" onClick={() => onClearSearch()} />
        )}
      </SearchWrapper>
      <LumaAgGrid
        gridOptions={gridOptions}
        gridStyles={gridStyles}
      ></LumaAgGrid>
    </>
  );
}
