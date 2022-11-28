import { colors } from '@luma-fe-workspace/design-system';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export interface PieChartData {
  name: string;
  y: number | undefined;
  color: string;
}
interface Props {
  data: PieChartData[];
  size: { height: number; width: number };
}
export const PieChart = ({ data, size }: Props) => {
  const chartOptions = {
    credits: { enabled: false },
    chart: {
      height: size.height,
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      width: size.width,
    },
    plotOptions: {
      pie: {
        innerSize: '45%',
        borderWidth: 0,
      },
    },
    title: {
      text: undefined,
    },
    series: [
      {
        name: '',
        data: data,
        dataLabels: [{ enabled: false }],
        states: {
          hover: {
            halo: {
              size: 0,
            },
          },
        },
      },
    ],
    tooltip: {
      borderColor: colors.greyLighter,
      pointFormat: '<div>{series.name}</div><div>{point.percentage:.0f}%</div>',
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};
