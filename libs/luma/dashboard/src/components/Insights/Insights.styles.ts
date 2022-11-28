import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { breakpoints, colors } from '@luma-fe-workspace/design-system';

export const StyledInisghts = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;
  display: flex;
  flex-direction: column;
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
`;

export const StyledTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  padding: 0 1.5rem;
  margin: 0;

  @media ${breakpoints.tablet} {
    padding: 0 1rem;
  }
`;

export const Collapser = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${colors.primary50};
  gap: 0.5rem;

  :hover {
    cursor: pointer;
  }
`;

export const WidgetWrapper = styled(animated.div)`
  margin-bottom: 3.75rem;
  padding: 0 1.5rem;
  overflow: hidden;

  @media ${breakpoints.tablet} {
    padding: 0 1rem;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;

  @media ${breakpoints.phablet} {
    width: 100%;
  }
`;
