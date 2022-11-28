import styled, { css } from 'styled-components';

import type { Props } from './Option';
import { colors } from '../../colors';

export const Root = styled.label<Props>`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap
  justify-content: center;
  align-items: center;
  padding: 0.1875rem 0.75rem 0.1875rem 0.25rem;
  border-radius: 0.25rem;
  max-height: max-content;
  width: 100%;
  &:hover:not(:disabled) {
    background-color: ${colors.greyLightest};
  }

  color: ${colors.greyMedium};
  ${(props) =>
    props.checked &&
    css`
      color: ${colors.greyDarker};
    `}
  ${(props) =>
    props.disabled &&
    css`
      color: ${colors.greyLight};
      background-color: none;
      &:hover:not(:disabled) {
        background-color: none;
      }
      &:active:not(:disabled) {
        background-color: none;
        color: ${colors.greyLight};
      }
    `}
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 0.0625rem;
  height: 0.0625rem;
  padding: 0;
  margin: -0.0625rem;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const Label = styled.div<Props>`
  word-break: break-word;
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  margin-left: 0.25rem;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.125rem;
  letter-spacing: 0.01875rem;
`;
