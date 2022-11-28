import styled from 'styled-components';
import { LumaColor } from '../../LumaColors';
import { LumaFont } from '../../LumaFonts/LumaFonts';

export const Root = styled.div<{ statusBorder: boolean }>`
  display: flex;
  flex-direction: row;
  min-width: 7.75rem;
  min-height: 4.5rem;
  padding: 0.5rem 0.5rem 0.375rem;
  border-radius: 8px;
  border: solid 1px
    ${(props) =>
      props.statusBorder ? `${LumaColor.NEUTRAL_70}` : 'transparent'};
  background-color: ${LumaColor.NEUTRAL_00_WHITE};
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const TitleMessageDefault = styled.p`
  font-family: ${LumaFont.DEFAULT.MEDIUM};
  font-size: 0.5rem;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${LumaColor.NEUTRAL_80};
  margin-bottom: 0;
`;

export const SubMessageDefault = styled.p`
  font-family: ${LumaFont.DEFAULT.REGULAR};
  font-size: 0.375rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${LumaColor.NEUTRAL_60};
`;

export const DefaultStatusIcon = styled.div`
  font-size: 1.25rem;
`;
