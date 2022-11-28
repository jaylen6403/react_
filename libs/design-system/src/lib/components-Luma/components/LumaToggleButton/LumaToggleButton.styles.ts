import styled from 'styled-components';
import { LumaColor } from '../../LumaColors';
import { LumaFont } from '../../LumaFonts/LumaFonts';

export const ToggleButtonContainer = styled.div`
  button:not(:first-child) {
    margin-left: 0.625rem;
  }
`;

export const Title = styled.div`
  margin: 0 4.75rem 0.625rem 0;
  font-size: 0.6875rem;
  color: ${LumaColor.NEUTRAL_60};
  font-family: ${LumaFont.DEFAULT.REGULAR};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
