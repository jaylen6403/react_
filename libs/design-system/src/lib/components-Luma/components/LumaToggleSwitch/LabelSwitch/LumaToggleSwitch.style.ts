import styled from 'styled-components';

import type { ToggleSwitchProps } from './LumaToggleSwitch';
import { LumaColor } from '../../../LumaColors';
import { LumaFont } from '../../../LumaFonts/LumaFonts';

export const ToggleSwitchContainer = styled.label<
  Pick<ToggleSwitchProps, 'label' | 'disabled' | 'checked'>
>`
  display: flex;
  width: fit-content;
  font-family: ${LumaFont.DEFAULT.LIGHT};
  font-size: 0.6875rem;
  ${(props) =>
    `
    gap: ${props.label.position === 'side' ? '0.5rem' : '0.625rem'};
    align-items: ${props.label.position === 'side' ? 'center' : 'flex-start'};
    flex-direction: ${
      props.label.position === 'side' ? 'row-reverse' : 'column'
    };
    cursor: ${props.disabled ? 'default' : 'pointer'};
    ${props.checked && !props.disabled && `color: ${LumaColor.NEUTRAL_80};`};
    ${!props.checked && !props.disabled && `color: ${LumaColor.NEUTRAL_60};`};
    ${props.disabled && `color: ${LumaColor.NEUTRAL_40};`};
  `}
`;

export const Switch = styled.div<Pick<ToggleSwitchProps, 'disabled'>>`
  position: relative;
  width: 3rem;
  height: 1.5rem;
  border-radius: 8px;
  transition: 300ms all;
  background: ${(props) =>
    props.disabled ? LumaColor.NEUTRAL_20 : LumaColor.NEUTRAL_40};
  &:before {
    content: '';
    position: absolute;
    height: 1rem;
    width: 1rem;
    border-radius: 6px;
    top: 0.25rem;
    left: 0.3125rem;
    background: ${(props) =>
      props.disabled ? LumaColor.NEUTRAL_40 : LumaColor.NEUTRAL_00_WHITE};
  }
`;

export const Input = styled.input<Pick<ToggleSwitchProps, 'disabled'>>`
  position: absolute;
  opacity: 0;
  &:checked + ${Switch} {
    background: ${(props) =>
      props.disabled ? LumaColor.NEUTRAL_20 : LumaColor.NEUTRAL_80};
    &:before {
      content: '';
      display: block;
      left: 1.75rem;
      transition: 0.2s;
    }
  }
`;
