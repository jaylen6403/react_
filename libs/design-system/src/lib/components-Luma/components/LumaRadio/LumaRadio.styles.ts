import styled, { css } from 'styled-components';

import type { RadioProps as Props } from './LumaRadio';
import { LumaColor } from '../../LumaColors';
import { LumaFont } from '../../LumaFonts/LumaFonts';

const VARIANT_MAP = {
  default: {
    textColor: LumaColor.NEUTRAL_80,
    borderColor: LumaColor.NEUTRAL_40,
    backgroundColor: LumaColor.NEUTRAL_00_WHITE,
  },
  disabled: {
    textColor: LumaColor.NEUTRAL_40,
    backgroundColor: LumaColor.NEUTRAL_00_WHITE,
    borderColor: LumaColor.NEUTRAL_30,
  },
  hover: {
    textColor: LumaColor.NEUTRAL_60,
  },
  checkedNotDisabled: {
    backgroundColor: LumaColor.NEUTRAL_80,
    borderColor: LumaColor.NEUTRAL_40,
  },
  checkedAndDisabled: {
    borderColor: LumaColor.NEUTRAL_20,
    backgroundColor: LumaColor.NEUTRAL_40,
  },
} as const;

export const RadioContainer = styled.label<Pick<Props, 'checked' | 'disabled'>>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-family: ${LumaFont.DEFAULT.REGULAR};
  color: ${VARIANT_MAP['default'].textColor};
  ${(props) =>
    props.disabled &&
    css`
      color: ${VARIANT_MAP['disabled'].textColor};
    `}
  &:hover:not([disabled]) {
    color: ${VARIANT_MAP['hover'].textColor};
    cursor: pointer;
  } ;
`;

export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  clip: rect(0 0 0 0);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledRadio = styled.div<Pick<Props, 'checked' | 'disabled'>>`
  width: 1rem;
  height: 1rem;
  background-color: ${VARIANT_MAP['default'].backgroundColor};
  border: 1px solid ${VARIANT_MAP['default'].borderColor};
  border-radius: 50%;
  ${(props) =>
    props.disabled &&
    css`
      background-color: ${VARIANT_MAP['disabled'].backgroundColor};
      border-color: ${VARIANT_MAP['disabled'].borderColor};
    `}
  ${(props) =>
    props.disabled &&
    props.checked &&
    css`
      background-color: ${VARIANT_MAP['checkedAndDisabled'].backgroundColor};
      border-color: ${VARIANT_MAP['checkedAndDisabled'].borderColor};
      border-width: 4px;
    `}
  ${(props) =>
    props.checked &&
    !props.disabled &&
    css`
      background-color: ${VARIANT_MAP['checkedNotDisabled'].backgroundColor};
      border-color: ${VARIANT_MAP['checkedNotDisabled'].borderColor};
      border-width: 4px;
    `}
`;
