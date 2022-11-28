import styled, { css } from 'styled-components';

import type { CheckboxProps } from './LumaCheckbox';
import { LumaColor } from '../../LumaColors';
import { LumaFont } from '../../LumaFonts/LumaFonts';

const VARIANT_MAP = {
  default: {
    textColor: LumaColor.NEUTRAL_80,
    cursor: 'pointer',
    borderColor: LumaColor.NEUTRAL_40,
    backgroundColor: LumaColor.NEUTRAL_00_WHITE,
  },
  disabled: {
    textColor: LumaColor.NEUTRAL_40,
    cursor: 'default',
    borderColor: LumaColor.NEUTRAL_30,
  },
  hover: {
    textColor: LumaColor.NEUTRAL_60,
  },
  checkedNotDisabled: {
    backgroundColor: LumaColor.NEUTRAL_40,
  },
  checkedAndDisabled: {
    borderColor: LumaColor.NEUTRAL_20,
    backgroundColor: LumaColor.NEUTRAL_20,
    textColor: LumaColor.NEUTRAL_40,
  },
} as const;

export const CheckboxContainer = styled.label<
  Pick<CheckboxProps, 'checked' | 'disabled'>
>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-family: ${LumaFont.DEFAULT.REGULAR};
  cursor: ${VARIANT_MAP['default'].cursor};
  color: ${VARIANT_MAP['default'].textColor};
  &:hover:not([disabled]) {
    color: ${VARIANT_MAP['hover'].textColor};
  }
  ${(props) =>
    props.disabled &&
    css`
      color: ${VARIANT_MAP['disabled'].textColor};
      cursor: ${VARIANT_MAP['disabled'].cursor};
    `}
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  clip: rect(0 0 0 0);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<
  Pick<CheckboxProps, 'checked' | 'disabled'>
>`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1rem;
  min-width: 1rem;
  height: 1rem;
  font-size: 0.75rem;
  background-color: ${VARIANT_MAP['default'].backgroundColor};
  border: 1px solid ${VARIANT_MAP['default'].borderColor};
  border-radius: 3px;
  border-color: ${(props) =>
    props.disabled
      ? VARIANT_MAP['disabled'].borderColor
      : VARIANT_MAP['default'].borderColor};
  color: ${VARIANT_MAP['default'].textColor};
  ${(props) =>
    `
    ${
      props.checked &&
      `background-color: ${VARIANT_MAP['checkedNotDisabled'].backgroundColor};`
    }
    ${
      props.disabled &&
      props.checked &&
      `
      border-color: ${VARIANT_MAP['checkedAndDisabled'].borderColor};
      background-color: ${VARIANT_MAP['checkedAndDisabled'].backgroundColor};
      color: ${VARIANT_MAP['checkedAndDisabled'].textColor};`
    }
  `}
`;
