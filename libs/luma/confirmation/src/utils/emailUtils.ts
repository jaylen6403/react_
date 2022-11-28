import { EventProductData } from '@luma-fe-workspace/redux';
import { formatEventType, ISODateToFormat } from './gridUtils';

interface Props {
  eventData: EventProductData;
}

const description = ({ eventData }: Props) => {
  const months = (eventData.tenorFinal ?? 0) * 12;
  const internalName = eventData.structureNameInternal;
  const underliers = eventData.underlierList?.map((u) => {
    return ' ' + u.ticker;
  });
  return months + 'M ' + internalName + ' linked to ' + underliers;
};

const dateTitle = ({ eventData }: Props) => {
  if (eventData.eventDate !== null) {
    return eventData.eventDate?.includes('MATURITY')
      ? 'Final Valuation Date'
      : 'Observation Date';
  }
  return;
};

const paymentDateTitle = ({ eventData }: Props) => {
  if (eventData.eventDate !== null) {
    return eventData.eventType?.includes('MATURITY')
      ? 'Maturity Date'
      : 'Payment Date';
  }
  return;
};

const formatEmailPayout = (
  eventData: EventProductData,
  payout: string
): string => {
  return eventData.activeUnderlier
    ? eventData.activeUnderlier + ': ' + payout
    : payout;
};

export const getTemplateValues = (
  eventData: EventProductData,
  payout: string
): { [key: string]: string | undefined } => {
  const templateValues: { [key: string]: string | undefined } = {
    eventType: formatEventType(eventData.eventType),
    structureNameInternal: eventData.structureNameInternal,
    productSymbol: eventData.productSymbol,
    isin: eventData.productIdentifier,
    description: description({ eventData }),
    issuer: eventData.issuer,
    underlierList: eventData.underlierList?.map((u) => u.ticker).join(', '),
    tradeDate: ISODateToFormat(eventData.tradeDate),
    event: formatEventType(eventData.eventType),
    payout: formatEmailPayout(eventData, payout),
    dateTitle: dateTitle({ eventData }),
    dateValue: ISODateToFormat(eventData.eventDate),
    paymentDateTitle: paymentDateTitle({ eventData }),
    paymentDateValue: ISODateToFormat(eventData.settlementDate),
  };

  Object.keys(templateValues).forEach((key) => {
    if (!templateValues[key]) templateValues[key] = '';
  });
  return templateValues;
};
