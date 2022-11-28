import styled from 'styled-components';

import type { Props } from './Button';
import { colors } from '../../colors';

const VARIANT_MAP = {
  primary: {
    backgroundColor: colors.blueMedium,
    borderColor: colors.blueMedium,
    color: colors.white,
    hoverBackgroundColor: colors.blue,
    hoverBorderColor: colors.blue,
  },
  secondary: {
    backgroundColor: colors.greyFade,
    borderColor: colors.greyLightest,
    color: colors.greyMedium,
    hoverBackgroundColor: colors.greyLighter,
    hoverBorderColor: colors.greyLighter,
  },
  delete: {
    backgroundColor: colors.redDarker,
    borderColor: colors.redDarker,
    color: colors.white,
    hoverBackgroundColor: colors.redDarker,
    hoverBorderColor: colors.white,
  },
} as const;

export const Root = styled.button<Props>`
  border-radius: 0.25rem;
  border-style: solid;
  border-width: 0.0625rem;
  cursor: pointer;
  display: flex;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.6875rem;
  padding: 0.4375rem 0.75rem;

  &:active {
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    cursor: default;
    opacity: 0.7;
  }

  ${(props) =>
    `
    background-color: ${VARIANT_MAP[props.variant].backgroundColor};
    border-color: ${VARIANT_MAP[props.variant].borderColor};
    color: ${VARIANT_MAP[props.variant].color};

    &:active:not([disabled]),
    &:hover:not([disabled]) {
      background-color: ${VARIANT_MAP[props.variant].hoverBackgroundColor};
    }
  `}
`;
