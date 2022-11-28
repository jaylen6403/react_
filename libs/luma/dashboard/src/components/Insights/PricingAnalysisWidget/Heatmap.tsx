import { LumaColor } from '@luma-fe-workspace/design-system';
import Highcharts from 'highcharts';
import Heatmap from 'highcharts/modules/heatmap';
import HighchartsReact from 'highcharts-react-official';

interface Props {
  data: number[][];
}

Heatmap(Highcharts);

export const LumaHeatmap = ({ data }: Props) => {
  const chartOptions = {
    chart: {
      height: 270,
      width: 300,
      type: 'heatmap',
      margin: 0,
    },
    credits: false,
    title: {
      text: undefined,
    },
    xAxis: {
      visible: false,
      endOnTick: false,
    },
    yAxis: {
      visible: false,
      endOnTick: false,
    },
    tooltip: {
      borderColor: LumaColor.NEUTRAL_50,
      pointFormat:
        '<div>{series.name}</div><div>{series.date}</div><div>{series.return}</div>',
    },
    colorAxis: {
      minColor: LumaColor.NEGATIVE_50,
      maxColor: LumaColor.POSITIVE_50,
      reversed: true,
      visble: false,
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: 'SPX Index',
        date: '2022-05-10',
        return: '24.57%',
        data,
        dataLabels: {
          enabled: false,
          color: '#000000',
        },
        type: 'heatmap',
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};
