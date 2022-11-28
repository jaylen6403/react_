import styled from 'styled-components';
import {
  colors,
  ButtonRoot,
  breakpoints,
  StyledButton,
  Menu,
  DropdownBaseMenuItem,
  DropdownIcon,
} from '@luma-fe-workspace/design-system';

export const AnnuityFilterTitle = styled.p`
  font-size: 1.25rem;
  font-family: 'IBM Plex Sans', sans-serif;
  color: ${colors.primary75};
  font-weight: 500;
  margin-right: 2rem;

  @media ${breakpoints.phablet} {
    margin: 0;
  }
`;

export const FilterCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 2.5rem;
  margin: 0 0 0.25rem 1.5rem;
  margin-bottom: 1.25rem;

  @media ${breakpoints.phablet} {
    flex-direction: column;
    align-items: start;
    padding: 0 1rem 0 1rem;
    margin: 0 0 2.5rem 0;
  }
  @media ${breakpoints.mobile} {
    flex-direction: column;
    align-items: start;
    padding: 0 1rem 0 0;
    margin: 0 0 1rem 0;
    max-height: 5rem;
  }
`;

export const FilterButton = styled.div<{ isActive: boolean }>`
  ${ButtonRoot} {
    color: ${(props) => (props.isActive ? colors.neutral80 : colors.neutral60)};
    border-radius: 0.5rem;
    padding: 0.4375rem 1rem;
    font-size: 0.875rem;
    border-style: solid;
    border-width: 0.0625rem;
    border-color: ${colors.neutral40};
    background-color: ${(props) =>
      props.isActive ? colors.neutral40 : 'transparent'};

    &:disabled {
      cursor: default;
      opacity: 0.7;
      background-color: transparent;
    }
    &:hover:not([disabled]) {
      background-color: ${colors.neutral10};
      color: ${colors.neutral80};
      border-color: ${colors.neutral60};
    }
  }
  margin-right: 1rem;
`;

export const MobileWrapper = styled.div`
  margin: 0 1rem;
  width: 100%;

  @media ${breakpoints.phablet} {
    padding-top: 0.5rem;
    margin: 0;
    align-items: flex-start;
  }

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

    :hover: {
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
