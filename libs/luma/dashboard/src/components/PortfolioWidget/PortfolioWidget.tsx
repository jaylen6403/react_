import { useState, useEffect } from 'react';
import {
  useGetAnnuityProductsUsingGet1Query,
  useGetPortfolioProductsUsingGetQuery,
} from '@luma-fe-workspace/redux';
import { AnnuityProducts } from './AnnuityProducts/AnnuityProducts';
import { Card } from '@luma-fe-workspace/design-system';
import { Header, Title, StyledPortfolioWidget } from './PortfolioWidget.styles';
import { ProductType, ProductTypes } from '../../utils/types';
import { Spinner } from '../Spinner/Spinner';
import { StructuredProducts } from './StructuredProducts/StructuredProducts';
import { EmptyState } from '../EmptyState/EmptyState';
import { EmptyStates } from '../../utils/emptyStateUtils';
import { getEmptyStateBoolean } from '../../utils/myPortfolioUtils';

interface Props {
  productsType: ProductType;
  screenWidth: number;
  otherWidgetPresent: boolean;
}
export const PortfolioWidget = ({
  productsType,
  screenWidth,
  otherWidgetPresent,
}: Props) => {
  const [pieChartSize, setPieChartSize] = useState(
    screenWidth < 545
      ? { height: 240, width: 240 }
      : { height: 280, width: 280 }
  );
  const isSmall = otherWidgetPresent && screenWidth >= 1440;
  const { data: annuityPortfolioData, isLoading: annuityPortfolioIsLoading } =
    useGetAnnuityProductsUsingGet1Query();

  const {
    data: structuredPortfolioData,
    isLoading: structuredPortfolioIsLoading,
  } = useGetPortfolioProductsUsingGetQuery();

  const showEmptyState = getEmptyStateBoolean({
    isLoading:
      productsType === ProductTypes.Annuities
        ? annuityPortfolioIsLoading
        : structuredPortfolioIsLoading,
    data:
      productsType === ProductTypes.Annuities
        ? annuityPortfolioData?.lifeCycleProducts
        : structuredPortfolioData?.[0].portfolioProducts,
  });

  useEffect(() => {
    if (screenWidth < 545) {
      setPieChartSize({ height: 240, width: 240 });
    } else {
      setPieChartSize({ height: 280, width: 280 });
    }
  }, [screenWidth]);

  const renderPortfolioWidget = () => {
    if (showEmptyState) {
      return (
        <EmptyState
          isSmall={isSmall ? true : false}
          emptyStateType={
            productsType === ProductTypes.Annuities
              ? EmptyStates.AnnuitiesPortfolio
              : EmptyStates.SPSPortfolio
          }
        />
      );
    }

    if (
      productsType === ProductTypes.StructuredProducts &&
      structuredPortfolioData
    ) {
      return (
        <Card flexDirection="column" backgroundColor="transparent">
          <Title>
            <Header>Structured Products Portfolio</Header>
          </Title>
          {structuredPortfolioIsLoading || !structuredPortfolioData ? (
            <Spinner />
          ) : (
            <StructuredProducts
              otherWidgetPresent={otherWidgetPresent}
              pieChartSize={pieChartSize}
              screenWidth={screenWidth}
              structuredPortfolioData={structuredPortfolioData}
              structuredPortfolioIsLoading={structuredPortfolioIsLoading}
            />
          )}
        </Card>
      );
    } else if (productsType === ProductTypes.Annuities) {
      return (
        <Card flexDirection="column" backgroundColor="transparent">
          <Title>
            <Header>Annuities Portfolio</Header>
          </Title>
          {annuityPortfolioIsLoading ||
          !annuityPortfolioData?.lifeCycleProducts ? (
            <Spinner />
          ) : (
            <AnnuityProducts
              annuityPortfolioData={annuityPortfolioData?.lifeCycleProducts}
              annuityPortfolioIsLoading={annuityPortfolioIsLoading}
              pieChartSize={pieChartSize}
              screenWidth={screenWidth}
              otherWidgetPresent={otherWidgetPresent}
            />
          )}
        </Card>
      );
    } else
      return (
        <Card flexDirection="column" backgroundColor="transparent">
          <StyledPortfolioWidget isSmall={isSmall ? true : false}>
            <Spinner />
          </StyledPortfolioWidget>
        </Card>
      );
  };

  return <>{renderPortfolioWidget()}</>;
};
