import styled, { css, keyframes } from 'styled-components';
import { breakpoints } from '../../breakpoints';
import { LumaColor } from '../../components-Luma/LumaColors';
import { Icon } from '../Icon/Icon';
const slideInRight = keyframes`
  0% {
    transform: translate3d(105%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutRight = keyframes`
  0% {
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
  }
  to {
    transform: translate3d(105%, 0, 0);
    -webkit-transform: translate3d(105%, 0, 0);
  }
`;

export const DrawerBackground = styled.div<{
  isOpen: boolean;
  hasOverlay: boolean;
}>`
  background-color: ${(props) =>
    props.hasOverlay ? `${LumaColor.DRAWER_BACKGROUND}` : 'transparent'};
  height: 100%;
  font-family: 'IBM Plex Sans';
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  flex-direction: row-reverse;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
`;

export const DrawerContainer = styled.div<{
  onToggle: boolean;
}>`
  animation: ${(props) =>
    props.onToggle
      ? css`
          ${slideInRight} 0.5s cubic-bezier(0.76, 0.08, 0.71, 0.95);
          animation-fill-mode: both;
        `
      : css`
          ${slideOutRight} 0.25s cubic-bezier(0.76, 0.08, 0.71, 0.95);
          animation-fill-mode: both;
        `}
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${LumaColor.NEUTRAL_00_WHITE};
  height: 100%;
  width: 40rem;
  position: relative;
  box-shadow: 0 0 0.625rem 0 ${LumaColor.DRAWER_BACKGROUND};
`;

export const CloseIconWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem 1.5rem 0 0;
  z-index: 1;
  @media ${breakpoints.tablet} {
    margin-top: 3.875rem;
  }
  :hover {
    cursor: pointer;
  }
`;

export const CloseIcon = styled(Icon)`
  height: 1.875rem;
  color: ${LumaColor.NEUTRAL_80};
`;
