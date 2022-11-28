import styled from 'styled-components';
import {
  colors,
  StyledButton,
  Menu,
  DropdownBaseMenuItem,
  DropdownIcon,
  breakpoints,
} from '@luma-fe-workspace/design-system';

export const DashboardToggleCont = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100vw;
  max-height: 6.25rem;
  align-items: center;
  margin: 2.5rem 0;
  @media ${breakpoints.phablet} {
    flex-direction: column;
    align-items: start;
    padding: 0 1rem 0 1rem;
    margin: 2.5rem 0;
  }
`;

export const DashboardTitle = styled.p`
  font-family: 'IBM Plex Sans', sans-serif;
  color: ${colors.neutral80};
  font-weight: 900;
  font-size: 2rem;
  padding: 0 0 0 1.5rem;
  margin: 0;

  @media ${breakpoints.phablet} {
    padding: 0;
    margin: 0;
    align-items: flex-start;
  }
`;

export const EventsTitle = styled.p`
  font-family: 'IBM Plex Sans', sans-serif;
  color: ${colors.neutral80};
  font-size: 1.5rem;
  font-weight: 500;
  padding-top: 0.3125rem;
  margin-left: 0.75rem;

  @media ${breakpoints.phablet} {
    padding: 0;
    margin: 0;
    align-items: flex-start;
  }
`;
export const DashboardDropdown = styled.div`
  margin-right: 1rem;
  padding-top: 0.3125rem;

  ${StyledButton} {
    background-color: ${colors.neutral10};
    border-color: ${colors.neutral10};
    color: ${colors.neutral80};
    font-size: 1.5rem;
    font-weight: 500;
    width: 18.75rem;
    align-items: center;
    justify-content: unset;

    :hover:enabled {
      background-color: ${colors.neutral10};
      border-color: ${colors.neutral10};
      color: ${colors.primary60};
    }

    :hover: {
      color: ${colors.primary60};
      background-color: ${colors.neutral10};
      border-color: ${colors.neutral10};
      border: 1px solid #a9b3b8;
      border-radius: 0.5rem;
    }
  }
  ${Menu} {
    background-color: ${colors.white};
    width: 100%;
    min-width: 13.75rem;
    font-size: 1.25rem;
    max-width: unset;
    z-index: 2;
    margin-top: -0.3125rem;
    :hover {
      background-color: ${colors.white};
    }
  }
  ${DropdownBaseMenuItem} {
    padding: 0.625rem 0 0.625rem 0.3125rem;
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
    height: 1.5rem;
    width: 1.125rem;
    margin-left: 0.5rem;
  }
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
