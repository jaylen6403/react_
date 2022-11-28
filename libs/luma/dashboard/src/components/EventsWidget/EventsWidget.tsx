import { useState } from 'react';
import {
  EventsWidgetContainer,
  EventsWidgetHeader,
  EventsWidgetHeading,
} from './EventsWidget.styles';
import {
  useGetPortfolioEventsUsingGetQuery,
  useGetAnnuityEventsUsingGetQuery,
} from '@luma-fe-workspace/redux';

import { AnnuityFilter } from './Annuities/AnnuityFilter/AnnuityFilter';
import { ProductType, ProductTypes } from '../../utils/types';
import { Scroll } from './Scroll/Scroll';

interface Props {
  productsType: ProductType;
  screenWidth: number;
}

export const EventsWidget = ({ productsType, screenWidth }: Props) => {
  const [annuitiesToggle, setAnnuitiesToggle] = useState({
    next: true,
    past: false,
  });
  const { data: structuredProductsData, isLoading: structuredEventsLoading } =
    useGetPortfolioEventsUsingGetQuery();
  const { data: annuityEventsData, isLoading: annuityEventsLoading } =
    useGetAnnuityEventsUsingGetQuery();

  const eventsData =
    productsType === ProductTypes.Annuities
      ? annuityEventsData?.calendarEvents
      : structuredProductsData;

  const eventsLoading =
    productsType === ProductTypes.Annuities
      ? annuityEventsLoading
      : structuredEventsLoading;

  if (!eventsLoading && !eventsData?.length) {
    return null;
  }

  return (
    <EventsWidgetContainer>
      {productsType === ProductTypes.StructuredProducts ? (
        <EventsWidgetHeader>
          <EventsWidgetHeading>Structured Product Events</EventsWidgetHeading>
        </EventsWidgetHeader>
      ) : (
        <AnnuityFilter
          annuitiesToggle={annuitiesToggle}
          setAnnuitiesToggle={setAnnuitiesToggle}
          screenWidth={screenWidth}
        />
      )}
      <Scroll
        annuitiesToggle={annuitiesToggle}
        productsType={productsType}
        eventsLoading={eventsLoading}
        eventsData={eventsData}
      />
    </EventsWidgetContainer>
  );
};
