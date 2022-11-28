import styled from 'styled-components';
import {
  breakpoints,
  colors,
  ButtonRoot,
} from '@luma-fe-workspace/design-system';

export const StyledTopProductsWidget = styled.div<{ isSmall: boolean }>`
  background: #ffffff;
  border: solid 1px ${colors.greyLighter};
  border-radius: 0.5rem;
  display: flex;
  min-width: ${(props) => (props.isSmall ? '47vw' : 'calc(100vw - 3rem)')};
  max-width: ${(props) => (props.isSmall ? '47vw' : 'calc(100vw - 3rem)')};
  padding: 1.25rem 1rem 0;
  margin-top: 1.5rem;
  height: 25.375rem;

  @media (max-width: 1439px) {
    margin-bottom: 1.5rem;
  }
  @media ${breakpoints.tablet} {
    min-width: calc(100vw - 2rem);
    max-width: calc(100vw - 2rem);
    padding: 1.25rem 0.625rem 0;
  }
`;

export const Title = styled.div`
  display: flex;
  position: relative;
  gap: 0.25rem;
  align-items: flex-end;

  @media ${breakpoints.phablet} {
    flex-wrap: wrap;
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

export const ViewMarketplace = styled.div`
  margin-left: 1.5rem;

  @media ${breakpoints.phablet} {
    width: 20.125rem;
    margin: 0;
    padding-top: 1rem;
  }
  @media (max-width: 543px) {
    width: 100%;
  }

  ${ButtonRoot} {
    white-space: nowrap;
    justify-content: center;
    color: ${colors.primary50};
    font-size: 0.75rem;
    border-radius: 0.5rem;
    background-color: ${colors.neutral00white};
    border: 1px solid ${colors.neutral40};

    :hover {
      background-color: ${colors.primary20};
    }

    @media ${breakpoints.tablet} {
      width: 100%;
    }
    @media ${breakpoints.phablet} {
      width: 20.125rem;
      margin: 0;
    }
    @media (max-width: 543px) {
      width: 100%;
    }
  }
`;

export const StyledTopProductsBody = styled.div`
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

export const TableWrapper = styled.div`
  width: auto;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;
