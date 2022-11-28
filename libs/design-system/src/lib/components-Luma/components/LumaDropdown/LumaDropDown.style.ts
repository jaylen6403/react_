import styled, { css } from 'styled-components';
import { LumaColor } from '../../LumaColors';
import { LumaFont } from '../../LumaFonts';
import { LumaSingleDropDownProps } from './LumaDropDownBasicType';

export const Root = styled.div<
  Pick<LumaSingleDropDownProps, 'fullWidth' | 'size' | 'error'>
>`
  display: inline-flex;
  position: relative;
  ${(props) =>
    props.fullWidth
      ? `display: flex;
  width: 100%`
      : ''}
`;

export const DropDownItemWrapper = styled.div<{
  variant: 'single' | 'multi' | undefined;
}>`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  ${(props) =>
    props.variant === 'multi'
      ? `justify-content: left;
          `
      : ''}
`;

export const DropDownIcon = styled.span<{
  isSelected?: boolean;
}>`
  font-size: 0.75rem;
  color: ${LumaColor.NEUTRAL_80};
  ${(props) =>
    props.isSelected
      ? `font-weight: bold;
          `
      : ''}
`;

export const StyledCheckbox = styled.div<{
  disabled: boolean | undefined;
  isChecked: boolean;
}>`
  min-width: 1rem;
  height: 1rem;
  font-size: 0.75rem;
  background-color: ${LumaColor.NEUTRAL_00_WHITE};
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  border-color: ${LumaColor.NEUTRAL_40};
  justify-content: center;
  align-items: center;
  display: flex;
  margin-right: 0.5rem;

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${LumaColor.NEUTRAL_20};
    `}

  ${(props) =>
    props.isChecked &&
    css`
      background-color: ${LumaColor.NEUTRAL_40};
    `}

  &:active:not([disabled]),
  ${DropDownItemWrapper}:hover:not([disabled]) & {
    border-color: ${LumaColor.NEUTRAL_50};
  } ;
`;

export const DropDownText = styled.span<{
  disabled?: boolean;
  isSelected?: boolean;
}>`
  font-family: ${LumaFont.DEFAULT.REGULAR};
  font-size: 0.75rem;
  font-weight: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    color: ${LumaColor.NEUTRAL_60};
  }
  ${(props) =>
    props.isSelected
      ? `font-family: ${LumaFont.DEFAULT.BOLD};
  `
      : ''}
  ${(props) =>
    props.disabled
      ? `color: ${LumaColor.NEUTRAL_60}; cursor: not-allowed;
  `
      : ''}
`;
