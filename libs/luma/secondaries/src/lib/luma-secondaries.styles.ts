import styled from 'styled-components';
import {
  AppHeader,
  colors,
  Dropdown,
  DropdownIcon,
  Menu,
} from '@luma-fe-workspace/design-system';
// @temp: waiting for typography
export const FONT_IBM_SANS = 'IBM Plex Sans';
export const FONT_IBM_MONO = 'IBM Plex Mono';

export const LumaSecondariesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const StyledAppHeader = styled(AppHeader)`
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const SecondariesDropdown = styled(Dropdown)<{
  width?: string;
}>`
  && ${Menu} {
    z-index: 4;
    right: 0;
    width: ${(props) => props.width ?? 'max-content'};
  }
  && ${DropdownIcon} {
    :first-child:not(:last-child) {
      margin-left: 0;
      margin-right: 0.5rem;
    }
    :last-child {
      margin-left: 0.5rem;
    }
  }
  && button {
    border-color: ${colors.greyLightest};
    &:hover:not([disabled]) {
      border-color: ${colors.oceanDarker};
    }
    padding: 0.5rem;
  }
`;

export const LumaSecondariesBody = styled.div`
  height: 100%;
  padding: 0.5rem;
  height: 100vh;
  z-index: 0;
`;
