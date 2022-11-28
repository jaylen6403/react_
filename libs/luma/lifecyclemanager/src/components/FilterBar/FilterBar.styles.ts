import {
  colors,
  LumaButton,
  LumaColor,
  LumaIcon,
  LumaSingleDropDown,
  TextEntryField,
} from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const ActionBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5rem;
  background-color: ${colors.neutral00white};
  border: 0.0625rem solid ${colors.neutral30};
  border-radius: 0.5rem;
  font-family: IBM Plex Sans;
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
`;

export const LeftActions = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RightActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const FilterButton = styled(LumaButton)`
  width: 6.5rem;
  font-family: IBM Plex Sans;
  font-size: 0.75rem;
  font-weight: 500;
`;

export const CollapseIcon = styled(LumaIcon)<{ isCollapsed: boolean }>`
  width: 1.125rem;
  height: 1.25rem;
  margin-left: 1rem;
  transform: ${(props) =>
    props.isCollapsed ? 'rotate(-180deg)' : 'rotate(0deg)'};
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
`;

export const DateDropDown = styled(LumaSingleDropDown)`
  width: 8.25rem;
  margin-right: 0.75rem;
  cursor: pointer;
  input {
    font-family: IBM Plex Sans;
    font-size: 0.75rem;
    font-weight: 500;
  }
  span {
    font-family: IBM Plex Sans;
    font-size: 0.75rem;
  }
  ul {
    max-height: none;
  }
  & ${TextEntryField} {
    z-index: 0;
  }
`;

export const BottomRow = styled.div<{ isCollapsed: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  height: ${(props) => (props.isCollapsed ? '0rem' : '4em')};
  border-top: ${(props) => (props.isCollapsed ? '0rem' : '0.0625rem')} solid
    ${LumaColor.NEUTRAL_40};
  -webkit-transition: height 0.4s ease-in-out;
  transition: height 0.4s ease-in-out;
`;

export const PillRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  margin-left: 1rem;
`;

export const ClearContainer = styled.div`
  height: 100%;
  width: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ClearButton = styled.button`
  height: 1.5rem;
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${LumaColor.NEUTRAL_00_WHITE};
  color: ${LumaColor.PRIMARY_50};
  border: none;
  cursor: pointer;
`;

export const CloseIcon = styled(LumaIcon)`
  width: 0.4375rem;
  height: 0.6875rem;
  margin-right: 0.25rem;
  height: 100%;
`;
