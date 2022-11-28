import { LumaColor, LumaIcon } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContentHeader = styled.text`
  height: 1.875rem;
  font-size: 1rem;
  font-weight: 500;
  width: max-content;
  border-bottom: 0.25rem solid ${LumaColor.PRIMARY_50};
  margin-bottom: 1.5rem;
`;
export const AccountRows = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const DataRow = styled.div<{ dropdownOpen?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.6875rem 0;
  border-bottom: 0.0625rem solid
    ${(props) =>
      props.dropdownOpen
        ? `${LumaColor.NEUTRAL_80}`
        : `${LumaColor.NEUTRAL_40}`};
  height: 2.5rem;
`;

export const DataHeader = styled.div<{ accountDropdownRow?: boolean }>`
  display: flex;
  align-items: center;
  ${(props) => (props.accountDropdownRow ? 'margin-left: 17.25rem;' : null)}
`;

export const DropdownArrow = styled(LumaIcon)<{ isOpen: boolean }>`
  transform: ${(props) => (props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
  margin-right: 0.75rem;
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
`;

export const CheckBox = styled.input`
  border: 0.0626rem solid ${LumaColor.NEUTRAL_40};
  margin-right: 0.5rem;
`;

export const DropdownContainer = styled.div<{
  isOpen: boolean;
  numberOfRows: number;
}>`
  height: ${(props) => (props.isOpen ? `${props.numberOfRows * 2.5}rem` : 0)};
  overflow: hidden;
  border-bottom: 0.0625rem solid
    ${(props) => (props.isOpen ? `${LumaColor.NEUTRAL_80}` : 'none')};
  -webkit-transition: height 0.5s ease-in-out;
  transition: height 0.5s ease-in-out;
`;
