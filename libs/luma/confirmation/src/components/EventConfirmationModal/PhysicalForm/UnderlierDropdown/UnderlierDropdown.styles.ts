import styled from 'styled-components';
import {
  colors,
  DropdownIcon,
  DropdownBaseMenuItem,
  Menu,
  StyledButton,
} from '@luma-fe-workspace/design-system';

export const LabelText = styled.label`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  color: ${colors.neutral80};
  margin-left: 1.5rem;
  width: 5rem;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  border-top: 1px solid ${colors.neutral40};
  padding-top: 1.5rem;
  align-items: center;

  ${StyledButton} {
    margin: 0 0 0 1rem;
    color: ${colors.neutral60};
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.75rem;
    font-weight: normal;
    width: 21rem;
    border: 1px solid ${colors.neutral40};
    border-radius: 0.5rem;

    :hover:enabled {
      border-color: ${colors.neutral80};
      color: ${colors.neutral80};
    }

    :hover {
      color: ${colors.primary60};
      border: 1px solid #a9b3b8;
      border-radius: 0.5rem;
    }
  }

  ${Menu} {
    margin-left: 1rem;
    background-color: ${colors.white};
    width: 100%;
    min-width: 13.75rem;
    max-width: 21rem;
    z-index: 2;
    margin-top: 0.625rem;
    border: 1px solid ${colors.neutral80};
    border-radius: 0.5rem;

    :hover {
      background-color: ${colors.white};
    }

    :empty {
      border: none;
    }
  }

  ${DropdownBaseMenuItem} {
    width: auto;
    padding: 0.25rem 0;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    font-weight: normal;
    font-size: 0.75rem;
    border-bottom: 1px solid ${colors.neutral20};
    border-radius: 0;

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
    font-size: 0.875rem;
  }
`;
