import { useState } from 'react';
import { useSpring } from '@react-spring/web';
import useMeasure from 'react-use-measure';
import { ResizeObserver } from '@juggle/resize-observer';
import {
  StyledInisghts,
  StyledHeader,
  StyledTitle,
  Collapser,
  WidgetWrapper,
  InnerWrapper,
} from './Insights.styles';
import { PricingAnalysisWidget } from './PricingAnalysisWidget/PricingAnalysisWidget';
import { ProductTypesWidget } from './ProductTypesWidget/ProductTypesWidget';
import { TopProductsWidget } from './TopProductsWidget/TopProductsWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLeftAndArrowUpRightToCenter as collapse } from '@fortawesome/pro-solid-svg-icons';
import { useGetDisplayConfigUsingGetQuery } from '@luma-fe-workspace/redux';

interface Props {
  screenWidth: number;
}

export const Insights = ({ screenWidth }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver });

  const animatedStyle = useSpring({ height: isCollapsed ? 0 : bounds.height });

  const toggleInsights = () => setIsCollapsed(!isCollapsed);

  const { data: displayConfig } = useGetDisplayConfigUsingGetQuery();

  return displayConfig?.enableDashboardInsights ? (
    <StyledInisghts>
      <StyledHeader>
        <StyledTitle>Luma Insights</StyledTitle>
        <Collapser onClick={toggleInsights}>
          <FontAwesomeIcon icon={collapse} />
          Collapse Section
        </Collapser>
      </StyledHeader>
      <WidgetWrapper style={animatedStyle}>
        <InnerWrapper ref={ref}>
          <TopProductsWidget screenWidth={screenWidth} />
          <ProductTypesWidget screenWidth={screenWidth} />
          <PricingAnalysisWidget screenWidth={screenWidth} />
        </InnerWrapper>
      </WidgetWrapper>
    </StyledInisghts>
  ) : null;
};
