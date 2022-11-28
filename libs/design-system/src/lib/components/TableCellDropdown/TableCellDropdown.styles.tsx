import styled from 'styled-components';
import { colors } from '../../colors';
import { Dropdown } from '../Dropdown';
import { DropdownIcon } from '../Dropdown/DropdownBase.styles';

export const GridDropdown = styled(Dropdown)<{ displayColor?: string }>`
  background-color: transparent;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  border: 0.03125rem solid ${colors.greyLight};
  && button {
    color: ${(props) =>
      props.displayColor ? props.displayColor : colors.greyDark};
    background-color: transparent;
    border: none;
    padding: 0;
    font-family: IBM Plex Mono;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0em;

    &:focus:enabled {
      box-shadow: none;
    }

    &:hover:enabled {
      color: ${colors.greyDark};
      background-color: transparent;
    }
  }

  ul {
    z-index: 999;
    display: flex;
    flex-direction: column;
    min-width: 0;
    right: 0;
    & li {
      text-align: center;
    }
  }

  ${DropdownIcon} {
    margin-left: 0.25rem;
  }
`;
