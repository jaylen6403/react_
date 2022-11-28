import { Card } from '@luma-fe-workspace/design-system';
import {
  StyledPricingAnalysisWidget,
  Title,
  Header,
} from './PricingAnalysisWidget.styles';
import { InfoTooltip } from '../Tooltip/Tooltip';
import { EmptyInsights } from '../EmptyInsights/EmptyInsights';

interface Props {
  screenWidth: number;
}

export const PricingAnalysisWidget = ({ screenWidth }: Props) => {
  const isSmall = screenWidth >= 1440;

  return (
    <Card flexDirection="column" backgroundColor="transparent">
      <Title>
        <Header id="Price1">Pricing Analysis</Header>
        <InfoTooltip
          tooltipText="See how our top structures are pricing"
          wrapperId="Price1"
        />
      </Title>
      <StyledPricingAnalysisWidget isSmall={isSmall ? true : false}>
        <EmptyInsights text="Coming soon..."></EmptyInsights>
      </StyledPricingAnalysisWidget>
    </Card>
  );
};
