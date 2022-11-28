import styled from 'styled-components';
import { colors, breakpoints } from '@luma-fe-workspace/design-system';

interface ScrollProps {
  isLoading: boolean;
  isSPS?: boolean;
}

export const ScrollContainer = styled.div<ScrollProps>`
  width: ${(props) => (props.isLoading ? '100%' : '100vw')};
  display: flex;
`;

export const ScrollWrapper = styled.div<ScrollProps>`
  width: ${(props) => (props.isLoading ? '100%' : '100vw')};
  position: relative;
`;

export const ArrowContainerLeft = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 4rem;
  margin: 2rem 0 0.3125rem 0;
  padding: 1rem 0.625rem;
  border-radius: 0 0.3125rem 0.3125rem 0;
  border: solid 1px ${colors.neutral40};
  background-color: ${colors.neutral00white};
  align-items: center;
  position: absolute;
  left: 0;
  z-index: 1;
  top: 32%;
  transform: translateY(-50%);

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

export const ArrowContainerRight = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: flex-end;
  width: 2.5rem;
  height: 4rem;
  margin: 2rem 0;
  padding: 1rem 0.625rem;
  border-radius: 0.3125rem 0 0 0.3125rem;
  border: solid 1px ${colors.neutral40};
  background-color: ${colors.neutral00white};
  position: absolute;
  right: 0;
  z-index: 1;
  top: 32%;
  transform: translateY(-50%);

  @media ${breakpoints.tablet} {
    display: none;
  }
`;
export const ArrowWrapper = styled.div`
  display: flex;
`;

export const EventsWidgetBody = styled.div<ScrollProps>`
  max-width: 100vw;
  height: ${(props) => (props.isSPS ? '18.5rem' : '17.5rem')};
  display: flex;
  flex-direction: row;

  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;

  @media ${breakpoints.phablet} {
    max-width: 100vw;
  }
  @media ${breakpoints.mobile} {
    max-width: 100vw;
    padding: 0.25rem;
    margin-right: ${(props) => (props.isLoading ? '1rem' : '0')};
  }
`;
