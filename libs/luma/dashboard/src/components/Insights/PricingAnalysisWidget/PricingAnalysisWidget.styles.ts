import styled from 'styled-components';
import {
  breakpoints,
  colors,
  Dropdown,
} from '@luma-fe-workspace/design-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledPricingAnalysisWidget = styled.div<{ isSmall: boolean }>`
  background: #ffffff;
  border: solid 1px ${colors.greyLighter};
  border-radius: 0.5rem;
  display: flex;
  min-width: ${(props) => (props.isSmall ? '23.5vw' : 'calc(50vw - 3rem)')};
  max-width: ${(props) => (props.isSmall ? '23.5vw' : 'calc(50vw - 3rem)')};
  padding: 1.25rem 1rem 0;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  height: 25.375rem;

  @media ${breakpoints.tablet} {
    min-width: calc(50vw - 1.75rem);
    max-width: calc(50vw - 1.75rem);
  }
  @media (max-width: 767px) {
    min-width: calc(100vw - 2rem);
    max-width: calc(100vw - 2rem);
    margin-left: 0;
  }
`;

export const Title = styled.div`
  display: flex;
  position: relative;
  gap: 0.25rem;
  align-items: flex-end;
  margin-left: 1.5rem;

  @media (max-width: 767px) {
    margin-left: 0;
  }
`;

export const Header = styled.h2`
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  color: ${colors.primary75};
  margin-bottom: 0;

  @media ${breakpoints.tablet} {
    margin: 0;
  }
`;

export const CircleInfoIcon = styled(FontAwesomeIcon)`
  color: ${colors.primary50};
  font-size: 0.875rem;
  padding-bottom: 0.25rem;
`;

export const StyledPricingAnalysisBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${breakpoints.tablet} {
    flex-direction: column;
    justify-content: center;
  }
  @media ${breakpoints.mobile} {
    width: 300px;
    flex-direction: column;
    margin: 0px;
  }
`;

export const MainText = styled.p`
  font-family: 'IBM Plex Sans', sans-serif;
  color: ${colors.neutral60};
  font-size: 1rem;
  font-weight: 700;
  margin-top: 2.375rem;
`;

export const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Selector = styled(Dropdown)`
  padding-bottom: 1rem;
`;
