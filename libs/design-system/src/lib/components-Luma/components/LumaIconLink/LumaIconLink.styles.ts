import styled from 'styled-components';

import type { IconLinkProps } from './LumaIconLink';
import { LumaColor } from '../../LumaColors';
import { LumaFont } from '../../LumaFonts/LumaFonts';

const VARIANT_MAP = {
  default: {
    color: LumaColor.PRIMARY_50,
    cursor: 'pointer',
  },
  disabled: {
    color: LumaColor.NEUTRAL_40,
    cursor: 'default',
  },
  hover: {
    color: LumaColor.NEUTRAL_60,
    cursor: 'pointer',
  },
} as const;

const DIMENSION_MAP = {
  medium: {
    fontSize: '0.875rem',
    iconSize: '1rem',
  },
  small: {
    fontSize: '0.75rem',
    iconSize: '0.875rem',
  },
};

export const IconLinkContainer = styled.a<Pick<IconLinkProps, 'disabled'>>`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  color: ${(props) =>
    props.disabled
      ? VARIANT_MAP['disabled'].color
      : VARIANT_MAP['default'].color};
  cursor: ${(props) =>
    props.disabled
      ? VARIANT_MAP['disabled'].cursor
      : VARIANT_MAP['default'].cursor};
  pointer-events: ${(props) => (props.disabled ? 'none' : '')};
  &:hover:not([disabled]) {
    color: ${VARIANT_MAP['disabled'].color};
  }
`;

export const Label = styled.div<Pick<IconLinkProps, 'sizeVariant'>>`
  font-family: ${LumaFont.DEFAULT.MEDIUM};
  ${(props) => `font-size: ${DIMENSION_MAP[props.sizeVariant].fontSize};`};
`;

export const IconWrapper = styled.div<Pick<IconLinkProps, 'sizeVariant'>>`
  display: flex;
  align-items: center;
  ${(props) => `font-size: ${DIMENSION_MAP[props.sizeVariant].fontSize};`};
`;
