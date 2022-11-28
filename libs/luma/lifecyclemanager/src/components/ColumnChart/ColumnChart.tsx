import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import {
  ColumnChartData,
  defaultHighchartsColumnChartOptions,
} from './definitions';
import {
  useAppSelector,
  selectLifecycleEventDateRange,
} from '@luma-fe-workspace/redux';

interface ColumnChartProps {
  data: ColumnChartData[];
  highchartOptions?: Highcharts.Options;
}

Highcharts.setOptions({
  lang: {
    numericSymbols: ['K', 'MM', 'BN'],
    thousandsSep: ',', // TODO: Respect regional thousand separator
    rangeSelectorZoom: 'Date Range',
  },
  plotOptions: {
    column: {
      maxPointWidth: 50,
    },
  },
  time: {
    useUTC: false,
  },
});
export const ColumnChart = ({ data, highchartOptions }: ColumnChartProps) => {
  const dateRange = useAppSelector(selectLifecycleEventDateRange);

  const chartOptions = {
    ...defaultHighchartsColumnChartOptions(data, dateRange),
    ...highchartOptions, // Override defaults, if passed
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={chartOptions}
      constructorType={'stockChart'}
    />
  );
};
