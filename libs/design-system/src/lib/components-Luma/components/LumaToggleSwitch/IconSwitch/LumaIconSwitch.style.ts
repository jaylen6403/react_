import styled from 'styled-components';

import { IconSwitchProps } from './LumaIconSwitch';
import { LumaColor } from '../../../LumaColors';

const DIMENSION_MAP = {
  small: {
    width: '4', //rem
    height: '2rem',
  },
  x_small: {
    width: '3.5', //rem
    height: '1.75rem',
  },
};

export const IconSwitchContainer = styled.label<
  Pick<IconSwitchProps, 'disabled' | 'sizeVariant'>
>`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0;
  margin: 0;
  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.disabled ? LumaColor.NEUTRAL_20 : LumaColor.NEUTRAL_40)};
  color: ${(props) =>
    props.disabled ? LumaColor.NEUTRAL_40 : LumaColor.NEUTRAL_80};
  ${(props) =>
    `
    width: ${DIMENSION_MAP[props.sizeVariant].width}rem;
    height: ${DIMENSION_MAP[props.sizeVariant].height};
  `}
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

export const IconSwitchItem = styled.div<Pick<IconSwitchProps, 'sizeVariant'>>`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 100%;
  ${(props) =>
    `
    height: ${DIMENSION_MAP[props.sizeVariant].height};
  `}
  label:first-child {
    margin-left: 0.125rem;
  }
`;

export const Input = styled.input`
  display: flex;
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  padding: 0;
  border: 0;
  margin: 0;
`;

export const Label = styled.label<Pick<IconSwitchProps, 'disabled'>>`
  display: flex;
  position: relative;
  z-index: 2;
  height: 100%;
  align-items: center;
  font-size: 0.75rem;
  user-select: none;
  transition: all 0.3s;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

export const Marker = styled.div<
  Pick<IconSwitchProps, 'sizeVariant' | 'disabled'>
>`
  position: absolute;
  z-index: 1;
  top: 0;
  border-radius: 8px;
  height: 100%;
  left: 100%;
  transition: transform 0.3s;
  background-color: ${(props) =>
    props.disabled ? LumaColor.NEUTRAL_20 : LumaColor.NEUTRAL_40};
  ${Input}:checked ~ & {
    transform: translateX(-100%);
  }
  ${(props) =>
    `
    width: ${+DIMENSION_MAP[props.sizeVariant].width / 2}rem;
    height: ${DIMENSION_MAP[props.sizeVariant].height};
  `}
`;
