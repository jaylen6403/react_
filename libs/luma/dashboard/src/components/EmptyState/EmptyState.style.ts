import styled from 'styled-components';
import { colors, breakpoints } from '@luma-fe-workspace/design-system';

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.688rem;

  @media ${breakpoints.mobile} {
    width: 17.875rem;
    margin-left: 1rem;
    margin-bottom: 1.25rem;
  }
`;

export const Header = styled.h2`
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  color: ${colors.primary75};
  margin: 0;
`;

export const EmptyWidget = styled.div<{ isSmall: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: solid 0.0625rem ${colors.greyLighter};
  border-radius: 0.5625rem;
  min-height: 25.6875rem;
  min-width: ${(props) => (props.isSmall ? '47.8vw' : 'calc(100vw - 3rem)')};
  max-width: ${(props) => (props.isSmall ? '47.8vw' : 'calc(100vw - 3rem)')};
  padding: 0 0.3125rem 1.25rem 0.3125rem;

  @media ${breakpoints.desktop} {
    margin-bottom: 2.5rem;
  }

  @media (max-width: 1025px) {
    min-width: 0;
  }
  @media ${breakpoints.phablet} {
    min-width: calc(100vw - 2rem);
    max-width: calc(100vw - 2rem);
  }
`;

export const MainText = styled.p`
  font-family: 'IBM Plex Sans', sans-serif;
  color: ${colors.primary80Daintree};
  font-size: 1rem;
  font-weight: 700;
  margin-top: 2.375rem;
`;

export const SubText = styled.p`
  font-family: 'IBM Plex Sans', sans-serif;
  color: ${colors.primary80Daintree};
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0.625rem;
  @media (max-width: 370px) {
    margin: 0;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 25rem;
  padding: 1rem;

  @media ${breakpoints.phablet} {
    min-width: 17.75rem;
    flex-wrap: wrap;
    text-align: center;
  }
`;

export const LinkText = styled.a`
  font-family: 'IBM Plex Sans', sans-serif;
  color: ${colors.primary50};
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0.625rem;
  margin-left: 0.1875rem;
  @media (max-width: 370px) {
    margin: 0;
  }
`;

export const LinkCont = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 370px) {
    width: 100%;
    height: 8rem;
    flex-direction: column;
    text-align: center;
    flex-wrap: wrap;
  }
`;
