import { LumaColor, LumaTextEntry } from '@luma-fe-workspace/design-system';
import styled from 'styled-components';
import { Cell } from '../Quoting/Quoting.styles';

export const IssuerCell = styled(Cell)`
  font-weight: bold;
`;
// workaround for styling LumaEntryContainer that's above ExternalIdInput
export const TableInputWrapper = styled.div`
  width: 4.625rem;
  margin: 0 auto;
  position: relative;
  & > span {
    width: 4.625rem;
  }
  & > button,
  & > input {
    padding: 0.5rem;
    width: 4.625rem;
  }
`;
export const ExternalIdInputWrapper = styled.span`
  & > span {
    width: 4.625rem;
    &:focus-within {
      width: 19rem;
      position: absolute;
      background-color: ${LumaColor.NEUTRAL_00_WHITE};
      top: 0;
      transform: translateY(-50%);
      z-index: 3;
    }
  }
`;
export const ExternalIdInput = styled(LumaTextEntry)``;
export const RejectQuoteSection = styled.div`
  margin-top: 2rem;
`;

export const ISINInputWrapper = styled.div`
  margin-top: 1.75rem;
  & > span {
    width: 10rem;
  }
`;
export const ISINInput = styled(LumaTextEntry)``;
