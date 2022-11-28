import styled, { css } from 'styled-components';
import { LumaColor } from '../../LumaColors/Lumacolors';
import type { TextEntryProps } from './LumaTextEntry';
import { LumaFont } from '../../LumaFonts/LumaFonts';
import { breakpoints } from '../../../breakpoints';

export const SIZE_MAP = {
  small: {
    height: 2,
    input: {
      padding: '.5rem 0.75rem',
      paddingFree: '0.5rem 0.75rem',
    },
    label: {
      transform: 'translateY(-0.5rem)',
      opacity: '0',
      fontSize: '0.5rem',
    },
  },
  medium: {
    height: 2.5,
    input: {
      padding: '1.25rem 0.8125rem .5rem',
      paddingFree: '0.75rem 0.75rem',
    },
    label: {
      transform: 'translateY(-0.875rem)',
      opacity: '1',
      fontSize: '0.6875rem',
    },
  },
  large: {
    height: 3,
    input: {
      padding: '1.375rem 0.8125rem .5rem',
      paddingFree: '1rem 0.75rem',
    },
    label: {
      transform: 'translateY(-1rem)',
      opacity: '1',
      fontSize: '0.625rem',
    },
  },
  x_small: {
    height: '1.75rem',
    padding: '0.375rem 3.813rem 0.438rem',
    fontSize: '0.75rem',
    width: '10rem',
  },
  icon_only: {
    height: '2rem',
    padding: '0.5625rem 0.625rem',
    fontSize: '0.75rem',
    width: '2rem',
  },
};

export const TextEntryContainer = styled.span<
  Pick<TextEntryProps, 'fullWidth' | 'disabled'>
>`
  display: inline-flex;
  flex-direction: column;
  width: 13.75rem;

  @media ${breakpoints.phablet} {
    width: auto;
  }

  ${(props) =>
    props.fullWidth
      ? `
    display: flex;
    max-width: 100%;
`
      : ''}
  ${(props) =>
    props.disabled
      ? `
      input {
        color: ${LumaColor.NEUTRAL_60};
      }
      .TextEntryMockLabelContainer {
        label {
          color: ${LumaColor.NEUTRAL_40};
        }
      }
`
      : ''}
`;

export const IconInsideTextEntry = styled.label<
  Pick<TextEntryProps, 'disabled'>
>`
  display: flex;
  height: 100%;
  font-size: 0.875rem;
  padding-right: 0.5rem;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.disabled ? LumaColor.NEUTRAL_40 : LumaColor.NEUTRAL_80};
  pointer-events: ${(props) => (props.disabled ? 'none' : '')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

export const TextEntryField = styled.span<
  Pick<TextEntryProps, 'sizeVariant' | 'disabled' | 'error'>
>`
  height: ${(props) => SIZE_MAP[props.sizeVariant || 'medium'].height + 'rem'};
  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.disabled ? LumaColor.NEUTRAL_20 : LumaColor.NEUTRAL_40)};
  display: inline-flex;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  :focus-within {
    border: 1px solid ${LumaColor.NEUTRAL_80};
  }
  ${(props) =>
    props.error &&
    css`
      border-color: ${LumaColor.NEGATIVE_60};
    `}
`;

export const Input = styled.input<
  Pick<
    TextEntryProps,
    'sizeVariant' | 'variant' | 'disabled' | 'readOnly' | 'useByDropdown'
  >
>`
  display: flex;
  padding: ${(props) =>
    props.variant === 'free'
      ? SIZE_MAP[props.sizeVariant || 'medium'].input.paddingFree
      : SIZE_MAP[props.sizeVariant || 'medium'].input.padding};
  border: none;
  background-color: transparent;
  z-index: 1;
  width: 100%;
  color: ${LumaColor.NEUTRAL_80};
  font-size: 0.75rem;
  font-family: ${LumaFont.DEFAULT.MEDIUM};
  height: 100%;
  cursor: text;

  ${(props) =>
    `
    ${(props.readOnly || props.disabled) && `cursor: default;`};
    ${
      props.readOnly &&
      props.useByDropdown &&
      !props.disabled &&
      `cursor: pointer;`
    };
  `};

  &::placeholder {
    color: ${(props) =>
      props.disabled ? LumaColor.NEUTRAL_40 : LumaColor.NEUTRAL_60};
    font-family: ${LumaFont.DEFAULT.REGULAR};
  }

  :focus,
  :focus-visible {
    outline: none;

    + .TextEntryMockContainer--label {
      label {
        transform: ${(props) =>
          SIZE_MAP[props.sizeVariant || 'medium'].label.transform};
        opacity: ${(props) =>
          SIZE_MAP[props.sizeVariant || 'medium'].label.opacity};
        font-size: ${(props) =>
          SIZE_MAP[props.sizeVariant || 'medium'].label.fontSize};
      }
    }
  }
`;
export const TextEntryMockContainer = styled.span`
  display: flex;
  position: absolute;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
`;
export const TextEntryMockLabelContainer = styled.span<
  Pick<TextEntryProps, 'sizeVariant'>
>`
  flex: 0 0 auto;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;

  &.TextEntryMockLabel--focused {
    label {
      transform: ${(props) =>
        SIZE_MAP[props.sizeVariant || 'medium'].label.transform};
      opacity: ${(props) =>
        SIZE_MAP[props.sizeVariant || 'medium'].label.opacity};
      font-size: ${(props) =>
        SIZE_MAP[props.sizeVariant || 'medium'].label.fontSize};
    }
  }
`;

export const TextEntryMockLabel = styled.label`
  display: flex;
  position: relative;
  max-width: 100%;
  justify-content: flex-start;
  color: ${LumaColor.NEUTRAL_60};
  left: 0.8125rem;
  top: 50%;
  pointer-events: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 300ms ease-in-out;
  font-family: ${LumaFont.DEFAULT.REGULAR};
  opacity: 1;
  transform: translateY(-50%);
  font-size: 0.75rem;
`;

export const TextEntryHelper = styled.span`
  display: block;
  position: relative;
  max-width: 100%;
  color: ${LumaColor.NEUTRAL_60};
  left: 1rem;
  pointer-events: none;
  font-size: 0.75rem;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  font-family: ${LumaFont.DEFAULT.MEDIUM};

  &.TextEntryHelper--error {
    color: ${LumaColor.NEGATIVE_60};
  }
`;
