import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { LumaColor } from '@luma-fe-workspace/design-system';

interface BarChartData {
  DIGITAL: number;
  GROWTH: number;
  GROWTH_AND_INCOME: number;
  INCOME: number;
}

interface Props {
  data: BarChartData;
}

export const BarChart = ({ data }: Props) => {
  const chartOptions = {
    chart: {
      height: 48,
      margin: 0,
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'bar',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: undefined,
    },
    xAxis: {
      minPadding: 0,
      maxPadding: 0,
      visible: false,
      endOnTick: false,
    },
    yAxis: {
      minPadding: 0,
      maxPadding: 0,
      visible: false,
      endOnTick: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderWidth: 0,
        groupPadding: 0,
        innerSize: '45%',
        pointPadding: 0,
      },
      series: {
        stacking: 'normal',
      },
    },
    series: [
      {
        name: 'Digital',
        data: [data.DIGITAL],
        color: LumaColor.PRIMARY_20,
      },
      {
        name: 'Growth & Income',
        data: [data.GROWTH_AND_INCOME],
        color: LumaColor.PRIMARY_40,
      },
      {
        name: 'Income',
        data: [data.INCOME],
        color: LumaColor.PRIMARY_60,
      },
      {
        name: 'Growth',
        data: [data.GROWTH],
        color: LumaColor.PRIMARY_80_DAINTREE,
      },
    ],
    tooltip: {
      borderColor: LumaColor.NEUTRAL_10,
      headerFormat: '',
      pointFormat: '<div>{series.name}</div><div>{point.percentage:.0f}%</div>',
      shape: 'square',
      style: {
        fontSize: '11px',
      },
      useHTML: true,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};
