import { InfoWidget } from '../InfoWidget/InfoWidget';
import { PercentageBarCard } from '../PercentageBar/PercentageBarCard';
import {
  useAppSelector,
  PayoutSummaryData,
  useGetPayoutSummaryUsingPostQuery,
  selectLifecycleEventRequestObject,
  selectLifecycleEventDisplayCurrency,
} from '@luma-fe-workspace/redux';

import { Spinner } from '@luma-fe-workspace/design-system';
import { CustomLumaStatus } from '../CustomLumaStatus/CustomLumaStatus.styles';

export interface PayoutSummaryProps {
  styles?: string;
  title: string;
  /**
   * Optionally allow mock data to be passed in for storybook
   */
  mockPayoutSummaryData?: PayoutSummaryData;
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

export const PayoutSummary = ({
  styles,
  title,
  mockPayoutSummaryData,
  isCollapsed,
  setIsCollapsed,
}: PayoutSummaryProps) => {
  const eventRequestObject = useAppSelector(selectLifecycleEventRequestObject);
  const displayCurrency = useAppSelector(selectLifecycleEventDisplayCurrency);

  const response = useGetPayoutSummaryUsingPostQuery(eventRequestObject);
  let { data: payoutSummaryData = [] } = response;
  payoutSummaryData = mockPayoutSummaryData ?? payoutSummaryData;

  const content = Object.entries(payoutSummaryData).map(
    ([key, summaryData]) => {
      return (
        <PercentageBarCard
          percentage={summaryData.percentage * 100}
          key={key}
          title={key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => {
            return str.toUpperCase();
          })}
          content={summaryData.amount}
          // TODO: Respect currency from dropdown
          currency={
            key === 'notional' || key === 'totalPayoutAmount'
              ? displayCurrency
              : ''
          }
        />
      );
    }
  );

  const widgetView = response.isFetching ? (
    <Spinner />
  ) : response.isError ? (
    <CustomLumaStatus
      variant={'failed'}
      ariaLabel={'Failed Message'}
      titleMessage={'Request Failed'}
      helperMessage={'Something went wrong!'}
    />
  ) : (
    content
  );
  return (
    <InfoWidget
      styles={styles}
      title={title}
      content={widgetView}
      isCollapsed={isCollapsed}
      setIsCollapsed={setIsCollapsed}
    />
  );
};
