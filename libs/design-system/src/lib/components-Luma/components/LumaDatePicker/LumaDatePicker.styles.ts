import styled from 'styled-components';
import { LumaColor } from '../../LumaColors';
import { LumaFont } from '../../LumaFonts';
import { SIZE_MAP } from '../LumaTextEntry/LumaTextEntry.styles';

export const Root = styled.div<{
  size: 'small' | 'medium' | 'large';
  value: string | undefined;
  fullWidth: boolean | undefined;
  disabled: boolean | undefined;
}>`
  width: 100%;
  position: relative;

  ${(props) => (props.fullWidth ? `width: 100%; max-width: 100%;` : '')}

  .TextEntry--container {
    width: 100%;
    max-width: 100%;
  }
  input {
    color: ${LumaColor.NEUTRAL_80};
    ${(props) => (props.disabled ? `color: ${LumaColor.NEUTRAL_60};` : '')}
    &::-webkit-datetime-edit-year-field:not([aria-valuenow]),
    &::-webkit-datetime-edit-month-field:not([aria-valuenow]),
    &::-webkit-datetime-edit-day-field:not([aria-valuenow]),
    &::-webkit-datetime-edit {
      color: transparent;
      user-select: none;
      font-family: ${LumaFont.DEFAULT.REGULAR};
      font-weight: 500;
    }
    &::before {
      width: 100%;
      content: '';
    }
    ${(props) =>
      props.value
        ? ` &::before {
            width: 0%;
            content: '';
          }`
        : ''}
  }
  .text-entry--outlined {
    box-sizing: border-box;
    outline: 0;
    position: relative;
    width: 100%;
  }
`;
export const RootDropdown = styled.div<{
  size: 'small' | 'medium' | 'large';
}>`
  display: flex;
  flex-direction: column;
  width: 18.5rem;
  border-radius: 8px;
  box-shadow: 0 0 4px 0 rgba(47, 51, 54, 0.32);
  border: 1px solid ${LumaColor.NEUTRAL_80};
  top: ${(props) =>
    `calc(${props.size ? Number(SIZE_MAP[props.size].height + 0.5) : 3}rem)`};
  height: fit-content;
  position: absolute;
  z-index: 2;
  background-color: ${LumaColor.NEUTRAL_00_WHITE};
  overflow: hidden;
`;

export const DatePickerHeaderButton = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  outline: none;
  padding: 0 0.3125rem;
  cursor: pointer;
  line-height: initial;
`;

export const DatePickerHeader = styled.div`
  position: relative;
  padding: 1rem 0.5625rem 1.5rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
`;
export const DatePickerHeaderMonth = styled.span`
  font-family: ${LumaFont.DEFAULT.BOLD};
  font-size: 0.875rem;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  vertical-align: middle;
  min-width: 4.5rem;
  text-align: center;
`;

export const DatePickerDayHeader = styled.div`
  position: relative;
  padding-right: 1rem;
  padding-left: 1rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 0.1875rem;
  border-bottom: 1px solid ${LumaColor.NEUTRAL_20};
`;

export const DatePickerDayHeaderitem = styled.div`
  font-family: ${LumaFont.DEFAULT.REGULAR};
  font-size: 0.6875rem;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${LumaColor.NEUTRAL_60};
  width: 1.5rem;
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  flex-wrap: wrap;
  padding-top: 1.1875rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-bottom: 1.6875rem;
`;

export const DatePickerDayBody = styled.div`
  flex-basis: 13%;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;
export const DatePickerDayBodyItem = styled.div`
  position: relative;
  height: 0;
  margin-bottom: 1.25rem;
  align-items: center;
  justify-content: space-between;
  gap: 0.6875rem;
`;
export const DatePickerDate = styled.div<{
  isActive?: boolean;
  isToday?: boolean;
  isSelected?: boolean;
}>`
  padding-top: 0.1875rem;
  height: 1.5rem;
  border-radius: 8px;
  font-size: 0.6875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${LumaColor.PRIMARY_80_DAINTREE};
  font-family: ${LumaFont.DEFAULT.REGULAR};
  border: solid 1px transparent;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  background-color: transparent;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  &:hover {
    border: solid 1px ${LumaColor.NEUTRAL_60};
    background-color: ${LumaColor.NEUTRAL_00_WHITE};
  }
  ${(props) =>
    props.isToday
      ? `border: solid 1px ${LumaColor.NEUTRAL_20}; background-color: ${LumaColor.NEUTRAL_20};`
      : ''}
  ${(props) =>
    props.isSelected
      ? `border: solid 1px ${LumaColor.NEUTRAL_40}; background-color: ${LumaColor.NEUTRAL_40};`
      : ''}
  ${(props) => (props.isActive ? `color: ${LumaColor.NEUTRAL_60};` : '')}
`;
