import { colors, LumaColor } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const SidePanel = styled.div<{ isActive: boolean; isMobile: boolean }>`
  font-family: IBM Plex Sans;
  z-index: 9;
  position: fixed;
  left: 0;
  height: calc(100% - ${(props) => (props.isMobile ? '5.075rem' : '8rem')});
  width: ${(props) => (props.isActive ? '100%' : 0)};
`;

export const Overlay = styled.div<{ isActive: boolean }>`
  position: absolute;
  height: 100%;
  width: ${(props) => (props.isActive ? '100%' : 0)};
  background-color: ${LumaColor.DRAWER_BACKGROUND};
`;

export const Content = styled.div<{ isActive: boolean }>`
  position: relative;
  height: 100%;
  width: 17.375rem;
  background-color: ${colors.white};
  box-shadow: 0 0.125rem 0.25rem 0 ${colors['darkening-background']};
  transition: transform 300ms linear;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: ${(props) => (props.isActive ? 'none' : 'translateX(-105%)')};
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.25rem 1.5rem 1.5rem;
  align-items: center;
`;

export const Header = styled.header`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  height: 100%;
  padding: 0 1.5rem;
  margin-bottom: 5.5rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
  height: 4.5rem;
  width: 14.375rem;
  border-top: 0.0625rem solid ${colors.neutral60};
`;

export const ApplyButton = styled.button`
  margin-top: 1rem;
  border: none;
  background-color: ${colors.primary80Daintree};
  color: ${colors.neutral00white};
  :disabled {
    background-color: ${colors.neutral20};
    color: ${colors.neutral40};
  }
  height: 2.5rem;
  width: 10rem;
  border-radius: 0.5rem;
`;
