import {
  DISPLAY_EVENT_TYPE,
  selectLifecycleEventRequestObject,
  useAppSelector,
  useGetPayoutHorizonUsingGetQuery,
} from '@luma-fe-workspace/redux';
import { SeriesColumnOptions } from 'highcharts';
import { InfoWidget } from '../InfoWidget/InfoWidget';
import { ColumnChart } from './ColumnChart';
import { Spinner } from '@luma-fe-workspace/design-system';
import { CustomLumaStatus } from '../CustomLumaStatus/CustomLumaStatus.styles';
import { ColumnChartWrapper } from './ColumnChartCard.styles';
import { DateHelper } from '@luma-fe-workspace/utility';
export interface ColumnChartCardProps {
  title: string;
  styles?: string;
  highchartOptions?: Highcharts.Options;
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

export const ColumnChartCard = ({
  title,
  styles,
  highchartOptions,
  isCollapsed,
  setIsCollapsed,
}: ColumnChartCardProps) => {
  const mockedConvertedData: {
    /**
     * Each of these is effectively a `[number, number][]` where the first value is
     * the offset from the first value and the second is the value. For datetimes,
     * Highcharts prefers milliseconds. See the related property `relativeXValue`
     */
    [key in DISPLAY_EVENT_TYPE]: SeriesColumnOptions['data'][];
  } = {
    Maturing: [],
    'Call Opportunity': [],
    'Coupon Opportunity': [],
  };
  const eventRequestObject = useAppSelector(selectLifecycleEventRequestObject);
  const cutoffDateNum: number = Date.parse(
    eventRequestObject.dateRange.endDate
  );
  const cutoffDate: Date = isNaN(cutoffDateNum)
    ? new Date(
        DateHelper.endOfMonth(DateHelper.addMonths(new Date(), 18)).setHours(
          23,
          59,
          0,
          0
        )
      ) // Default to 18 months from today
    : new Date(cutoffDateNum);

  const response = useGetPayoutHorizonUsingGetQuery(eventRequestObject);
  const { data: payoutHorizonDetails = [] } = response;

  payoutHorizonDetails.forEach((day) => {
    const dayAsDate = new Date(day.date);
    if (dayAsDate > cutoffDate) return;
    day.events.forEach((event) => {
      const displayEventType = DISPLAY_EVENT_TYPE[event.eventType];
      mockedConvertedData[displayEventType]?.push([
        dayAsDate.getTime(),
        event.value,
      ]);
    });
  });
  const columnChartData = [
    ...Object.keys(mockedConvertedData).map((eventType) => {
      return {
        name: eventType,
        data: mockedConvertedData[eventType as DISPLAY_EVENT_TYPE],
      };
    }),
  ];

  const columnChart = (
    <ColumnChart data={columnChartData} highchartOptions={highchartOptions} />
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
    <ColumnChartWrapper>{columnChart}</ColumnChartWrapper>
  );

  return (
    <InfoWidget
      title={title}
      content={widgetView}
      styles={styles}
      isCollapsed={isCollapsed}
      setIsCollapsed={setIsCollapsed}
    />
  );
};
