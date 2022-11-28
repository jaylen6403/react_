import styled from 'styled-components';
import {
  breakpoints,
  Button,
  colors,
  DropdownBaseMenuItem,
  DropdownIcon,
  Menu,
  StyledButton,
} from '@luma-fe-workspace/design-system';

export const StyledPortfolioWidget = styled.div<{ isSmall: boolean }>`
  background: #ffffff;
  border: solid 0.0625rem ${colors.greyLighter};
  border-radius: 0.5625rem;
  display: flex;
  flex-direction: column;
  min-width: ${(props) => (props.isSmall ? '47.8vw' : 'calc(100vw - 3rem)')};
  max-width: ${(props) => (props.isSmall ? '47.8vw' : 'calc(100vw - 3rem)')};
  padding: 0.3125rem;
  min-height: 25.6875rem;

  @media ${breakpoints.desktop} {
    margin-bottom: 2.5rem;
  }

  @media ${breakpoints.phablet} {
    min-width: calc(100vw - 2rem);
    max-width: calc(100vw - 2rem);
  }
`;

export const StyledPortfolioBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 300px;
  padding: 1rem 0 0 0;
  width: 100%;
  @media (max-width: 1025px) {
    width: 100%;
  }

  @media ${breakpoints.phablet} {
    flex-direction: column;
    justify-content: center;
    max-width: 31rem;
  }
  @media ${breakpoints.mobile} {
    flex-direction: column;
    margin: 0 auto;
    width: 300px;
  }
`;

export const StyledPortfolioHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 62.5rem;

  @media ${breakpoints.phablet} {
    flex-direction: column;
    padding: 0 1rem;
  }
`;

export const CurrencySelectWrapper = styled.div`
  flex-direction: column;
  margin-right: 1rem;

  @media (max-width: 1025px) {
    margin-right: 1.5rem;
  }
  @media ${breakpoints.tablet} {
    margin-right: 0;
  }

  @media ${breakpoints.phablet} {
    margin-top: 0.938rem;
  }
`;

export const PortfolioWidgetToggle = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  gap: 0.375rem;
`;

export const TypesButton = styled(Button)<{
  isActive: boolean;
  StructuredProductsTypes: string;
}>`
  align-items: center;
  background-color: ${(props) =>
    props.isActive ? colors.neutral40 : 'transparent'};
  border: solid 0.0625rem ${colors.neutral40};
  border-radius: 8px;
  color: ${(props) => (props.isActive ? colors.neutral80 : colors.neutral60)};
  display: flex;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: ${(props) => (props.isActive ? '500' : 'normal')};
  height: 2rem;
  justify-content: center;
  width: 4rem;

  &:hover:not([disabled]) {
    background-color: ${colors.neutral10};
    color: ${colors.neutral80};
    border-color: ${colors.neutral60};
  }
`;

export const Disclaimer = styled.p`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.75rem;
  color: ${colors.neutral60};
  width: 13.75rem;
  height: 0.75rem;
  margin: 0.625rem auto;
`;

export const MobileWrapper = styled.div`
  width: 100%;

  ${StyledButton} {
    color: ${colors.neutral80};
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid #a9b3b8;
    border-radius: 0.5rem;
    width: 100%;

    :hover:enabled {
      border-color: #a9b3b8;
      color: ${colors.primary60};
    }

    :hover {
      color: ${colors.primary60};

      border: 1px solid #a9b3b8;
      border-radius: 0.5rem;
    }
  }
  ${Menu} {
    background-color: ${colors.white};
    width: 100%;
    min-width: 13.75rem;
    max-width: unset;
    z-index: 2;
    margin-top: 0.625rem;
    :hover {
      background-color: ${colors.white};
    }
  }
  ${DropdownBaseMenuItem} {
    :hover {
      color: ${colors.primary60};
      background-color: ${colors.white};
    }
    :active {
      background-color: ${colors.white};
    }
  }
  ${DropdownIcon} {
    color: ${colors.neutral80};

    :hover {
      color: ${colors.primary60};
    }
    font-size: 0.875rem;
  }
`;

export const DropdownSelector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  min-width: 4.1875rem;
  height: 1.375rem;

  ${StyledButton} {
    color: #333538;
    font-size: 1rem;
    font-weight: 500;
    margin-right: 0;
    padding: 0;
    justify-content: none;

    :hover: {
      color: ${colors.primary60};
    }
    :hover:enabled {
      color: ${colors.primary60};
    }
  }
  ${Menu} {
    background-color: ${colors.white};
    margin-left: -3.1875rem;
    z-index: 2;
    margin-top: 0.625rem;
    :hover {
      background-color: ${colors.white};
    }
  }
  ${DropdownBaseMenuItem} {
    :hover {
      color: ${colors.primary60};
      background-color: ${colors.white};
    }
    :active {
      background-color: ${colors.white};
    }
  }
  ${DropdownIcon} {
    color: ${colors.neutral80};

    :hover: {
      color: ${colors.primary60};
    }
    font-size: 0.875rem;
    margin-left: 0.25rem;
  }
`;

export const DateText = styled.p`
  font-family: 'IBM Plex Sans', sans-serif;
  color: #717171;
  font-size: 0.75rem;
  margin: 0;

  @media ${breakpoints.phablet} {
    margin: 0.5rem 0 0 0.1rem;
  }
`;

export const Loading = styled.h3``;

export const ChartTableWrapper = styled.div<{ isAnnuities?: boolean }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: ${(props) => (props.isAnnuities ? '1.875rem' : 0)};

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Chart = styled.div<{ isAnnuities?: boolean; addMargin: boolean }>`
  height: ${(props) => (props.isAnnuities ? '21.25rem' : `17.6875rem`)};
  width: 17.6875rem;
  margin-top: ${(props) => (props.addMargin ? '1.875rem' : 0)};

  @media (max-width: 767px) {
    margin-top: 0;
    align-items: center;
  }
  @media ${breakpoints.phablet} {
    height: 100%;
    width: 100%;
    align-items: center;
    max-height: 16.875rem;
    max-width: 15rem;
  }
  @media ${breakpoints.mobile} {
    height: 100%;
    width: 100%;
    align-items: center;
    max-height: 16.875rem;
    max-width: 15rem;
  }
`;

export const Table = styled.div`
  color: ${colors.neutral80};
  width: 44.375rem;
  padding: 0.3125rem;
  padding-right: 1rem;
  height: 21.25rem;

  @media (max-width: 1025px) {
    width: 40.25rem;
    margin-right: 1.5rem;
  }
  @media ${breakpoints.tablet} {
    width: 21.875rem;
    min-width: 3.125rem;
    height: 21.25rem;
  }
  @media (max-width: 767px) {
    width: 100%;
    margin-left: 1.5rem;
  }
  @media ${breakpoints.phablet} {
    width: 100%;
  }
  @media ${breakpoints.mobile} {
    width: 16.875rem;
    padding: 0;
    margin: 0 auto;
    align-items: flex-start;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.688rem;
  @media ${breakpoints.mobile} {
    width: 17.875rem;
  }
`;

export const Header = styled.h2`
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  color: ${colors.primary75};
  margin: 0;
`;

export const ToggleContainer = styled.div``;
