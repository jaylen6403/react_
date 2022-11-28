import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { EventCardData } from '@luma-fe-workspace/redux';

import { ProductType, ProductTypes } from '../../../utils/types';
import { AnnuitiesCard } from '../Annuities/AnnuitiesCard/AnnuitiesCard';
import { StructuredProductsCard } from '../StructuredProductsEvents/StructuredProductsCard/StructuredProductsCard';
import { ViewAllEventsCard } from '../ViewAllEventsCard/ViewAllEventsCard';
import { AnnuitiesEventData } from '../../../utils/annuitiesUtils';

import { EventsListContainer } from './EventsList.style';

interface Props {
  data: EventCardData[] | AnnuitiesEventData[] | undefined;
  productType: ProductType;
  annuitiesToggle: { next: boolean; past: boolean };
  setUpdateScroll: Dispatch<SetStateAction<boolean>>;
  updateScroll: boolean;
}
export const EventsList = ({
  data,
  productType,
  annuitiesToggle,
  updateScroll,
  setUpdateScroll,
}: Props) => {
  const [cardsToShow, setCardsToShow] = useState<
    EventCardData[] | AnnuitiesEventData[] | []
  >([]);

  const isStructuredProduct = (
    data: EventCardData | AnnuitiesEventData
  ): data is EventCardData =>
    (data as EventCardData).productIdentifier !== undefined;

  const updateData = () => {
    const date = new Date();
    const today = new Intl.DateTimeFormat('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    }).format(date);
    const todaysDate = today.replace(/\//g, '-');
    let cards: EventCardData[] = [];

    if (data && data.length > 0) {
      if (productType === ProductTypes.Annuities) {
        const idx = (data as AnnuitiesEventData[]).findIndex(
          (card) => card.date >= todaysDate
        );
        if (annuitiesToggle.next) {
          cards = data.slice(idx).slice(0, 20);
        } else if (annuitiesToggle.past) {
          cards = data.slice(0, idx).reverse().slice(0, 20);
        }
      } else {
        cards = data.slice(0, 20);
      }
      setUpdateScroll(!updateScroll);
    }
    setCardsToShow(cards);
  };

  useEffect(() => {
    const compileCards = () => {
      updateData();
    };
    compileCards();
  }, [data, annuitiesToggle, productType]);

  return (
    <EventsListContainer>
      {cardsToShow
        ? cardsToShow.map((portfolioEvent, idx) =>
            isStructuredProduct(portfolioEvent) ? (
              <StructuredProductsCard
                id={`event-card-${idx}`}
                key={`event-card-${idx}`}
                event={portfolioEvent}
              />
            ) : (
              <AnnuitiesCard
                id={`annuities_event-card-${idx}`}
                key={`event-card-${idx}`}
                event={portfolioEvent}
              />
            )
          )
        : null}
      <ViewAllEventsCard productType={productType} />
    </EventsListContainer>
  );
};
