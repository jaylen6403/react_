import Highcharts from 'highcharts';
import { colors } from '@luma-fe-workspace/design-system';
import HighchartsReact from 'highcharts-react-official';

export const NUM_PERCENT_DEC_PLACES = 1;
export type PieChartData = { name: string; y: number };

// Max of 7 categories allowed, so only 7 colors needed
export const colorSpectrum = [
  colors.primary80Daintree,
  colors.primary70,
  colors.primary60,
  colors.primary50,
  colors.primary40,
  colors.primary30,
  colors.primary20,
];

export interface PieChartProps {
  data: PieChartData[];
  numPercentageDecimalPlaces?: number;
  /**
   * (Highcharts) The size of the inner diameter for the pie. A size greater
   * than 0 renders a donut chart. Can be a percentage or pixel value.
   * Percentages are relative to the pie size. Pixel values are given as
   * integers.
   *
   * The type is `string` instead of `string | number` because of a bug in
   * Storybook that changes the input type to object and doesn't work with
   * the component. Numbers can still be passed as strings and the behavior
   * is identical, but can be tested in Storybook this way
   */
  innerSize?: string;
}

export const PieChart = ({
  data,
  numPercentageDecimalPlaces,
  innerSize,
}: PieChartProps) => {
  const pieChartDataWithColors = data?.map((dataElement, i) => {
    return {
      ...dataElement,
      color: colorSpectrum[i % colorSpectrum.length],
    };
  });
  const chartOptions: Highcharts.Options = {
    title: {
      text: undefined,
    },
    plotOptions: {
      pie: {
        borderWidth: 1,
        borderColor: undefined,
        innerSize: innerSize ?? '0',
      },
    },
    credits: { enabled: false },
    chart: {
      type: 'pie',
      plotShadow: false,
      height: '100%',
    },
    series: [
      {
        name: '',
        data: pieChartDataWithColors,
        dataLabels: [{ enabled: false }],
        states: {
          hover: {
            halo: {
              size: 0,
            },
          },
        },
        type: 'pie',
      },
    ],
    tooltip: {
      borderColor: colors.greyLighter,
      formatter: function (this) {
        return `<div>${
          this.point.name
        }</div><br/><div>% of Total: ${this.percentage.toFixed(
          numPercentageDecimalPlaces
        )}%</div><br><div>Value: ${this.y?.toLocaleString()}</div>`;
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};
