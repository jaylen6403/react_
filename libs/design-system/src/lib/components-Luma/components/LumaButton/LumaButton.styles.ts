import styled from 'styled-components';

import type { LumaButtonProps } from './LumaButton';
import { LumaColor } from '../../LumaColors';
import { LumaFont } from '../../LumaFonts/LumaFonts';

const VARIANT_MAP = {
  primary: {
    backgroundColor: LumaColor.PRIMARY_80_DAINTREE,
    borderColor: LumaColor.PRIMARY_80_DAINTREE,
    color: LumaColor.NEUTRAL_00_WHITE,
    hoverBackgroundColor: LumaColor.PRIMARY_60,
    hoverBorderColor: LumaColor.PRIMARY_60,
    hoverFontColor: LumaColor.NEUTRAL_00_WHITE,
    disabledBackgroundColor: LumaColor.NEUTRAL_20,
    disabledBorderColor: LumaColor.NEUTRAL_20,
    disabledFontColor: LumaColor.NEUTRAL_40,
    pressBackgroundColor: LumaColor.PRIMARY_90,
    pressFontColor: LumaColor.NEUTRAL_00_WHITE,
    pressBorderColor: LumaColor.PRIMARY_90,
    splitBorderWidth: '0 0 0 1px',
    fontFamily: LumaFont.DEFAULT.MEDIUM,
  },
  secondary: {
    backgroundColor: LumaColor.NEUTRAL_00_WHITE,
    borderColor: LumaColor.NEUTRAL_40,
    color: LumaColor.PRIMARY_50,
    hoverBackgroundColor: LumaColor.PRIMARY_20,
    hoverBorderColor: LumaColor.NEUTRAL_40,
    hoverFontColor: LumaColor.PRIMARY_50,
    disabledBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    disabledBorderColor: LumaColor.NEUTRAL_30,
    disabledFontColor: LumaColor.NEUTRAL_40,
    pressBackgroundColor: LumaColor.NEUTRAL_30,
    pressFontColor: LumaColor.PRIMARY_50,
    pressBorderColor: LumaColor.NEUTRAL_40,
    splitBorderWidth: '1px 1px 1px 0',
    fontFamily: LumaFont.DEFAULT.MEDIUM,
  },
  tertiary: {
    backgroundColor: LumaColor.NEUTRAL_70,
    borderColor: LumaColor.NEUTRAL_70,
    color: LumaColor.NEUTRAL_00_WHITE,
    hoverBackgroundColor: LumaColor.NEUTRAL_50,
    hoverBorderColor: LumaColor.NEUTRAL_50,
    hoverFontColor: LumaColor.NEUTRAL_00_WHITE,
    disabledBackgroundColor: LumaColor.NEUTRAL_20,
    disabledBorderColor: LumaColor.NEUTRAL_20,
    disabledFontColor: LumaColor.NEUTRAL_40,
    pressBackgroundColor: LumaColor.NEUTRAL_80,
    pressFontColor: LumaColor.NEUTRAL_00_WHITE,
    pressBorderColor: LumaColor.NEUTRAL_80,
    splitBorderWidth: '0 0 0 1px',
    fontFamily: LumaFont.DEFAULT.MEDIUM,
  },
  tertiary_positive: {
    backgroundColor: LumaColor.POSITIVE_60,
    borderColor: LumaColor.POSITIVE_60,
    color: LumaColor.NEUTRAL_00_WHITE,
    hoverBackgroundColor: LumaColor.POSITIVE_40,
    hoverBorderColor: LumaColor.POSITIVE_40,
    hoverFontColor: LumaColor.NEUTRAL_00_WHITE,
    disabledBackgroundColor: LumaColor.NEUTRAL_20,
    disabledBorderColor: LumaColor.NEUTRAL_20,
    disabledFontColor: LumaColor.NEUTRAL_40,
    pressBackgroundColor: LumaColor.POSITIVE_70,
    pressFontColor: LumaColor.NEUTRAL_00_WHITE,
    pressBorderColor: LumaColor.POSITIVE_70,
    splitBorderWidth: '0 0 0 1px',
    fontFamily: LumaFont.DEFAULT.MEDIUM,
  },
  tertiary_negative: {
    backgroundColor: LumaColor.NEGATIVE_60,
    borderColor: LumaColor.NEGATIVE_60,
    color: LumaColor.NEUTRAL_00_WHITE,
    hoverBackgroundColor: LumaColor.NEGATIVE_40,
    hoverBorderColor: LumaColor.NEGATIVE_40,
    hoverFontColor: LumaColor.NEUTRAL_00_WHITE,
    disabledBackgroundColor: LumaColor.NEUTRAL_20,
    disabledBorderColor: LumaColor.NEUTRAL_20,
    disabledFontColor: LumaColor.NEUTRAL_40,
    pressBackgroundColor: LumaColor.NEGATIVE_70,
    pressFontColor: LumaColor.NEUTRAL_00_WHITE,
    pressBorderColor: LumaColor.NEGATIVE_70,
    splitBorderWidth: '0 0 0 1px',
    fontFamily: LumaFont.DEFAULT.MEDIUM,
  },
  toggle_active: {
    backgroundColor: LumaColor.NEUTRAL_40,
    borderColor: LumaColor.NEUTRAL_40,
    color: LumaColor.NEUTRAL_80,
    hoverBackgroundColor: LumaColor.NEUTRAL_40,
    hoverBorderColor: LumaColor.NEUTRAL_40,
    hoverFontColor: LumaColor.NEUTRAL_80,
    disabledBackgroundColor: LumaColor.NEUTRAL_40,
    disabledBorderColor: LumaColor.NEUTRAL_40,
    disabledFontColor: LumaColor.NEUTRAL_80,
    pressBackgroundColor: LumaColor.NEUTRAL_40,
    pressFontColor: LumaColor.NEUTRAL_80,
    pressBorderColor: LumaColor.NEUTRAL_40,
    splitBorderWidth: '0 0 0 1px',
    fontFamily: LumaFont.DEFAULT.MEDIUM,
  },
  toggle_inactive: {
    backgroundColor: LumaColor.NEUTRAL_00_WHITE,
    borderColor: LumaColor.NEUTRAL_40,
    color: LumaColor.NEUTRAL_60,
    hoverBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    hoverBorderColor: LumaColor.NEUTRAL_80,
    hoverFontColor: LumaColor.NEUTRAL_80,
    disabledBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    disabledBorderColor: LumaColor.NEUTRAL_40,
    disabledFontColor: LumaColor.NEUTRAL_40,
    pressBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    pressFontColor: LumaColor.NEUTRAL_80,
    pressBorderColor: LumaColor.NEUTRAL_80,
    splitBorderWidth: '1px 1px 1px 0',
    fontFamily: LumaFont.DEFAULT.MEDIUM,
  },
  tabs_active: {
    backgroundColor: LumaColor.NEUTRAL_40,
    borderColor: LumaColor.NEUTRAL_40,
    color: LumaColor.NEUTRAL_80,
    hoverBackgroundColor: LumaColor.NEUTRAL_40,
    hoverBorderColor: LumaColor.NEUTRAL_40,
    hoverFontColor: LumaColor.NEUTRAL_80,
    disabledBackgroundColor: LumaColor.NEUTRAL_40,
    disabledBorderColor: LumaColor.NEUTRAL_40,
    disabledFontColor: LumaColor.NEUTRAL_80,
    pressBackgroundColor: LumaColor.NEUTRAL_40,
    pressFontColor: LumaColor.NEUTRAL_80,
    pressBorderColor: LumaColor.NEUTRAL_40,
    splitBorderWidth: '0 0 0 1px',
    fontFamily: LumaFont.DEFAULT.BOLD,
  },
  tabs_inactive: {
    backgroundColor: LumaColor.NEUTRAL_00_WHITE,
    borderColor: LumaColor.NEUTRAL_80,
    color: LumaColor.NEUTRAL_80,
    hoverBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    hoverBorderColor: LumaColor.NEUTRAL_40,
    hoverFontColor: LumaColor.NEUTRAL_60,
    disabledBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    disabledBorderColor: LumaColor.NEUTRAL_40,
    disabledFontColor: LumaColor.NEUTRAL_40,
    pressBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    pressFontColor: LumaColor.NEUTRAL_60,
    pressBorderColor: LumaColor.NEUTRAL_40,
    splitBorderWidth: '1px 1px 1px 0',
    fontFamily: LumaFont.DEFAULT.BOLD,
  },
  document_error: {
    backgroundColor: LumaColor.NEUTRAL_00_WHITE,
    borderColor: LumaColor.NEGATIVE_60,
    color: LumaColor.NEGATIVE_60,
    hoverBackgroundColor: LumaColor.NEGATIVE_40,
    hoverBorderColor: LumaColor.NEGATIVE_40,
    hoverFontColor: LumaColor.NEUTRAL_00_WHITE,
    disabledBackgroundColor: LumaColor.NEUTRAL_20,
    disabledBorderColor: LumaColor.NEUTRAL_20,
    disabledFontColor: LumaColor.NEUTRAL_40,
    pressBackgroundColor: LumaColor.NEGATIVE_70,
    pressFontColor: LumaColor.NEUTRAL_00_WHITE,
    pressBorderColor: LumaColor.NEGATIVE_70,
    splitBorderWidth: '0 0 0 1px',
    fontFamily: LumaFont.DEFAULT.MEDIUM,
  },
  remove: {
    backgroundColor: LumaColor.NEUTRAL_00_WHITE,
    borderColor: LumaColor.NEUTRAL_30,
    color: LumaColor.NEUTRAL_40,
    hoverBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    hoverBorderColor: LumaColor.NEUTRAL_30,
    hoverFontColor: LumaColor.NEUTRAL_40,
    disabledBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    disabledBorderColor: LumaColor.NEUTRAL_30,
    disabledFontColor: LumaColor.NEUTRAL_40,
    pressBackgroundColor: LumaColor.NEUTRAL_00_WHITE,
    pressFontColor: LumaColor.NEUTRAL_40,
    pressBorderColor: LumaColor.NEUTRAL_30,
    splitBorderWidth: '1px 1px 1px 0',
    fontFamily: LumaFont.DEFAULT.MEDIUM,
  },
} as const;

const DIMENSION_MAP = {
  large: {
    height: '3rem',
    padding: '0.9375rem 3.625rem',
    fontSize: '0.875rem',
    width: '10rem',
  },
  medium: {
    height: '2.5rem',
    padding: '0.6875rem 3.625rem',
    fontSize: '0.875rem',
    width: '10rem',
  },
  small: {
    height: '2rem',
    padding: '0.5rem 3.8125rem 0.5625rem',
    fontSize: '0.75rem',
    width: '10rem',
  },
  x_small: {
    height: '1.75rem',
    padding: '0.375rem 3.8125rem 0.4375rem',
    fontSize: '0.75rem',
    width: '10rem',
  },
  icon_only: {
    height: '2rem',
    padding: '0.5625rem 0.625rem 0.5625rem 0.6875rem',
    fontSize: '0.875rem',
    width: '2rem',
  },
  toggle_xx_small: {
    height: '1.5rem',
    padding: '0.25rem 0.9375rem 0.3125rem',
    fontSize: '0.75rem',
    width: '4.25rem',
  },
  toggle_small: {
    height: '2rem',
    padding: '0.4375rem 1.125rem',
    fontSize: '0.875rem',
    width: '5rem',
  },
  toggle_medium: {
    height: '2.5rem',
    padding: '0.625rem 0.9375rem',
    fontSize: '1rem',
    width: '5rem',
  },
  tab: {
    height: '2.5rem',
    padding: '0.625rem 1rem 0.625rem 1rem',
    fontSize: '1rem',
    width: '6.5625rem',
  },
  document_upload: {
    height: '3rem',
    padding: '0.9375rem 3.625rem',
    fontSize: '0.875rem',
    width: '18rem',
  },
  document_upload_remove: {
    height: '3rem',
    padding: '0.9375rem 1rem 0.9375rem 3.625rem',
    fontSize: '0.875rem',
    width: '18rem',
  },
};

export const Root = styled.div<
  Pick<LumaButtonProps, 'size' | 'dropdown' | 'fullWidth'>
>`
  display: flex;
  flex-direction: row;
  position: relative;
  ${(props) =>
    `
    height: ${DIMENSION_MAP[props.size].height};
    width: ${props.fullWidth ? '100%' : DIMENSION_MAP[props.size].width};
    z-index: ${props.dropdown?.isOpen ? '3' : 'auto'};
  `}
`;

export const Button = styled.button<
  Pick<
    LumaButtonProps,
    'icon' | 'variant' | 'size' | 'split' | 'xmark' | 'fullWidth'
  >
>`
  display: flex;
  flex-direction: ${(props) => (props.icon?.isOnRight ? 'row-reverse' : 'row')};
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 8px;
  border-style: ${(props) =>
    props.size === 'document_upload' || props.size === 'document_upload_remove'
      ? 'dashed'
      : 'solid'};

  border-width: 0.0625rem;
  cursor: pointer;
  gap: 0.3125rem;
  &:disabled,
  &[disabled] {
    cursor: default;
  }
  z-index: ${(props) => (props.split ? 1 : 'auto')};
  ${(props) =>
    `
    font-size: ${DIMENSION_MAP[props.size].fontSize};
    font-family: ${VARIANT_MAP[props.variant].fontFamily};
    border-bottom-right-radius: ${props.split ? '0' : ''};
    border-top-right-radius: ${props.split ? '0' : ''};
    width: ${props.split ? '8rem' : '100%'};
    padding: ${props.fullWidth ? '' : DIMENSION_MAP[props.size].padding};
    background-color: ${VARIANT_MAP[props.variant].backgroundColor};
    border-color: ${VARIANT_MAP[props.variant].borderColor};
    color: ${VARIANT_MAP[props.variant].color};
    &:disabled {
      background-color: ${VARIANT_MAP[props.variant].disabledBackgroundColor};
      border-color: ${VARIANT_MAP[props.variant].disabledBorderColor};
      color: ${VARIANT_MAP[props.variant].disabledFontColor};
    };
    &:hover:not([disabled]) {
      background-color: ${VARIANT_MAP[props.variant].hoverBackgroundColor};
      border-color: ${VARIANT_MAP[props.variant].hoverBorderColor};
      color: ${VARIANT_MAP[props.variant].hoverFontColor};
    };
    &:active:not([disabled]) {
      background-color: ${VARIANT_MAP[props.variant].pressBackgroundColor};
      color: ${VARIANT_MAP[props.variant].pressFontColor};
      border-color: ${VARIANT_MAP[props.variant].pressBorderColor};
    };
  `}
`;

export const Split = styled.button<Pick<LumaButtonProps, 'variant' | 'split'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  cursor: pointer;
  border-style: solid;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  &:disabled {
    cursor: default;
  }
  z-index: 1;
  ${(props) =>
    `
    background-color: ${VARIANT_MAP[props.variant].backgroundColor};
    border-color: ${VARIANT_MAP[props.variant].borderColor};
    border-width: ${VARIANT_MAP[props.variant].splitBorderWidth};
    border-left-color: ${LumaColor.NEUTRAL_00_WHITE};
    color: ${VARIANT_MAP[props.variant].color};
    &:disabled {
      background-color: ${VARIANT_MAP[props.variant].disabledBackgroundColor};
      border-color: ${VARIANT_MAP[props.variant].disabledBorderColor};
      color: ${VARIANT_MAP[props.variant].disabledFontColor};
      border-left-color: ${LumaColor.NEUTRAL_00_WHITE};
    };
    &:hover:not([disabled]) {
      background-color: ${VARIANT_MAP[props.variant].hoverBackgroundColor};
      border-color: ${VARIANT_MAP[props.variant].hoverBorderColor};
      border-left-color: ${LumaColor.NEUTRAL_00_WHITE};
    };
    &:active:not([disabled]) {
      background-color: ${VARIANT_MAP[props.variant].pressBackgroundColor};
      color: ${VARIANT_MAP[props.variant].pressFontColor};
      border-color: ${VARIANT_MAP[props.variant].pressBorderColor};
      border-left-color: ${LumaColor.NEUTRAL_00_WHITE};
    };
  `}
`;

export const Xmark = styled.div`
  position: relative;
  float: right;
  margin: 0.063rem 0 0.063rem 2.438rem;  
}
`;
