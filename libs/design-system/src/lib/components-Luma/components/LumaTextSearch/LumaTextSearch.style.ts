import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { LumaColor } from '../../LumaColors/Lumacolors';
import { LumaFont } from '../../LumaFonts/LumaFonts';
import { SIZE_MAP as TEXT_ENTRY_SIZE_MAP } from '../LumaTextEntry/LumaTextEntry.styles';

export const SIZE_MAP = {
  small: {
    height: TEXT_ENTRY_SIZE_MAP.small.height,
  },
  medium: {
    height: TEXT_ENTRY_SIZE_MAP.medium.height,
  },
  large: {
    height: TEXT_ENTRY_SIZE_MAP.large.height,
  },
};

interface TextSearchStyleProps extends HTMLAttributes<HTMLDivElement> {
  error?: boolean;
  readOnly?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  sizeVariant: keyof typeof SIZE_MAP;
}

export const TextSearchContainer = styled.div<
  Pick<TextSearchStyleProps, 'fullWidth' | 'sizeVariant'>
>`
  position: relative;
  display: inline-flex;
  font-family: ${LumaFont.DEFAULT.REGULAR};
  flex-direction: column;
  width: 13.75rem;
  ${(props) =>
    props.fullWidth
      ? `
    display: flex;
    max-width: 100%;
`
      : ''}
`;

export const HelperText = styled.span<Pick<TextSearchStyleProps, 'error'>>`
  color: ${(props) =>
    props.error ? LumaColor.NEGATIVE_60 : LumaColor.NEUTRAL_60};
  padding-left: 0.75rem;
  font-size: 0.75rem;
  font-family: ${LumaFont.DEFAULT.MEDIUM};
`;

export const DropDownItemWrapper = styled.div<{
  variant?: 'standard' | 'underlier' | undefined;
}>`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: left;
`;

export const DropItem = styled.p<{
  variant?: 'standard' | 'underlier' | undefined;
}>`
  font-family: ${LumaFont.DEFAULT.REGULAR};
  font-size: 0.75rem;
  margin: 0;
  ${(props) =>
    props.variant === 'underlier'
      ? `&:first-child {
    color: ${LumaColor.NEUTRAL_50};
  }`
      : ''}
  + p {
    margin-left: 0.5rem;
  }
`;

export const SearchIcon = styled.div<Pick<TextSearchStyleProps, 'disabled'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  padding-left: 0.75rem;
  padding-right: 0.5rem;
  color: ${(props) =>
    props.disabled ? LumaColor.NEUTRAL_40 : LumaColor.NEUTRAL_60};
`;

export const HiddenInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 0.625rem 0;
  background-color: transparent;
  font-size: 0.75rem;
  &::placeholder {
    color: ${LumaColor.NEUTRAL_60};
    font-family: ${LumaFont.DEFAULT.LIGHT};
  }

  &:focus {
    &::placeholder {
      font-family: ${LumaFont.DEFAULT.MEDIUM};
      color: ${LumaColor.NEUTRAL_80};
    }
    ${SearchIcon} {
      color: ${LumaColor.NEUTRAL_80};
    }
  }

  &:disabled {
    &::placeholder {
      color: ${LumaColor.NEUTRAL_40};
    }
  }

  &:read-only {
    cursor: default;
  }
`;

export const InputContainer = styled.div<
  Pick<TextSearchStyleProps, 'disabled' | 'error' | 'sizeVariant'>
>`
  height: ${(props) => SIZE_MAP[props.sizeVariant || 'medium'].height + 'rem'};
  display: flex;
  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.error ? LumaColor.NEGATIVE_60 : LumaColor.NEUTRAL_40)};
  background-color: transparent;
  z-index: 1;
  width: 100%;
  color: ${LumaColor.NEUTRAL_80};
  font-size: 0.5rem;
  &:focus-within {
    border: 1px solid ${LumaColor.NEUTRAL_80};
    ${SearchIcon} {
      color: ${LumaColor.NEUTRAL_90};
    }
  }

  ${(props) =>
    props.disabled &&
    css`
      border-color: ${LumaColor.NEUTRAL_20};
    `}
`;

export const ClearIcon = styled.button`
  background-color: transparent;
  border: none;
  pointer-events: initial;
  cursor: pointer;
  color: ${LumaColor.NEUTRAL_80};
  margin-right: 0.75rem;
  font-size: 0.75rem;
`;
