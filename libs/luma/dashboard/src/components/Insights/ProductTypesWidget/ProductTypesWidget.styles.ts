import styled from 'styled-components';
import { breakpoints, colors } from '@luma-fe-workspace/design-system';

export const StyledProductTypesWidget = styled.div<{ isSmall: boolean }>`
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

  @media (max-width: 1439px) {
    margin-left: 0;
    min-width: calc(50vw - 1.75rem);
    max-width: calc(50vw - 1.75rem);
  }
  @media ${breakpoints.tablet} {
    min-width: calc(50vw - 1.75rem);
    max-width: calc(50vw - 1.75rem);
    padding: 1.25rem 0.625rem 0;
  }
  @media (max-width: 767px) {
    min-width: calc(100vw - 2rem);
    max-width: calc(100vw - 2rem);
    margin-bottom: 1.5rem;
  }
`;

export const Title = styled.div`
  display: flex;
  position: relative;
  gap: 0.25rem;
  align-items: flex-end;
  margin-left: 1.5rem;

  @media (max-width: 1439px) {
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

export const StyledProductTypesBody = styled.div`
  display: flex;
  flex-direction: column;
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

export const StyledProductTypesHeader = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;

  @media (max-width: 1025px) {
    margin-right: 1.5rem;
  }

  @media ${breakpoints.phablet} {
    align-items: flex-start;
    padding-bottom: 0;
  }

  @media ${breakpoints.mobile} {
    padding-bottom: 0;
    align-items: flex-start;
    padding-right: 1.25rem;
  }
`;

export const ChartTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;
  gap: 1.9rem;
`;

export const Table = styled.div`
  color: ${colors.neutral80};
  min-width: 15rem;
  max-width: 50rem;
  height: 18rem;
  padding: 0.3125rem;

  @media ${breakpoints.tablet} {
    width: 20.375rem;
    min-width: 3.125rem;
    height: 18rem;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
