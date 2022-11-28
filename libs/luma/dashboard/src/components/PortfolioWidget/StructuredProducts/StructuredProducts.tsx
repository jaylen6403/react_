import { useMemo, useState } from 'react';

import {
  useGetAllCurrenciesUsingGetQuery,
  PortfolioV2,
} from '@luma-fe-workspace/redux';
import {
  Chart,
  ChartTableWrapper,
  StyledPortfolioBody,
  StyledPortfolioHeader,
  StyledPortfolioWidget,
  Table,
} from '../PortfolioWidget.styles';
import { PieChart } from '../PieChart';
import { colors, MenuItemSingleType } from '@luma-fe-workspace/design-system';
import { AGGridTable } from '../AGGridTableDashboard';
import {
  currency,
  notional,
  returnTypeTableColumnData,
  StructuredProductsTypes,
} from './structuredProductsPortfolioUtils';
import { getIssuer, issuerTableColumnData } from '../../../utils/issuerUtils';
import { Spinner } from '../../Spinner/Spinner';
import { Currency } from '../Currency/Currency';
import { StructuredProductsToggle } from './StructuredProductsToggle/StructuredProductsToggle';

interface Props {
  otherWidgetPresent: boolean;
  pieChartSize: { height: number; width: number };
  screenWidth: number;
  structuredPortfolioData: PortfolioV2[];
  structuredPortfolioIsLoading: boolean;
}

export const StructuredProducts = ({
  otherWidgetPresent,
  pieChartSize,
  screenWidth,
  structuredPortfolioData,
  structuredPortfolioIsLoading,
}: Props) => {
  const portfolioData = structuredPortfolioData;
  const isPortfolioLoading = structuredPortfolioIsLoading;
  const { data: currencyData, isLoading: isCurrencyLoading } =
    useGetAllCurrenciesUsingGetQuery();

  const [selectedCurrency, setSelectedCurrency] =
    useState<MenuItemSingleType<string>>(currency);

  const [tableToRender, setTableToRender] = useState<
    StructuredProductsTypes.ReturnType | StructuredProductsTypes.Issuer
  >(StructuredProductsTypes.ReturnType);

  const notionalSums = useMemo(() => {
    return portfolioData && currencyData
      ? notional(portfolioData, selectedCurrency.value, currencyData)
      : null;
  }, [currencyData, portfolioData, selectedCurrency]);

  const returnTypeTableRowData = Object.entries(notionalSums ?? '').map(
    (key) => ({
      'Return Type': key[0],
      Orders: key[1].count.toString(),
      Notional: key[1].notionalSum.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
    })
  );

  const issuerSums = useMemo(() => {
    return portfolioData && currencyData
      ? getIssuer(portfolioData, selectedCurrency.value, currencyData)
      : null;
  }, [currencyData, portfolioData, selectedCurrency]);

  const issuerData = Object.entries(issuerSums ?? '')
    .map((key) => ({
      Issuers: key[0],
      Orders: key[1].count.toString(),
      Notional: key[1].notionalSum.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
    }))
    .sort((a, b) => {
      if (
        parseInt(a.Notional.replaceAll(',', '')) <
        parseInt(b.Notional.replaceAll(',', ''))
      ) {
        return 1;
      } else if (
        parseInt(a.Notional.replaceAll(',', '')) >
        parseInt(b.Notional.replaceAll(',', ''))
      ) {
        return -1;
      } else {
        return 0;
      }
    });

  const issuerTableRowData = () => {
    const topFourIssuers = issuerData.slice(0, 4);
    const totalIssuers = issuerData.slice(4);

    const sumIssuers = totalIssuers.reduce(
      (preVal, curVal) => {
        if (curVal !== preVal) {
          return {
            Issuers: 'All Other Issuers',
            Orders: (
              parseInt(preVal.Orders) + parseInt(curVal.Orders)
            ).toString(),
            Notional: (
              parseInt(preVal.Notional.replaceAll(',', '')) +
              parseInt(curVal.Notional.replaceAll(',', ''))
            ).toLocaleString('en-US'),
          };
        }

        return preVal;
      },

      { Issuers: 'All Other Issuers', Orders: '0', Notional: '0' }
    );

    const finalSumIssuers = {
      ...sumIssuers,
      Orders: parseInt(sumIssuers.Orders).toLocaleString('en-US'),
    };

    return [...topFourIssuers, finalSumIssuers];
  };

  const returnTypeChartData = [
    {
      name: 'Growth',
      y: notionalSums?.growth.notionalSum,
      color: colors.primary80Daintree,
    },
    {
      name: 'Income',
      y: notionalSums?.income.notionalSum,
      color: colors.primary60,
    },
    {
      name: 'Growth & Income',
      y: notionalSums?.['growth & income'].notionalSum,
      color: colors.primary40,
    },
    {
      name: 'Digital',
      y: notionalSums?.digital.notionalSum,
      color: colors.primary20,
    },
  ];

  const issuerChartData = [
    {
      name: issuerData
        .slice(0, 1)
        .map((i) => i.Issuers)
        .toString(),
      y: parseInt(
        issuerData
          .slice(0, 1)
          .map((i) => i.Notional)
          .toString()
          .replace(/,/g, '')
      ),
      color: colors.primary90,
    },
    {
      name: issuerData
        .slice(1, 2)
        .map((i) => i.Issuers)
        .toString(),
      y: parseInt(
        issuerData
          .slice(1, 2)
          .map((i) => i.Notional)
          .toString()
          .replace(/,/g, '')
      ),
      color: colors.primary80Daintree,
    },
    {
      name: issuerData
        .slice(2, 3)
        .map((i) => i.Issuers)
        .toString(),
      y: parseInt(
        issuerData
          .slice(2, 3)
          .map((i) => i.Notional)
          .toString()
          .replace(/,/g, '')
      ),
      color: colors.primary60,
    },
    {
      name: issuerData
        .slice(3, 4)
        .map((i) => i.Issuers)
        .toString(),
      y: parseInt(
        issuerData
          .slice(3, 4)
          .map((i) => i.Notional)
          .toString()
          .replace(/,/g, '')
      ),
      color: colors.primary40,
    },
    {
      name: 'All Other Issuers',
      y: issuerData.slice(4).reduce((acc, cur) => {
        if (cur.Notional) {
          return parseInt(cur.Notional.replaceAll(',', '')) + acc;
        }
        return acc;
      }, 0),
      color: colors.primary20,
    },
  ];

  return (
    <StyledPortfolioWidget
      isSmall={otherWidgetPresent && screenWidth >= 1440 ? true : false}
    >
      {isPortfolioLoading || isCurrencyLoading ? (
        <Spinner />
      ) : (
        <StyledPortfolioBody>
          <StyledPortfolioHeader>
            <StructuredProductsToggle
              screenWidth={screenWidth}
              setTableToRender={setTableToRender}
              tableToRender={tableToRender}
            />
            <Currency
              screenWidth={screenWidth}
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
            />
          </StyledPortfolioHeader>
          <ChartTableWrapper>
            <Chart
              addMargin={
                screenWidth > 768 &&
                tableToRender === StructuredProductsTypes.Issuer
              }
            >
              <PieChart
                data={
                  tableToRender === StructuredProductsTypes.ReturnType
                    ? returnTypeChartData
                    : issuerChartData
                }
                size={pieChartSize}
              />
            </Chart>

            <Table>
              <AGGridTable
                columnDefs={
                  tableToRender === StructuredProductsTypes.ReturnType
                    ? returnTypeTableColumnData
                    : issuerTableColumnData
                }
                rowData={
                  tableToRender === StructuredProductsTypes.ReturnType
                    ? returnTypeTableRowData
                    : issuerTableRowData()
                }
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
        </StyledPortfolioBody>
      )}
    </StyledPortfolioWidget>
  );
};
