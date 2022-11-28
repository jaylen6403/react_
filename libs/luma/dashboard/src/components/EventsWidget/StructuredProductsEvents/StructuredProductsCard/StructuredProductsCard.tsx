import { useState } from 'react';
import {
  CusipLink,
  EventsWidgetCard,
  EventsWidgetCardHeader,
  EventsWidgetCardHeading,
  EventsWidgetCardTable,
  EventsWidgetCardTableCell,
  EventsWidgetCardTableHeading,
  CurrencyPill,
  Currency,
  BasketType,
  BarrierCellTooltip,
  BarrierCellFull,
  BarrierHeader,
  MarkToMarket,
  MarkToMarketTitle,
  MarkToMarketValue,
} from './StrucutredProductsCard.style';
import { EventCardData } from '@luma-fe-workspace/redux';
import { PerformanceData } from '../PerformanceData/PerformanceData';
import { getBarrierLevelIndicator } from '../../../../utils/structuredProductsEventsUtils';
import { createProductDetailsUrl } from '../../../../utils/links';
import { Tooltip } from '../../../Tooltip/Tooltip';
import { DateHelper } from '@luma-fe-workspace/utility';

interface Props {
  event: EventCardData;
  id: string;
}
export const StructuredProductsCard = ({ event, id }: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const barrierId = `${id}_barrier`;
  const showMarkToMarket = event.markToMarketDate
    ? DateHelper.underThirtyDaysOld(new Date(event.markToMarketDate))
    : false;

  return (
    <EventsWidgetCard
      indicator={getBarrierLevelIndicator(event.eventProximity, event.type)}
    >
      <EventsWidgetCardHeader>
        <EventsWidgetCardHeading>{event.eventType}</EventsWidgetCardHeading>

        <CusipLink href={createProductDetailsUrl(event.productIdentifier)}>
          {event.productSymbol ? event.productSymbol : event.productIdentifier}
        </CusipLink>
      </EventsWidgetCardHeader>
      <BasketType>{event.basketType}</BasketType>
      <PerformanceData
        underliers={event?.underlierList ? event.underlierList : []}
        barrierValue={event?.eventProximity}
        barrierIndicator={getBarrierLevelIndicator(
          event.eventProximity,
          event.type
        )}
        id={`${id}_underlier`}
      />
      <EventsWidgetCardTable>
        <EventsWidgetCardTableHeading gridRow={1} gridCol={1}>
          Event Date
        </EventsWidgetCardTableHeading>
        <EventsWidgetCardTableCell gridRow={1} gridCol={2}>
          {event.eventDate}
        </EventsWidgetCardTableCell>

        <BarrierHeader>Barrier/Buffer</BarrierHeader>
        <BarrierCellFull
          id={barrierId}
          onMouseOver={() => {
            if (event.eventFutureInfo !== '--') setShowTooltip(true);
          }}
          onFocus={() => {
            if (event.eventFutureInfo !== '--') setShowTooltip(true);
          }}
          onMouseOut={() => {
            setShowTooltip(false);
          }}
          onBlur={() => {
            setShowTooltip(false);
          }}
        >
          {event.eventFutureInfo}
        </BarrierCellFull>

        <EventsWidgetCardTableHeading gridRow={3} gridCol={1}>
          Notional{' '}
        </EventsWidgetCardTableHeading>
        <EventsWidgetCardTableCell gridRow={3} gridCol={2}>
          {event.notional?.toLocaleString('en-US')}
          {event.notional ? (
            <CurrencyPill>
              <Currency>USD</Currency>
            </CurrencyPill>
          ) : null}
        </EventsWidgetCardTableCell>
      </EventsWidgetCardTable>
      {event.markToMarket && showMarkToMarket ? (
        <MarkToMarket>
          <MarkToMarketTitle>Mark to Market</MarkToMarketTitle>
          <MarkToMarketValue>
            {event.markToMarket.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </MarkToMarketValue>
        </MarkToMarket>
      ) : null}
      <Tooltip
        wrapperId={barrierId}
        top={'50%'}
        left={'39%'}
        isVisible={showTooltip}
      >
        <BarrierCellTooltip>{event.eventFutureInfo}</BarrierCellTooltip>
      </Tooltip>
    </EventsWidgetCard>
  );
};
