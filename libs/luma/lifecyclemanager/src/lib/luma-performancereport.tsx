import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { URL_PATHS } from '@luma-fe-workspace/utility';
import { EventsPage } from '../components/EventsPage/EventsPage';
import { ProductMetrics } from '../components/ProductMetrics/ProductMetrics';
import { AccountMetrics } from '../components/AccountMetrics/AccountMetrics';
import { LifecycleRoutes } from '../utils/lmUtils';

import { PerformanceHeader } from '../components/AnnuityPdfs/Components/PerformanceHeader/PerformanceHeader';
import { PerformanceSummary } from '../components/AnnuityPdfs/Components/PerformanceSummary/PerformanceSummary';
import { UnderlyingPerformance } from '../components/AnnuityPdfs/Components/UnderlyingPerformanceComponent/UnderlyingPerformance';
import { ProductDetailsTable } from '../components/AnnuityPdfs/Components/DetailsTwoToneTable/ProductDetailsTable';
import { ReportContainer } from './luma-performancereport.styles';

import { LumaLifecycleManagerContainer } from './luma-lifecyclemanager.styles';
import { useState, useEffect } from 'react';
import { FilterPanel } from '../components/FilterPanel/FilterPanel';
import { FilterBar } from '../components/FilterBar/FilterBar';
import { CurrencyDropdown } from '../components/CurrencyDropdown/CurrencyDropdown';
import {
  useGetDisplayCurrenciesUsingGetQuery,
  useGetDocumentContentsUsingGetQueryEnhanced,
  useGetLogosUsingGetQuery,
} from '@luma-fe-workspace/redux';
import { GridApi } from 'ag-grid-community';
import {
  isDev,
  isHigherEnvironment,
  isQA,
} from '@luma-fe-workspace/design-system';

export const LumaPerformanceReport = () => {
  return (
    <ReportContainer>
      <PerformanceHeader name={'11'} carrier={'11'}></PerformanceHeader>
      <PerformanceSummary
        data={[
          {
            field: 'Active Underlier',
            value: 'AFK',
          },
          {
            field: 'Current Level (Strike)',
            value: '1,906.09 (2,285,68)',
          },
          {
            field: 'Underlier Performance',
            value: '-16.61%',
          },
          {
            field: 'Intrinsic Value',
            value: '116.61%',
          },
        ]}
        title={'11'}
      ></PerformanceSummary>
      <ProductDetailsTable
        data={[
          {
            field: 'Issuer',
            value: 'JPMorgan Chase Financial Company, LLC',
          },
          {
            field: 'Calculation Agent',
            value: 'JPMorgan Chase Financial Company, LLC',
          },
          {
            field: 'Structure Type',
            value: 'Autocallable Contingent Interest Note',
          },
          {
            field: 'Asset Class',
            value: 'Worst Of Basket',
          },
          {
            field: 'Underlying Tickers',
            value: 'EEM, SPX, DAL, RTY',
          },
          {
            field: 'Term (Remaining)',
            value: '3 Years (4 Months)',
          },
          {
            field: 'Call Type / NC / Freq.',
            value: 'Autocallable / 0 NC / Quarterly',
          },
          {
            field: 'Protection Level',
            value: '25.00%',
          },
          {
            field: 'Principal Threshold',
            value: '65.00%',
          },
          {
            field: 'Issuer Size',
            value: '10,985,504',
          },
          {
            field: 'Denomination',
            value: '10',
          },
          {
            field: 'Payout Information',
            value: 'View Payout Diagram',
          },
        ]}
      ></ProductDetailsTable>
      <UnderlyingPerformance
        title={'Underlying Performance'}
        color={''}
        underlyingTicker={''}
        data={[
          {
            field: 'Underlying Ticker',
            value: 'RUT',
            color: '#228ed4',
          },
          {
            field: 'Underlying Name',
            value: 'Russell 2000',
          },
          {
            field: 'Strike Price',
            value: 2285.32,
          },
          {
            field: 'Current Index Level',
            value: 1906.09,
          },
          {
            field: 'Buffer Level',
            value: 1985.35,
          },
          {
            field: 'Buffer',
            value: '19.00%',
          },
          {
            field: 'Indicative Return',
            value: '16.61%',
          },
        ]}
      ></UnderlyingPerformance>
    </ReportContainer>
  );
};

export default LumaPerformanceReport;
