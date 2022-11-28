import { useState, useRef, useEffect, useCallback } from 'react';

import {
  ScrollContainer,
  ScrollWrapper,
  ArrowContainerLeft,
  ArrowContainerRight,
  ArrowWrapper,
  EventsWidgetBody,
} from './Scroll.styles';
import { colors } from '@luma-fe-workspace/design-system';
import { Icon } from '@luma-fe-workspace/design-system';
import { EventsList } from '../EventsList/EventsList';
import { ProductType, ProductTypes } from '../../../utils/types';
import { Spinner } from '../../Spinner/Spinner';
import { AnnuitiesEventData } from '../../../utils/annuitiesUtils';
import { EventCardData } from '@luma-fe-workspace/redux';

interface ScrollProps {
  annuitiesToggle: { next: boolean; past: boolean };
  eventsLoading: boolean;
  productsType: ProductType;
  eventsData: EventCardData[] | AnnuitiesEventData[] | undefined;
}

export const Scroll = ({
  annuitiesToggle,
  eventsLoading,
  productsType,
  eventsData,
}: ScrollProps) => {
  const maxScrollWidthRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [updateScroll, setUpdateScroll] = useState<boolean>(false);

  const rightArrowVisible = useCallback(() => {
    setShowRightArrow(true);
  }, []);

  const leftArrowVisible = () => !showLeftArrow && setShowLeftArrow(true);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
      leftArrowVisible();
      rightArrowVisible();
    } else {
      setShowLeftArrow(false);
    }
  };

  const moveNext = () => {
    if (
      carouselRef.current !== null &&
      carouselRef.current?.offsetWidth * currentIndex <=
        maxScrollWidthRef.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
      leftArrowVisible();
      rightArrowVisible();
    } else {
      setShowRightArrow(false);
    }
  };

  useEffect(() => {
    if (carouselRef !== null && carouselRef.current !== null) {
      carouselRef.current.scrollLeft =
        carouselRef.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidthRef.current = carouselRef.current
      ? carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      : 0;

    if (maxScrollWidthRef.current !== 0) {
      rightArrowVisible();
    } else {
      setShowRightArrow(false);
    }
  }, [updateScroll, annuitiesToggle, carouselRef]);

  const scrollEvent = (x: React.UIEvent<HTMLDivElement>) => {
    if (carouselRef) {
      if (carouselRef.current?.scrollLeft === 0) {
        setCurrentIndex(0);
        setShowLeftArrow(false);
        rightArrowVisible();
      } else if (
        carouselRef.current?.scrollLeft === maxScrollWidthRef.current
      ) {
        const maxIndex =
          maxScrollWidthRef.current / carouselRef.current?.offsetWidth;
        setCurrentIndex(maxIndex);
        leftArrowVisible();
        setShowRightArrow(false);
      } else {
        leftArrowVisible();
        rightArrowVisible();
      }
    }
  };

  if (!eventsLoading && !eventsData?.length) {
    return null;
  }

  return (
    <ScrollContainer isLoading={eventsLoading}>
      <ScrollWrapper isLoading={eventsLoading}>
        {showLeftArrow && (
          <ArrowContainerLeft onClick={movePrev}>
            <ArrowWrapper>
              <Icon
                iconCode="chevron-left"
                prefix="fal"
                style={{
                  color: `${colors.neutral60}`,
                  height: '40px',
                  width: '40px',
                }}
              />
            </ArrowWrapper>
          </ArrowContainerLeft>
        )}
        <EventsWidgetBody
          ref={carouselRef}
          onScroll={scrollEvent}
          isLoading={eventsLoading}
          isSPS={productsType === ProductTypes.StructuredProducts}
        >
          {eventsLoading ? (
            <Spinner />
          ) : (
            <EventsList
              productType={productsType}
              data={eventsData}
              annuitiesToggle={annuitiesToggle}
              setUpdateScroll={setUpdateScroll}
              updateScroll={updateScroll}
            />
          )}
        </EventsWidgetBody>
        {!eventsLoading && !!eventsData && showRightArrow && (
          <ArrowContainerRight onClick={moveNext}>
            <ArrowWrapper>
              <Icon
                iconCode="chevron-right"
                prefix="fal"
                style={{
                  color: `${colors.neutral60}`,
                  height: '40px',
                  width: '40px',
                }}
              />
            </ArrowWrapper>
          </ArrowContainerRight>
        )}
      </ScrollWrapper>
    </ScrollContainer>
  );
};
