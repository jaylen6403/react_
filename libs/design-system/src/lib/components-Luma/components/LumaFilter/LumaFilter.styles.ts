import styled from 'styled-components';
import type { FilterProps } from './LumaFilter';
import { LumaColor } from '../../LumaColors';
import { LumaFont } from '../../LumaFonts/LumaFonts';

const VARIANT_MAP = {
  default: {
    backgroundColor: LumaColor.NEUTRAL_40,
    border: LumaColor.NEUTRAL_80,
    color: LumaColor.NEUTRAL_80,
  },
  disabled: {
    backgroundColor: LumaColor.NEUTRAL_00_WHITE,
    border: LumaColor.NEUTRAL_40,
    color: LumaColor.NEUTRAL_40,
  },
  active: {
    backgroundColor: LumaColor.NEUTRAL_00_WHITE,
    border: LumaColor.NEUTRAL_40,
    color: LumaColor.NEUTRAL_60,
  },
  activeAndDisabled: {
    backgroundColor: LumaColor.NEUTRAL_20,
    border: LumaColor.NEUTRAL_20,
    color: LumaColor.NEUTRAL_40,
  },
} as const;

export const Filter = styled.button<Pick<FilterProps, 'disabled' | 'active'>>`
  width: 100%;
  font-family: ${LumaFont.DEFAULT.REGULAR};
  display: flex;
  height: 2rem;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) =>
    props.active
      ? VARIANT_MAP['default'].backgroundColor
      : VARIANT_MAP['active'].backgroundColor};
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) =>
    props.active
      ? VARIANT_MAP['default'].border
      : VARIANT_MAP['active'].border};
  background-color: ${(props) =>
    props.active
      ? VARIANT_MAP['default'].backgroundColor
      : VARIANT_MAP['active'].backgroundColor};
  color: ${(props) =>
    props.active ? VARIANT_MAP['default'].color : VARIANT_MAP['active'].color};

  &:disabled {
    border-color: ${(props) =>
      props.active
        ? VARIANT_MAP['activeAndDisabled'].border
        : VARIANT_MAP['disabled'].border};
    background-color: ${(props) =>
      props.active
        ? VARIANT_MAP['activeAndDisabled'].backgroundColor
        : VARIANT_MAP['disabled'].backgroundColor};
    cursor: default;
    color: ${(props) =>
      props.active
        ? VARIANT_MAP['activeAndDisabled'].color
        : VARIANT_MAP['disabled'].color};
  }
`;

export const LabelsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.75rem;
`;

export const Value = styled.div`
  font-family: ${LumaFont.DEFAULT.MEDIUM};
  width: 3.75rem;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const FilterContainer = styled.div`
  width: 10.125rem;
  position: relative;
`;

export const AngleIcon = styled.div`
  margin-right: auto;
`;
