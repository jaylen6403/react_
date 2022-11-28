import {
  EventsWidgetCard,
  EventsWidgetLastCardHeader,
  EventsWidgetLastCardHeading,
  LastCardContainer,
  IconContainer,
  CalendarIcon,
} from './ViewAllEventsCard.style';
import { ProductType, ProductTypes } from '../../../utils/types';
import { createLMUrl, createAnnuitiesLink } from '../../../utils/links';

interface Props {
  productType: ProductType;
}

export const ViewAllEventsCard = ({ productType }: Props) => {
  return (
    <EventsWidgetCard
      indicator={'LASTCARD'}
      key={'event-card-last'}
      isSPS={productType === ProductTypes.StructuredProducts}
    >
      <LastCardContainer
        href={
          productType === ProductTypes.Annuities
            ? createAnnuitiesLink()
            : createLMUrl()
        }
      >
        <IconContainer>
          <CalendarIcon iconCode="calendar-plus" prefix="far" />
        </IconContainer>
        <EventsWidgetLastCardHeader>
          <EventsWidgetLastCardHeading>
            View all events in Lifecycle Manager
          </EventsWidgetLastCardHeading>
        </EventsWidgetLastCardHeader>
      </LastCardContainer>
    </EventsWidgetCard>
  );
};
