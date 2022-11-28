import { useState } from 'react';

import {
  CusipLink,
  EventsWidgetCard,
  EventsWidgetCardHeader,
  EventsWidgetCardHeading,
  EventsWidgetCardTable,
  EventsWidgetCardTableCell,
  EventsWidgetCardTableHeading,
  EventsWidgetValue,
  MidValueCont,
  PolicyValue,
  PolicyHeading,
  PolicyDiv,
} from './AnnuititiesCard.style';
import { createPolicyDetailsUrl } from '../../../../utils/links';
import { Tooltip } from '../../../Tooltip/Tooltip';
import { AnnuitiesEventData } from '../../../../utils/annuitiesUtils';
import { DateFormatter } from '@luma-fe-workspace/utility';

interface Props {
  event: AnnuitiesEventData;
  id: string;
}
export const AnnuitiesCard = ({ event, id }: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const updatedDate = event.date.split('-').join('/');
  const formattedDate = DateFormatter.formatLocalDate(new Date(updatedDate));

  return (
    <EventsWidgetCard>
      <EventsWidgetCardHeader>
        <EventsWidgetCardHeading
          id={id}
          onMouseOver={() => {
            if (event.eventType.length > 27) {
              setShowTooltip(true);
            }
          }}
          onFocus={() => {
            if (event.eventType.length > 27) {
              setShowTooltip(true);
            }
          }}
          onMouseOut={() => {
            setShowTooltip(false);
          }}
          onBlur={() => {
            setShowTooltip(false);
          }}
        >
          {event.eventType.length > 27
            ? `${event.eventType.substring(0, 27)}...`
            : event.eventType}
        </EventsWidgetCardHeading>

        <CusipLink href={createPolicyDetailsUrl(event.policyNumber)}>
          Policy# {event.policyNumber}
        </CusipLink>
      </EventsWidgetCardHeader>
      <PolicyDiv>
        <PolicyHeading>Policy Holder</PolicyHeading>
        <PolicyValue>
          {event.policyHolder.trim().replace(/(^,)|(,$)/g, '')}
        </PolicyValue>
      </PolicyDiv>
      <MidValueCont>
        <EventsWidgetValue>{event.carrier}</EventsWidgetValue>
        <EventsWidgetValue>{event.productType}</EventsWidgetValue>
      </MidValueCont>
      <EventsWidgetCardTable>
        <tbody>
          <tr>
            <EventsWidgetCardTableHeading>
              Event Date
            </EventsWidgetCardTableHeading>
            <EventsWidgetCardTableCell>
              {formattedDate}
            </EventsWidgetCardTableCell>
          </tr>

          <tr>
            <EventsWidgetCardTableHeading>Premium</EventsWidgetCardTableHeading>
            <EventsWidgetCardTableCell>
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 2,
              }).format(event.premium)}
            </EventsWidgetCardTableCell>
          </tr>

          <tr>
            <EventsWidgetCardTableHeading>
              Acct Value
            </EventsWidgetCardTableHeading>
            <EventsWidgetCardTableCell>
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 2,
              }).format(event.accountValue)}
            </EventsWidgetCardTableCell>
          </tr>
        </tbody>
      </EventsWidgetCardTable>
      <Tooltip wrapperId={id} top={'10'} left={'10'} isVisible={showTooltip}>
        <EventsWidgetCardHeading isTooltip={true}>
          {event.eventType}
        </EventsWidgetCardHeading>
      </Tooltip>
    </EventsWidgetCard>
  );
};
