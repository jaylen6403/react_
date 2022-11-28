import styled from 'styled-components';

import type { ChipProps } from './LumaChip';
import { LumaColor } from '../../LumaColors';
import { LumaFont } from '../../LumaFonts/LumaFonts';

const VARIANT_MAP = {
  primary: {
    backgroundColor: LumaColor.NEUTRAL_40,
    borderColor: LumaColor.NEUTRAL_40,
    color: LumaColor.NEUTRAL_80,
    fontWeight: 500,
  },
  secondary: {
    backgroundColor: LumaColor.NEUTRAL_20,
    borderColor: LumaColor.NEUTRAL_20,
    color: LumaColor.NEUTRAL_80,
    fontWeight: 500,
  },
  tertiary: {
    backgroundColor: LumaColor.NEUTRAL_00_WHITE,
    borderColor: LumaColor.NEUTRAL_40,
    color: LumaColor.NEUTRAL_60,
    fontWeight: 'normal',
  },
  icon: {
    backgroundColor: LumaColor.NEUTRAL_20,
    borderColor: LumaColor.NEUTRAL_40,
    color: LumaColor.NEUTRAL_80,
    fontWeight: 'normal',
  },
} as const;

const DIMENSION_MAP = {
  regular: {
    padding: '0 0.5rem',
    height: '1.5rem',
    fontSize: '0.75rem',
    borderWidth: '1px',
  },
  small: {
    padding: '0 0.3125rem',
    height: '1.375rem',
    fontSize: '0.6875rem',
    borderWidth: '1px',
  },
  icon: {
    padding: '0 0.5rem 0 0.4375rem',
    height: '1.25rem',
    fontSize: '0.6875rem',
    borderWidth: '1px',
  },
};

export const ChipContainer = styled.div<Pick<ChipProps, 'error'>>`
  display: flex;
  font-family: ${LumaFont.DEFAULT.REGULAR};
  font-weight: 500;
  gap: 0.375rem;
  flex-direction: ${(props) =>
    props.error?.position === 'side' ? 'row' : 'column'};
  align-items: ${(props) =>
    props.error?.position === 'side' ? 'center' : 'flex-start'};
`;

export const Chip = styled.div<Pick<ChipProps, 'sizeVariant' | 'error'>>`
  display: flex;
  align-items: center;
  ${(props) =>
    `
    height: ${DIMENSION_MAP[props.sizeVariant].height};
    fontSize: ${DIMENSION_MAP[props.sizeVariant].fontSize};
  `}
`;

export const LabelPart = styled.div<
  Pick<ChipProps, 'sizeVariant' | 'variant' | 'entry'>
>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-style: solid;
  cursor: default;
  gap: 0.25rem;
  ${(props) =>
    `
    border-radius: ${props.entry ? '8px 0 0 8px' : '8px'};
    border-width: ${DIMENSION_MAP[props.sizeVariant].borderWidth};
    padding: ${DIMENSION_MAP[props.sizeVariant].padding};
    border-color: ${VARIANT_MAP[props.variant].borderColor};
    background-color: ${VARIANT_MAP[props.variant].backgroundColor};
    font-size: ${DIMENSION_MAP[props.sizeVariant].fontSize};
    color: ${VARIANT_MAP[props.variant].color};
  `}
`;

export const RemoveIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: bold;
  cursor: pointer;
`;

export const EntryPart = styled.label<
  Pick<ChipProps, 'error' | 'sizeVariant' | 'variant' | 'disabled' | 'state'>
>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 3rem;
  background-color: white;
  border-radius: 0 8px 8px 0;
  border-style: solid;
  border-left: none;
  padding: 0;
  ${(props) =>
    `
    cursor: ${props.state === 'locked' ? 'default' : 'text'};
    border-width: ${DIMENSION_MAP[props.sizeVariant].borderWidth};
    border-color: ${VARIANT_MAP[props.variant].borderColor};
    color: ${
      props.error?.hasError ? LumaColor.NEGATIVE_60 : LumaColor.NEUTRAL_80
    };
    ${
      props.disabled &&
      `
        color: ${LumaColor.NEUTRAL_40};
        cursor: default;
      `
    }
  `}
`;

export const Input = styled.input<Pick<ChipProps, 'error' | 'sizeVariant'>>`
  display: flex;
  align-items: center;
  height: 100%;
  background: transparent;
  outline: 0;
  border: none;
  padding: 0;
  text-align: right;
  color: inherit;
  cursor: inherit;
  font-family: inherit;
  &:focus {
    outline: none;
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${(props) =>
    `
    font-size: ${DIMENSION_MAP[props.sizeVariant].fontSize};
  `}
`;

export const Unit = styled.label<Pick<ChipProps, 'sizeVariant'>>`
  display: flex;
  align-items: center;
  height: 100%;
  width: 1rem;
  cursor: inherit;
  ${(props) =>
    `
    font-size: ${DIMENSION_MAP[props.sizeVariant].fontSize};
  `}
`;

export const ErrorMessage = styled.div<Pick<ChipProps, 'error'>>`
  color: ${LumaColor.NEGATIVE_60};
`;

export const Icon = styled.div`
  font-size: 0.375rem;
`;
