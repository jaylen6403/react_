import { GridApi } from 'ag-grid-community';
import {
  formatDisplayString,
  getPercentString,
} from '../components/EventTable/columnHelpers';

export enum LifecycleRoutes {
  Events = 'events',
  Products = 'products',
  Accounts = 'accounts',
}

export const exportExcel = (gridApi?: GridApi, tableName?: string) => {
  gridApi?.exportDataAsExcel({
    sheetName: tableName ?? 'Exported Data',
    fileName: `${tableName} ${new Date().toLocaleDateString()}`,
  });
};

export const exportCSV = (gridApi?: GridApi, tableName?: string) => {
  gridApi?.exportDataAsCsv({
    suppressQuotes: true,
    fileName: `${tableName} ${new Date().toLocaleDateString()}`,
    processCellCallback: (params) => {
      const cellData = params.node?.data;
      const columnId = params.column.getColId();

      let exportedValue;
      switch (columnId) {
        case 'eventDate':
        case 'structureType':
        case 'basketType':
          exportedValue = params.value;
          break;
        case 'productIdentifier':
          exportedValue = `${cellData['issuer']} ~ ${
            cellData['cusip'] ?? cellData['isin']
          }`;
          break;
        case 'eventType':
          exportedValue = `${formatDisplayString(cellData['eventType'])} ${
            (cellData['eventType'] === 'COUPON' ||
              cellData['eventType'] === 'CALL') &&
            'Eval'
          } ~ ${(cellData['couponRatePercent'] * 100).toFixed(2)}% p.p.`;
          break;
        case 'underlierPerformance':
          exportedValue = `${getPercentString(
            cellData['underlierPerformancePercent'],
            2
          )} ~ Active: ${
            cellData['activeUnderlier']
          } ~ All Underliers: ${cellData['listOfUnderliers'].join(' | ')}`;
          break;
        case 'protectionProximity':
          exportedValue = `${getPercentString(
            cellData['protectionProximityLevelPercent'] * 100,
            2
          )} ~ ${
            cellData['protectionLevelPercent'] * 100
          } ~ ${formatDisplayString(cellData['protectionType'])}`;
          break;
        case 'eventProximity':
          exportedValue = `${getPercentString(
            cellData['eventProximityPercent'] * 100,
            2
          )} ~ ${cellData['eventLevelPercent'] * 100} ~ ${formatDisplayString(
            cellData['eventType']
          )}`;
          break;
        case 'payoutAmount':
          exportedValue = `${cellData['payoutAmount']}`;
          break;
        case 'currency':
          exportedValue = 'USD';
          break;
        case 'markToMarket':
          exportedValue = `${Number(cellData['markToMarketPercent']).toFixed(
            3
          )}`;
          break;
        case 'notional':
          exportedValue = `${cellData['notionalHoldingsSum']}`;
          break;
        default:
          break;
      }
      return exportedValue ?? '';
    },
  });
};
