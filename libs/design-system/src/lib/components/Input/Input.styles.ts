import styled from 'styled-components';

import type { Props } from './Input';
import { colors } from '../../colors';

export const Root = styled.input<Props>`
  background-color: ${(props) =>
    props.value !== undefined ? colors.greyFade : 'transparent'};
  border-radius: 0.25rem;
  border: 0.0625rem solid
    ${(props) => {
      if (props.hasError) {
        return colors['error-red'];
      }
      return props.value !== undefined
        ? colors['button-hover']
        : colors.greyLight;
    }};
  color: 0.0625rem solid ${colors.greyDark};
  display: flex;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.6875rem;
  padding: 0.375rem 0.5rem;

  ::placeholder {
    font-family: 'IBM Plex Sans', sans-serif;
  }

  &:focus:not([disabled]),
  &:hover:not([disabled]) {
    border-color: ${(props) =>
      props.hasError ? colors['error-red'] : colors['button-hover']};
  }

  &:focus:not([disabled]) {
    background-color: ${colors.greyFade};
  }

  &:disabled {
    background-color: transparent;
    border-color: ${colors.greyLightest};
    color: ${colors.greyLightest};
  }
`;
