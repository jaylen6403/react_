import { useEffect, useState } from 'react';
import { GridReadyEvent, GridApi, RowClassParams } from 'ag-grid-community';

import {
  Spinner,
  Card,
  colors,
  LumaToggleButton,
  LumaSingleDropDown,
  DataItemProps,
} from '@luma-fe-workspace/design-system';
import {
  GroupByValueOption,
  PayoutBreakdownBreakdownType,
  PayoutBreakdownData,
  PayoutBreakdownGroup,
  PayoutBreakdownWidgetData,
  selectLifecycleEventDisplayCurrency,
  selectLifecycleEventRequestObject,
  useAppSelector,
  useGetPayoutBreakdownUsingPostQuery,
} from '@luma-fe-workspace/redux';

import { CustomLumaStatus } from '../CustomLumaStatus/CustomLumaStatus.styles';
import { InfoWidget } from '../InfoWidget/InfoWidget';

import {
  PieChart,
  PieChartData,
  colorSpectrum,
  NUM_PERCENT_DEC_PLACES,
} from './PieChart';
import {
  Chart,
  Table,
  TableWidget,
  DropdownWrapper,
  PieChartWrapper,
  PieChartWidgetBody,
  PieChartHeaderButtons,
  PieChartWidgetWrapper,
} from './PieChartCard.styles';
import {
  createEventsFooterData,
  defaultGridOptions,
  dropdownItems,
  formatEventsPieChartData,
  formatEventsTableData,
  formatGroupByItems,
  getEventsColumnDefs,
} from './PieChartHelpers';

export interface PieChartCardProps {
  title: string;
  styles?: string;
  percentageDecimalPlaces?: number;
  /**
   * Optionally allow mock data to be passed in for storybook
   */
  mockPayoutBreakdownData?: PayoutBreakdownData;
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

export const PieChartCard = ({
  title,
  styles,
  percentageDecimalPlaces: numPercentageDecimalPlaces,
  mockPayoutBreakdownData,
  isCollapsed,
  setIsCollapsed,
}: PieChartCardProps) => {
  const eventRequestObject = useAppSelector(selectLifecycleEventRequestObject);
  const [gridApi, setGridApi] = useState<GridApi>();
  const [pieChartData, setPieChartData] = useState<PieChartData[]>([]);
  const displayCurrency = useAppSelector(selectLifecycleEventDisplayCurrency);

  const [payoutBreakdownWidgetData, setPayoutBreakdownWidgetData] =
    useState<PayoutBreakdownWidgetData>({
      groupingData: {
        groupByValue: 'ISSUER',
        groups: [],
      },
      breakdownType: 'AMOUNTS',
    });
  const eventsColumnDefs = getEventsColumnDefs(
    payoutBreakdownWidgetData,
    displayCurrency
  );

  const response = useGetPayoutBreakdownUsingPostQuery({
    groupByName: payoutBreakdownWidgetData.groupingData.groupByValue,
    breakdownType: payoutBreakdownWidgetData.breakdownType,
    ...eventRequestObject,
  });

  useEffect(() => {
    if (response.isSuccess && !response.isFetching) {
      setPayoutBreakdownWidgetData({
        ...payoutBreakdownWidgetData,
        groupingData: response.data,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const payoutBreakdownData: PayoutBreakdownData =
    mockPayoutBreakdownData ?? payoutBreakdownWidgetData.groupingData;

  useEffect(() => {
    // Reset Table Data when main payoutBreakDownData changes
    const eventsTableData: PayoutBreakdownGroup[] =
      formatEventsTableData(payoutBreakdownData);
    const breakdownSum = eventsTableData.reduce(
      (previousValue, currentValue) => {
        return previousValue + currentValue.breakdownValue ?? previousValue;
      },
      0
    );
    gridApi?.setRowData(
      eventsTableData.map((dataElement: PayoutBreakdownGroup) => {
        return {
          ...dataElement,
          percentage: (
            (dataElement.breakdownValue ?? 0) / breakdownSum
          ).toFixed(numPercentageDecimalPlaces),
        };
      })
    );
    const newColumnDefs = getEventsColumnDefs(
      payoutBreakdownWidgetData,
      displayCurrency
    );
    gridApi?.setColumnDefs(newColumnDefs);
    // Reset Pie Chart Data when main payoutBreakDownData changes
    setPieChartData(formatEventsPieChartData(payoutBreakdownData));
  }, [
    displayCurrency,
    gridApi,
    numPercentageDecimalPlaces,
    payoutBreakdownData,
    payoutBreakdownWidgetData,
  ]);

  numPercentageDecimalPlaces =
    numPercentageDecimalPlaces ?? NUM_PERCENT_DEC_PLACES;

  const selectGroupBy = (groupByValue?: DataItemProps | null) => {
    if (
      groupByValue?.value ===
      payoutBreakdownWidgetData.groupingData.groupByValue
    )
      return;
    setPayoutBreakdownWidgetData({
      ...payoutBreakdownWidgetData,
      groupingData: {
        ...payoutBreakdownWidgetData.groupingData,
        groupByValue: (groupByValue?.value as GroupByValueOption) ?? 'ISSUER',
      },
    });
  };

  const adjustTableHeight = (): string => {
    const tableHeights = new Map<number, string>([
      [0, '9.375rem'],
      [1, '7.938rem'],
      [2, '10.313rem'],
      [3, '12.69rem'],
    ]);

    let height = '12.69rem';
    if (gridApi) {
      const numRows = gridApi?.getRenderedNodes()?.length;
      height = tableHeights.get(Math.min(3, numRows)) || '12.69rem';
    }
    return height;
  };

  const pieChartContent = (
    <PieChartWidgetWrapper>
      <PieChartHeaderButtons>
        <DropdownWrapper>
          <LumaSingleDropDown
            id={'pieChartGroupByDropdown'}
            fullWidth={true}
            items={dropdownItems}
            placeholder={'Group By:'}
            name={'displayGroupBy'}
            defaultSelectedItem={{
              label: formatGroupByItems(
                payoutBreakdownWidgetData.groupingData.groupByValue
              ),
              value: payoutBreakdownWidgetData.groupingData.groupByValue,
            }}
            onChange={(selectedItem) => {
              dropdownItems.forEach((item) => {
                item.iconCode = undefined;
              });
              if (selectedItem) {
                selectedItem.iconCode = 'check';
                selectGroupBy(selectedItem);
              }
            }}
          />
        </DropdownWrapper>

        <LumaToggleButton
          activeValue={payoutBreakdownWidgetData.breakdownType}
          size={'toggle_small'}
          // TODO - Decide whether to use the map in PieChartHelpers below
          // Each string field paramName below if from the type PayoutBreakdownBreakdownType
          fieldValues={[
            { paramName: 'AMOUNTS', label: 'Amount' },
            { paramName: 'EVENT', label: 'Events' },
          ]} //TODO: Dynamically set paramName values to support pie-charts on all pages
          onClick={(paramName: string) => {
            setPayoutBreakdownWidgetData({
              ...payoutBreakdownWidgetData,
              breakdownType: paramName as PayoutBreakdownBreakdownType,
            });
          }}
        />
      </PieChartHeaderButtons>

      <Card>
        <PieChartWidgetBody>
          <PieChartWrapper>
            <Chart>
              <PieChart
                data={pieChartData}
                numPercentageDecimalPlaces={numPercentageDecimalPlaces}
                innerSize={'48%'}
              />
            </Chart>
            <Table
              style={{
                height: adjustTableHeight(),
              }}
            >
              <TableWidget
                gridOptions={{
                  ...defaultGridOptions,
                  columnDefs: eventsColumnDefs,
                  onFirstDataRendered: (e: GridReadyEvent) => {
                    e.api.setPinnedBottomRowData(createEventsFooterData(e.api));
                  },
                  onGridReady: (params: GridReadyEvent) => {
                    setGridApi(params.api);
                  },
                  getRowStyle: (params: RowClassParams) => {
                    let style = {};
                    if (params.node.rowPinned) {
                      style = { color: colors.black };
                    } else {
                      style = {
                        borderLeft: `0.375rem ${
                          colorSpectrum[params.rowIndex % colorSpectrum.length]
                        } solid`,
                      };
                    }
                    return style;
                  },
                  suppressHorizontalScroll: true,
                }}
              />
            </Table>
          </PieChartWrapper>
        </PieChartWidgetBody>
      </Card>
    </PieChartWidgetWrapper>
  );

  const widgetView = response.isFetching ? (
    <Spinner />
  ) : response.isError ? (
    <CustomLumaStatus
      variant={'failed'}
      ariaLabel={'Failed Message'}
      titleMessage={'Request Failed'}
      helperMessage={'Something went wrong!'}
    />
  ) : (
    pieChartContent
  );

  return (
    <InfoWidget
      title={title}
      styles={styles}
      content={widgetView}
      isCollapsed={isCollapsed}
      setIsCollapsed={setIsCollapsed}
    />
  );
};
