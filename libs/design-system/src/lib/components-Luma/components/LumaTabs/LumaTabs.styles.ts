import styled from 'styled-components';

import type { TabsProps } from './LumaTabs';
import { LumaColor } from '../../LumaColors';
import { LumaFont } from '../../LumaFonts/LumaFonts';

const VARIANT_MAP = {
  active: {
    color: LumaColor.NEUTRAL_80,
  },
  disabled: {
    color: LumaColor.NEUTRAL_40,
  },
  unselected: {
    color: LumaColor.NEUTRAL_60,
    hoverColor: LumaColor.NEUTRAL_80,
  },
} as const;

const DIMENSIONS_MAP = {
  buttons: {
    gap: '0.75rem',
    fontFamily: LumaFont.DEFAULT.BOLD,
  },
  links: {
    gap: '1.5rem',
    fontFamily: LumaFont.DEFAULT.MEDIUM,
  },
} as const;

interface Props extends TabsProps {
  active: boolean;
  disabled: boolean;
}

export const TabsContainer = styled.div<Pick<Props, 'variant'>>`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  font-family: ${(props) => DIMENSIONS_MAP[props.variant].fontFamily};
  gap: ${(props) => DIMENSIONS_MAP[props.variant].gap};
`;

export const Indicator = styled.div`
  width: 100%;
  height: 0.1875rem;
  background-color: ${LumaColor.PRIMARY_50};
  margin-top: 0.375rem;
`;

export const Link = styled.a<Pick<Props, 'active' | 'disabled'>>`
  cursor: pointer;
  color: ${VARIANT_MAP['unselected'].color};
  &:hover {
    color: ${VARIANT_MAP['unselected'].hoverColor};
  }
  ${(props) =>
    `
    ${props.active && `color: ${VARIANT_MAP['active'].color};`};
    ${
      props.disabled &&
      `
      pointer-events: none;
      color: ${VARIANT_MAP['disabled'].color};`
    };
  `}
`;
