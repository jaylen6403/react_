import styled from 'styled-components';

import type { Props } from './NewTabButton';
import { Icon, colors } from '@luma-fe-workspace/design-system';

const VARIANT_MAP = {
  primary: {
    backgroundColor: colors.white,
    borderColor: colors.white,
    color: colors.greyLight,
    hoverBackgroundColor: colors.greyLightest,
    hoverBorderColor: colors.greyLightest,
  },
  secondary: {
    backgroundColor: colors.greyLighter,
    borderColor: colors.greyLighter,
    color: colors.greyMedium,
    hoverBackgroundColor: colors.greyLight,
    hoverBorderColor: colors.greyLight,
  },
} as const;

export const Root = styled.button<Props>`
  border-radius: 0.5rem 0rem 0rem 0rem;
  border-style: solid;
  border-width: 0.0625rem;
  width: 2.25rem;
  height: 2rem;
  cursor: pointer;
  display: flex;
  font-family: 'Font Awesome 5 Pro';
  font-size: 1rem;
  font-weight: 900;

  padding: 0.5rem 0.75rem 0.5rem 0.75rem;
  box-shadow: 0rem -0.0625rem 0rem 0rem ${colors.greyLightest} inset;

  &:disabled {
    cursor: default;
    opacity: 0.6;
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

export const NewTabButtonIcon = styled(Icon)`
  width: 0.75rem;
  height: 1rem;
`;
