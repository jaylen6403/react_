import styled from 'styled-components';
import { LumaColor } from '../../LumaColors';
import { LumaIcon } from '../LumaIcon';
import { LumaPillSecondaryVariant, LumaPillVariant } from './LumaPill';

interface VariantStyle {
  backgroundColor: string;
  color: string;
  borderColor: string;
}

export const VARIANT_STYLES: { [key in LumaPillVariant]: VariantStyle } = {
  primary: {
    backgroundColor: LumaColor.NEUTRAL_40,
    color: LumaColor.NEUTRAL_80,
    borderColor: LumaColor.NEUTRAL_40,
  },
  secondary: {
    backgroundColor: LumaColor.NEUTRAL_20,
    color: LumaColor.NEUTRAL_80,
    borderColor: LumaColor.NEUTRAL_20,
  },
  tertiary: {
    backgroundColor: LumaColor.NEUTRAL_00_WHITE,
    color: LumaColor.NEUTRAL_60,
    borderColor: LumaColor.NEUTRAL_40,
  },
};

export const PrimaryTitle = styled.div<{ variant: LumaPillVariant }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding-right: 0.5625rem;
  ${(props) => {
    const { backgroundColor, color } = VARIANT_STYLES[props.variant];
    return `background-color: ${backgroundColor};
        color: ${color}`;
  }}
`;

export const SecondaryTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 0 0.5625rem;
  background-color: ${LumaColor.NEUTRAL_00_WHITE};
`;

export const Title = styled.div<{ variant?: LumaPillSecondaryVariant }>`
  white-space: nowrap;
  font-size: 0.75rem;
  ${(props) =>
    props.variant === 'secondary' && `color: ${LumaColor.NEUTRAL_40};`};
`;

export const CloseIcon = styled(LumaIcon)`
  width: 0.4375rem;
  height: 0.6875rem;
  height: 100%;
  padding: 0 0.25rem 0 0.5rem;
  cursor: pointer;
`;

export const PillContainer = styled.div<{
  variant: LumaPillVariant;
  clickable: boolean;
  borderColor?: string;
}>`
  display: flex;
  flex-direction: row;
  border-radius: 0.5rem;
  height: 1.5rem;
  overflow: hidden;
  font-weight: 500;
  position: relative;
  cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};
  ${(props) => {
    const { borderColor } = VARIANT_STYLES[props.variant];
    return `border: .0625rem ${props.borderColor ?? borderColor} solid;
    &:hover {
      border: 0.0625rem ${borderColor} solid;
    }
    `;
  }};

  &:hover ${PrimaryTitle} {
    background-color: ${LumaColor.NEUTRAL_40};
    color: ${LumaColor.NEUTRAL_60};
  }
  &:hover ${SecondaryTitle} {
    background-color: ${LumaColor.NEUTRAL_40};
    color: ${LumaColor.NEUTRAL_60};
  }
`;
