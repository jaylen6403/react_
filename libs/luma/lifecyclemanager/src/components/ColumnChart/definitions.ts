import { colors } from '@luma-fe-workspace/design-system';
import { SeriesColumnOptions } from 'highcharts';
import { DateObject } from '@luma-fe-workspace/redux';

export interface ColumnChartData {
  name: string;
  data: SeriesColumnOptions['data'][];
}

export const defaultHighchartsColumnChartOptions = (
  data: ColumnChartData[],
  dateRange: DateObject
): Highcharts.Options => ({
  chart: {
    type: 'column',
    height: 300,
  },
  title: {
    text: undefined,
  },
  xAxis: {
    type: 'datetime',
    ordinal: false,
    showFirstLabel: true,
    showLastLabel: true,
    startOnTick: true,
    endOnTick: false,
    min: new Date(dateRange.startDate).getTime(),
    max: new Date(dateRange.endDate).getTime(),
  },
  yAxis: {
    min: 0,
    title: {
      text: undefined,
    },
    lineWidth: 1,
    reversedStacks: false,
    opposite: false,
  },
  tooltip: {
    headerFormat: `<b>{point.key}</b><br/>Total: {point.stackTotal:,.0f}`,
    xDateFormat: '', // Affects the point.key variable for date formatting
    pointFormat: `{series.name}: {point.y}<br/>`,
    valueDecimals: 0,
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        // Labels within each subsection of a column disabled for MVP
        enabled: false,
      },
      borderWidth: 1,
      dataGrouping: {
        /**
         * Default view to be shown on load is 1Y (see rangeSelector.selected),
         * grouped by month
         */
        units: [['month', [1]]],
        forced: true,
        enabled: true,
      },
      groupPadding: 0,
      pointPlacement: 'on',
    },
  },
  legend: {
    enabled: true,
    symbolRadius: 1,
  },
  rangeSelector: {
    inputEnabled: false,
    enabled: false,
  },
  navigator: {
    enabled: false,
  },
  scrollbar: {
    enabled: false,
  },
  colors: [colors.primary80Daintree, colors.primary60, colors.primary40],
  series: data.map((element) => {
    return {
      ...element,
      type: 'column',
    };
  }) as SeriesColumnOptions[],
  credits: {
    enabled: false,
  },
});
