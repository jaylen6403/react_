import { useState } from 'react';
import {
  useGetTopProductsUsingGetQuery,
  useGetUserTrainingStatusUsingGetQuery,
} from '@luma-fe-workspace/redux';
import { TrainingModal } from '@luma-fe-workspace/luma/globalnav';
import { Card, Button } from '@luma-fe-workspace/design-system';
import { InfoTooltip } from '../Tooltip/Tooltip';
import {
  TableWrapper,
  Header,
  StyledTopProductsBody,
  StyledTopProductsWidget,
  ViewMarketplace,
  Title,
} from './TopProductsWidget.styles';
import { createProductMarketplaceLink } from '../../../utils/links';
import { TopProductsTable } from './TopProductsTable/TopProductsTable';
import { Spinner } from '../../Spinner/Spinner';
import { EmptyInsights } from '../EmptyInsights/EmptyInsights';

interface Props {
  screenWidth: number;
}

export const TopProductsWidget = ({ screenWidth }: Props) => {
  const [showTrainingModal, setShowTrainingModal] = useState(false);

  const { data: userTrainingData } = useGetUserTrainingStatusUsingGetQuery();

  const {
    data: tableData,
    isError,
    isLoading,
  } = useGetTopProductsUsingGetQuery();

  const isSmall = screenWidth >= 1440;

  const handleNavigate = () => {
    if (userTrainingData?.notesTraining !== 'Completed') {
      setShowTrainingModal(true);
      return;
    }
    return (window.location.href = createProductMarketplaceLink());
  };

  const returnWidgetBody = () => {
    if (isError) {
      return (
        <StyledTopProductsWidget isSmall={isSmall ? true : false}>
          <EmptyInsights text="No data available"></EmptyInsights>
        </StyledTopProductsWidget>
      );
    } else {
      return (
        <StyledTopProductsWidget isSmall={isSmall ? true : false}>
          <StyledTopProductsBody>
            <TableWrapper>
              <TopProductsTable data={tableData} />
            </TableWrapper>
          </StyledTopProductsBody>
        </StyledTopProductsWidget>
      );
    }
  };

  return (
    <Card flexDirection="column" backgroundColor="transparent">
      <Title>
        <Header id="Top1">Top Products By Luma Volume</Header>
        <InfoTooltip
          tooltipText="These are the top structured products by transaction volume through Luma Product Marketplace"
          wrapperId="Top1"
        />
        <ViewMarketplace onClick={() => handleNavigate()}>
          <Button variant="secondary" disabled={false}>
            View Marketplace
          </Button>
        </ViewMarketplace>
      </Title>
      {isLoading ? <Spinner /> : returnWidgetBody()}
      <TrainingModal
        isOpen={showTrainingModal}
        setShowTrainingModal={setShowTrainingModal}
      />
    </Card>
  );
};
