import { DataItemProps } from '@luma-fe-workspace/design-system';
import {
  PayoutBreakdownGroup,
  PayoutBreakdownData,
  GROUP_BY_VALUE_OPTIONS,
  PayoutBreakdownBreakdownType,
  PayoutBreakdownWidgetData,
} from '@luma-fe-workspace/redux';
import {
  ColDef,
  GridApi,
  ICellRendererParams,
  IHeaderParams,
} from 'ag-grid-community';
import {
  lowerCaseAllWordsExceptFirstLetters,
  upperCaseFirstLetter,
} from '../../utils/textUtils';
import { PieChartData } from './PieChart';
import { AmountTotal, AmountWrapper } from './PieChartCard.styles';

/* ---------- Events Pie Chart Info ---------- */
export const formatGroupByItems = (item: string) => {
  return (
    item &&
    upperCaseFirstLetter(
      lowerCaseAllWordsExceptFirstLetters(item.replace('_', ' '))
    )
  );
};

export const dropdownItems: DataItemProps[] = GROUP_BY_VALUE_OPTIONS.map(
  (groupByOption, i) => ({
    label: formatGroupByItems(groupByOption),
    value: groupByOption,
    iconCode: i === 0 ? 'check' : undefined,
  })
);

const breakdownTypToToggleLabelMap = new Map<
  PayoutBreakdownBreakdownType,
  string
>([
  ['AMOUNTS', 'Amount'],
  ['EVENT', 'Events'],
]);

export const getEventsColumnDefs = (
  payoutBreakdownWidgetData: PayoutBreakdownWidgetData,
  displayCurrency: string
) => {
  const largestOrderOfMagnitude = [
    ...payoutBreakdownWidgetData.groupingData.groups,
  ].sort(
    (a: PayoutBreakdownGroup, b: PayoutBreakdownGroup) =>
      b.breakdownValue - a.breakdownValue
  )[0]?.breakdownValue;

  const columnDefs: ColDef[] = [
    {
      field: 'groupByName',
      headerName: 'groupByName',
      cellStyle: { overflow: 'hidden', width: '58%' },
      headerComponent: (_params: IHeaderParams) => {
        return `${formatGroupByItems(
          payoutBreakdownWidgetData.groupingData.groupByValue
        )}`;
      },
    },
    {
      field: 'breakdownValue',
      headerName: 'breakdownValue',
      cellClass: 'pinned-row-value',
      headerComponent: (_params: IHeaderParams) => {
        const selectedBreakdownValue = payoutBreakdownWidgetData.breakdownType;
        return `${breakdownTypToToggleLabelMap.get(selectedBreakdownValue)}`;
      },
      cellStyle: { justifyContent: 'flex-end' },
      cellRenderer: (params: ICellRendererParams) => {
        const rowData: PayoutBreakdownGroup = params.data;
        const breakdownValue = rowData.breakdownValue;
        if (!breakdownValue) return null;

        let amountCurrency;
        if (
          breakdownTypToToggleLabelMap.get(
            payoutBreakdownWidgetData.breakdownType
          ) === 'Amount'
        ) {
          amountCurrency = displayCurrency;
        }

        // TODO - See if we can avoid recalculating this repeatedly
        const totalBreakdownValue = getSum('breakdownValue', params.api);

        return (
          <AmountWrapper>
            <AmountTotal>
              {formatNumber(
                params.node.isRowPinned()
                  ? totalBreakdownValue
                  : breakdownValue,
                largestOrderOfMagnitude,
                payoutBreakdownWidgetData.breakdownType,
                amountCurrency
              )}
            </AmountTotal>
          </AmountWrapper>
        );
      },
    },
  ];
  return columnDefs;
};

export const createEventsFooterData = (gridApi: GridApi) => {
  return [
    {
      groupByName: 'Total',
      breakdownValue: getSum('breakdownValue', gridApi),
    },
  ];
};

export const formatEventsTableData = (
  payoutBreakdownData: PayoutBreakdownData
): PayoutBreakdownGroup[] => {
  if (!payoutBreakdownData?.groups) {
    return [];
  } else {
    const sortedBreakdownData = [...payoutBreakdownData.groups].sort(
      (a: PayoutBreakdownGroup, b: PayoutBreakdownGroup) =>
        b.breakdownValue - a.breakdownValue
    );

    if (sortedBreakdownData.length <= 6) return sortedBreakdownData;

    const topSixIssuers = sortedBreakdownData.slice(0, 6);

    const sumOfElements = sortedBreakdownData.slice(6).reduce(
      (previousValue, currentValue) => {
        return {
          ...previousValue,
          breakdownValue:
            previousValue.breakdownValue + currentValue.breakdownValue,
        };
      },

      {
        groupByName: `Other (${sortedBreakdownData.slice(6).length})`,
        breakdownValue: 0,
      }
    );

    return [...topSixIssuers, sumOfElements];
  }
};

export const formatEventsPieChartData = (
  payoutBreakdownData: PayoutBreakdownData
): PieChartData[] => {
  if (!payoutBreakdownData) {
    return [];
  }

  return formatEventsTableData(payoutBreakdownData).map((dataElement) => {
    return {
      y: dataElement.breakdownValue,
      name: dataElement.groupByName,
    };
  });
};

// Helper Functions
const formatNumber = (
  n: number,
  orderOfMagnitude: number,
  columnName: string,
  displayCurrency?: string
) => {
  let abbreviatedNumber = n;
  let abbreviation = '';
  const isEventColumn = columnName === 'EVENT';
  const decimalPlaces = isEventColumn ? 0 : 2;

  if (orderOfMagnitude >= 1e3 && orderOfMagnitude <= 1e6) {
    // For the Events column, full thousands values should be shown
    abbreviatedNumber = isEventColumn ? n : n / 1e3;
    abbreviation = isEventColumn ? abbreviation : 'K';
  } else if (orderOfMagnitude > 1e6) {
    abbreviatedNumber = n / 1e6;
    abbreviation = 'MM';
  }

  return (
    /**
     * TODO: May need to create a map of currency ISO code/use a lookup function
     * to pass in the locale once we support more currencies
     */
    abbreviatedNumber.toLocaleString(undefined, {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
      style: displayCurrency ? 'currency' : undefined,
      currency: displayCurrency,
    }) + abbreviation
  );
};

const getSum = (field: string, gridApi: GridApi) => {
  return gridApi
    .getRenderedNodes()
    .reduce(
      (previousValue, currentRowNode) =>
        previousValue + currentRowNode.data?.[field] ?? previousValue,
      0
    );
};

export const defaultGridOptions = {
  rowHeight: 38,
  headerHeight: 39,
  defaultColDef: {
    flex: 1,
    minWidth: 75,
    wrapText: true,
    sortable: true,
    editable: false,
    autoHeight: true,
  },
  rowData: [],
};
