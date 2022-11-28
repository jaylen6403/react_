import { LifecycleProduct } from '@luma-fe-workspace/redux';
import { useMemo } from 'react';
import { Spinner } from '../../Spinner/Spinner';
import { AGGridTable } from '../AGGridTableDashboard';
import {
  StyledPortfolioWidget,
  Table,
  Chart,
  ChartTableWrapper,
  Disclaimer,
} from '../PortfolioWidget.styles';
import {
  policyAcctValues,
  annuityTableColumnData,
} from '../../../utils/annuityProductsPortfolio.utils';
import { colors } from '@luma-fe-workspace/design-system';
import { PieChart } from '../PieChart';

interface Props {
  annuityPortfolioData: LifecycleProduct[];
  annuityPortfolioIsLoading: boolean;
  pieChartSize: { height: number; width: number };
  screenWidth: number;
  otherWidgetPresent: boolean;
}

export const AnnuityProducts = ({
  annuityPortfolioData,
  annuityPortfolioIsLoading,
  pieChartSize,
  screenWidth,
  otherWidgetPresent,
}: Props) => {
  const annuityData = annuityPortfolioData;

  const annuitySums = useMemo(() => {
    return annuityData ? policyAcctValues(annuityData) : null;
  }, [annuityData]);

  const annuityTableRowData = Object.entries(annuitySums ?? '').map((key) => ({
    Type: key[0],
    Policies: key[1].count.toString(),
    'Acct Value':
      key[0] === 'income*'
        ? key[1].totalSum
        : '$'.concat(
            key[1].totalSum.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })
          ),
  }));

  const annuityChartData = [
    {
      name: 'Fixed Index',
      y: annuitySums?.['fixed index'].totalSum,
      color: colors.accent90,
    },
    {
      name: 'Fixed Rate',
      y: annuitySums?.['fixed rate'].totalSum,
      color: colors.accent80,
    },
    {
      name: 'Variable',
      y: annuitySums?.variable.totalSum,
      color: colors.accent70,
    },
    {
      name: 'Reg. Index',
      y: annuitySums?.['reg. index'].totalSum,
      color: colors.accent40,
    },
  ];

  return (
    <StyledPortfolioWidget
      isSmall={otherWidgetPresent && screenWidth >= 1440 ? true : false}
    >
      {annuityPortfolioIsLoading ? (
        <Spinner />
      ) : (
        <ChartTableWrapper isAnnuities={true}>
          <Chart isAnnuities={true} addMargin={true}>
            <PieChart data={annuityChartData} size={pieChartSize} />
            <Disclaimer>*Income not included in account value</Disclaimer>
          </Chart>
          <Table>
            <AGGridTable
              columnDefs={annuityTableColumnData}
              rowData={annuityTableRowData}
              isMobile={screenWidth < 400}
              gridOptions={{
                rowHeight: 54,
                rowStyle: {
                  borderBottom: 'white 3px solid',
                  borderTop: 'white 3px solid',
                },
                headerHeight: 54,
                defaultColDef: {
                  flex: 1,
                  wrapText: true,
                  autoHeight: true,
                  minWidth: 75,
                  editable: false,
                },
                suppressContextMenu: true,
              }}
            />
          </Table>
        </ChartTableWrapper>
      )}
    </StyledPortfolioWidget>
  );
};
