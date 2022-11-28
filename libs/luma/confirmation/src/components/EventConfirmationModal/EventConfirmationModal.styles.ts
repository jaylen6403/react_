import styled from 'styled-components';
import { colors, Icon, LumaColor } from '@luma-fe-workspace/design-system';

export const ModalContainer = styled.div<{ cashOnly?: boolean }>`
  position: absolute;
  right: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 36rem;
  height: ${(props) => (props.cashOnly ? '25.063rem' : '31.3125rem')};
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 ${LumaColor.DRAWER_BACKGROUND};
  border: solid 1px ${colors.neutral40};
  z-index: 1;
`;

export const ModalSubTitle = styled.p`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${colors.neutral80};
  margin: 0.5rem 1.5rem 1.5rem 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TopElementsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.125rem 1.5rem 0 1.5rem;
`;
export const CloseButton = styled.button`
  all: unset;
  cursor: pointer;
`;

export const CloseIcon = styled(Icon)`
  width: 1.125rem;
  height: 1.813rem;
  color: ${colors.neutral80};
`;

export const ToggleButtons = styled.button<{ isSelected: boolean }>`
  all: unset;
  color: ${(props) => (props.isSelected ? colors.neutral80 : colors.neutral60)};
  font-size: 1rem;
  font-weight: 500;
  height: 1.875rem;
  margin: 0 1.5rem 0 0;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.isSelected ? `0.188rem solid ${colors.primary50}` : null};
`;

export const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin: 0 1.5rem 1.5rem 1.5rem;
`;
