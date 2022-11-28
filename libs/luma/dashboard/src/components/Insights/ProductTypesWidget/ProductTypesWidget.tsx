import { useGetProductTypesUsingGetQuery } from '@luma-fe-workspace/redux';
import { Card } from '@luma-fe-workspace/design-system';
import {
  ChartTableWrapper,
  Header,
  StyledProductTypesBody,
  StyledProductTypesWidget,
  Title,
} from './ProductTypesWidget.styles';
import { BarChart } from './BarChart';
import { InfoTooltip } from '../Tooltip/Tooltip';
import { Spinner } from '../../Spinner/Spinner';
import { EmptyInsights } from '../EmptyInsights/EmptyInsights';
import { ProductTypesTable } from './ProductTypesTable/ProductTypesTable';

interface Props {
  screenWidth: number;
}

export const ProductTypesWidget = ({ screenWidth }: Props) => {
  const {
    data: tableData,
    isError,
    isLoading,
  } = useGetProductTypesUsingGetQuery();

  const isSmall = screenWidth >= 1440;

  const returnWidgetBody = () => {
    if (isError) {
      return (
        <StyledProductTypesWidget isSmall={isSmall ? true : false}>
          <EmptyInsights text="No data available"></EmptyInsights>
        </StyledProductTypesWidget>
      );
    } else {
      return (
        <StyledProductTypesWidget isSmall={isSmall ? true : false}>
          <StyledProductTypesBody>
            <ChartTableWrapper>
              <BarChart data={tableData} />
              <ProductTypesTable data={tableData} />
            </ChartTableWrapper>
          </StyledProductTypesBody>
        </StyledProductTypesWidget>
      );
    }
  };

  return (
    <Card flexDirection="column" backgroundColor="transparent">
      <Title>
        <Header id="Pod1">Product Types By Luma Volume</Header>
        <InfoTooltip
          tooltipText="View our top product types within Product Marketplace"
          wrapperId="Pod1"
        />
      </Title>
      {isLoading ? <Spinner /> : returnWidgetBody()}
    </Card>
  );
};
