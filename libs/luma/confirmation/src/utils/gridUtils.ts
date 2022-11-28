import { EventProductData, PhysicalSettlement } from '@luma-fe-workspace/redux';
import {
  ConfirmationStatus,
  EventCalculationStatuses,
  PrincipalProximity,
} from '../components/AGGridTable/AGGridTable';
import { DateFormatter, DateHelper } from '@luma-fe-workspace/utility';
import { createProductDetailsUrl } from '@luma-fe-workspace/luma/dashboard';

const addSettlementRates = (
  event: EventProductData,
  status: EventCalculationStatuses
): ConfirmationStatus => ({
  status,
  ...(event.cashSettlementRates && {
    cashSettlementRates: event.cashSettlementRates,
  }),
  ...(event.physicalSettlements && {
    physicalSettlementRates: event.physicalSettlements,
  }),
});

export const formatConfirmationStatus = (
  event: EventProductData
): ConfirmationStatus | undefined => {
  const finalDate = event.eventDate;

  if (!finalDate) return undefined;

  const now = new Date();
  now.setUTCHours(0, 0, 0, 0);
  //Go one second into the past for simple comparisons of dates, as they're always midnight
  now.setSeconds(now.getSeconds() - 1);
  const date = new Date(finalDate);
  // if the event occurs today, or in the future
  if (date >= now) {
    return addSettlementRates(event, EventCalculationStatuses.UPCOMING);
  }
  // if the event is in the past
  if (date < now) {
    if (!event.confirmationStatus)
      return addSettlementRates(event, EventCalculationStatuses.PENDING);
    if (event.confirmationStatus === 'CONFIRMED')
      return addSettlementRates(event, EventCalculationStatuses.CONFIRMED);
  }

  if (event.confirmationStatus === 'PENDING')
    return addSettlementRates(event, EventCalculationStatuses.PENDING);
  if (event.confirmationStatus === 'NOT_CONFIRMED') {
    if (event.eventType === 'MATURITY')
      return addSettlementRates(event, EventCalculationStatuses.NOT_MATURED);
    if (event.eventType === 'ISSUER_CALL' || event.eventType === 'AUTO_CALL')
      return addSettlementRates(event, EventCalculationStatuses.NOT_CALLED);
    if (event.eventType === 'COUPON_PAYMENT')
      return addSettlementRates(event, EventCalculationStatuses.MISSED);
  }

  if (event.confirmationStatus === 'REQUIRES_RESOLUTION')
    return addSettlementRates(event, EventCalculationStatuses.REVIEW);
  return { status: EventCalculationStatuses.UNKNOWN };
};

export enum EventTypesDisplay {
  AUTO_CALL = 'Auto Call',
  ISSUER_CALL = 'Issuer Call',
  MATURITY = 'Maturity',
  COUPON = 'Coupon Payment',
}
export const formatEventType = (
  eventType: string | undefined
): EventTypesDisplay | undefined => {
  if (eventType) {
    switch (eventType) {
      case 'COUPON_PAYMENT':
        return EventTypesDisplay.COUPON;
      case 'MATURITY':
        return EventTypesDisplay.MATURITY;
      case 'AUTO_CALL':
        return EventTypesDisplay.AUTO_CALL;
      case 'ISSUER_CALL':
        return EventTypesDisplay.ISSUER_CALL;
      case 'PDW_COUPON_DATE':
        return EventTypesDisplay.COUPON;
      case 'PDW_FINAL_VALUATION_DATE':
        return EventTypesDisplay.MATURITY;
      case 'Auto Call':
        return EventTypesDisplay.AUTO_CALL;
      case 'Issuer Call':
        return EventTypesDisplay.ISSUER_CALL;
      default:
        return undefined;
    }
  } else {
    return undefined;
  }
};

export const getBarrierText = (
  eventType: string | undefined,
  downsideType: string | undefined
): string | undefined => {
  if (eventType && downsideType) {
    switch (eventType) {
      case 'Coupon Payment':
        return 'Coupon Barrier';
      case 'Auto Call':
      case 'Issuer Call':
        return 'Call Barrier';
      case 'Maturity':
        if (downsideType === 'Barrier') {
          return 'Principal Barrier';
        }
        if (downsideType === 'Buffer') {
          return 'Principal Threshold';
        }
        return undefined;
      default:
        return undefined;
    }
  } else {
    return undefined;
  }
};

export enum RegTypesDisplay {
  REG_S = 'Reg S',
  REGISTERED_NOTE = 'Registered',
  _3A2 = '3a2',
  UNKNOWN = 'Unknown',
}

type DateFormats =
  | 'yyyy-MM-dd'
  | 'dd-MM-yyyy'
  | 'MMM dd, yyyy'
  | 'MM/dd/yyyy'
  | 'MM-dd-yyyy';
export const ISODateToFormat = (
  date: string | undefined,
  dateFormat: DateFormats = 'MM/dd/yyyy'
): undefined | string => {
  if (!date) return undefined;
  return DateFormatter.formatLocalDate(
    new Date(new Date(date).toLocaleString('en-US', { timeZone: 'UTC' })),
    dateFormat
  );
};

export const eventDateFilterComparator = (dateA: string, dateB: string) => {
  if (dateA === dateB) return 0;
  return DateHelper.isDateBefore(new Date(dateA), new Date(dateB)) ? -1 : 1;
};

export const getPhysicalSettlementData = (
  physicalSettlements: PhysicalSettlement[] | undefined
): {
  cash?: PhysicalSettlement | undefined;
  shares: PhysicalSettlement | undefined;
} => {
  if (!physicalSettlements) return { cash: undefined, shares: undefined };
  return {
    shares: physicalSettlements.find(
      (settlement: PhysicalSettlement) =>
        settlement.physicalSettlementType === 'Shares' &&
        (settlement.issuerValue || settlement.lumaValue || settlement.value)
    ),
    cash: physicalSettlements.find(
      (settlement: PhysicalSettlement) =>
        settlement.physicalSettlementType === 'Cash in Lieu'
    ),
  };
};

export const getPrincipalProximityData = (
  principalProximity: string | undefined
): {
  principalProximityAboveOrBelow: PrincipalProximity | undefined;
  principalProximityValue: string | undefined;
} => {
  let principalProximityAboveOrBelow: PrincipalProximity | undefined;
  let principalProximityValue: string | undefined;

  if (principalProximity) {
    if (principalProximity.includes('Above')) {
      principalProximityAboveOrBelow = PrincipalProximity.POSITIVE;
      principalProximityValue = '+' + principalProximity?.split(' ')[0];
    } else if (principalProximity.includes('Below')) {
      principalProximityAboveOrBelow = PrincipalProximity.NEGATIVE;
      principalProximityValue = '-' + principalProximity?.split(' ')[0];
    } else {
      principalProximityValue = principalProximity?.split(' ')[0];
    }
  } else {
    principalProximity = undefined;
  }

  return {
    principalProximityAboveOrBelow: principalProximityAboveOrBelow,
    principalProximityValue: principalProximityValue,
  };
};

export const formatEmailPayout = (
  eventData: EventProductData,
  payout: string
): string => {
  return eventData.activeUnderlier + ': ' + payout;
};

export const handleLMProductLink = (productIdentifier: string | undefined) => {
  window.open(createProductDetailsUrl(productIdentifier), '_blank');
};
