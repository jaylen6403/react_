import { colors } from '@luma-fe-workspace/design-system';

export type Indicator = 'EMPTY' | 'LOW' | 'MEDIUM' | 'HIGH' | 'LASTCARD';

export const INDICATOR_COLORS = {
  EMPTY: colors.greyLight,
  LOW: colors.positive60,
  MEDIUM: colors.warning60,
  HIGH: colors.negative60,
  LASTCARD: colors.primary50,
};

export const getBarrierLevelIndicator = (
  message: string | undefined,
  eventType:
    | 'Payment Date'
    | 'Valuation Date'
    | 'Maturity Date'
    | 'Final Valuation Date'
    | 'Pricing Date'
    | 'Settlement Date'
    | 'Call Date'
    | 'Call Review Date'
    | 'Trade Date'
    | undefined
) => {
  if (!message) {
    return 'EMPTY';
  }

  // Check whether level is above barrier
  const isPositive = message.match(/above/i);

  if (isPositive) {
    return 'LOW';
  }

  const isBelow = message.match(/below/i);
  // Check  whether the event is Final Evaluation
  const isFinal =
    eventType === 'Final Valuation Date' || eventType === 'Maturity Date';

  // If below barrier and Final Evaluation
  if (isBelow && isFinal) {
    return 'HIGH';
  }

  if (isBelow) {
    return 'MEDIUM';
  }

  return 'EMPTY';
};
