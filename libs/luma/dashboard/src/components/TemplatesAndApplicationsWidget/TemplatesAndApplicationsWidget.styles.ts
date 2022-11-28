import styled from 'styled-components';
import {
  breakpoints,
  colors,
  LumaColor,
  Icon,
} from '@luma-fe-workspace/design-system';

export const StyledCreationHubWidget = styled.div<{
  isSmall: boolean;
  isLoading: boolean;
}>`
  background: #ffffff;
  border: solid 0.0625rem ${colors.greyLighter};
  border-radius: 0.5625rem;
  display: flex;
  padding: ${(props) =>
    props.isLoading ? '1.25rem 0.9375rem 0' : '0.3125rem'};
  min-width: ${(props) => (props.isSmall ? '47.8vw' : 'calc(100vw - 3rem)')};
  max-width: ${(props) => (props.isSmall ? '47.8vw' : 'calc(100vw - 3rem)')};
  height: 25.6875rem;

  @media ${breakpoints.tablet} {
    padding: ${(props) =>
      props.isLoading ? '1.25rem 0.625rem 0' : '0.3125rem'};
  }

  @media ${breakpoints.phablet} {
    min-width: calc(100vw - 2rem);
    max-width: calc(100vw - 2rem);
  }
`;

export const StyledCreationHubBody = styled.div<{ isSmall: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  width: 100%;
  max-width: 61.4375rem;
  padding: ${(props) =>
    props.isSmall ? '1.5rem 1rem 0 1rem' : '0 1.5rem 0 1.5rem'};

  @media ${breakpoints.mobile} {
    width: 300px;
    flex-direction: column;
    margin: 0px;
  }
`;

export const ChevronIcon = styled(Icon)`
  color: ${LumaColor.PRIMARY_50};
  font-weight: bold;
  margin-top: 2px;
  margin-left: 0.375rem;
`;

export const TableWrapper = styled.div`
  width: auto;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TemplatesLink = styled.button`
  color: ${colors.primary50};
  align-self: flex-end;
  border: none;
  background-color: ${LumaColor.NEUTRAL_00_WHITE};
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  width: auto;
  height: 2.5rem;
  text-decoration: none;
  padding-right: 0.5rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media ${breakpoints.phablet} {
    flex-direction: column;
    gap: 0;
  }
`;

export const Header = styled.h2`
  font-family: 'IBM Plex Sans', sans-serif;
  margin: 0;
  font-weight: 500;
  font-size: 1.25rem;
  margin-bottom: 1.688rem;
  color: ${colors.primary75};

  @media ${breakpoints.phablet} {
    width: 100%;
    margin-bottom: 1rem;
    margin-right: 0;
  }
`;

export const CreateNewRequest = styled.button`
  width: 9.313rem;
  height: 1.75rem;
  text-align: center;
  white-space: nowrap;
  justify-content: center;
  color: ${LumaColor.PRIMARY_50};
  font-size: 0.75rem;
  border-radius: 8px;
  background-color: ${LumaColor.NEUTRAL_00_WHITE};
  border: 1px solid ${LumaColor.NEUTRAL_40};

  @media ${breakpoints.phablet} {
    margin: 0 0 1rem 0;
    height: 1.75rem;
    width: 100%;
  }

  :hover {
    background-color: ${LumaColor.PRIMARY_20};
  }
`;
