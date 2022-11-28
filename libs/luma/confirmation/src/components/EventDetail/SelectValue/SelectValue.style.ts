import styled from 'styled-components';
import { LumaColor } from '@luma-fe-workspace/design-system';

export const ValueBox = styled.button<{
  selectedValue: boolean;
  disabled?: boolean;
}>`
  min-height: 7.3125rem;
  width: 7.3125rem;
  border-radius: 0.5rem;
  border: solid 0.063rem ${LumaColor.NEUTRAL_40};
  margin: 0.625rem 1.063rem 0 0;
  background-color: ${(props) =>
    props.selectedValue ? LumaColor.NEUTRAL_20 : LumaColor.NEUTRAL_00_WHITE};

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  font-family: 'IBM Plex Sans';
  color: ${(props) =>
    props.disabled ? LumaColor.NEUTRAL_40 : LumaColor.NEUTRAL_80};
  cursor: ${(props) => !props.disabled && 'pointer'};
`;

export const ValueBoxTitle = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;

export const ValueBoxValue = styled.div<{ cashSettlement: boolean }>`
  margin: ${(props) =>
    props.cashSettlement ? '0.875rem 0 0.813rem 0' : '0.438rem'};
  font-size: 1.75rem;
`;

export const ValueBoxDate = styled.div<{ disabled?: boolean }>`
  margin-bottom: 0.563rem;
  color: ${(props) =>
    props.disabled ? LumaColor.NEUTRAL_40 : LumaColor.NEUTRAL_60};
  font-size: 0.875rem;
  text-transform: uppercase;
`;

export const SelectValueWrapper = styled.div`
  display: flex;
`;

export const NumShares = styled.div`
  font-size: 1.25rem;
`;

export const CashInLieu = styled.div`
  font-size: 1.25rem;
`;
