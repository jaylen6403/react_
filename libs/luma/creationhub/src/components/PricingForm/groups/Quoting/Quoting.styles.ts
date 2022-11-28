import styled from 'styled-components';
import {
  LumaButton,
  LumaColor,
  LumaFont,
  LumaIcon,
} from '@luma-fe-workspace/design-system';
import { Table } from '../../elements/Table';

export const QuotingWrapper = styled.div`
  table th:nth-of-type(1) {
    text-align: left;
  }
`;

export const Title = styled.span`
  display: inline-block;
  margin: 0 0 0.625rem;
  font-weight: bold;
`;

export const Cell = styled.div`
  display: flex;
  width: 4.5rem;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  align-items: center;
`;

export const CellAlignLeft = styled(Cell)`
  text-align: left;
  display: flex;
  align-items: flex-start;
`;

export const ExternalId = styled.div`
  color: ${LumaColor.NEUTRAL_60};
  font-size: 0.688rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CenteredCell = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

export const IssuerLogo = styled.img`
  height: 1rem;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Rectangle = styled.div`
  width: 20px;
  height: 2px;
  background-color: ${LumaColor.NEUTRAL_40};
}`;

export const DocumentModalTitle = styled.div`
  font-size: 1rem;
  font: ${LumaFont.DEFAULT.REGULAR};
  color: ${LumaColor.NEUTRAL_80};
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`;

export const DocumentModalRequestId = styled.div`
  font-size: 0.75rem;
  font: ${LumaFont.DEFAULT.REGULAR};
  color: ${LumaColor.NEUTRAL_80};
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`;

export const QuoteTypeLabel = styled.span`
  color: ${LumaColor.POSITIVE_60};
  font-size: 0.6875rem;
  font-weight: 500;
`;

export const QuoteStatusIcon = styled(LumaIcon)`
  color: ${LumaColor.POSITIVE_60};
`;

export const NoIssuersErrorTitle = styled.h1`
  font-size: 1rem;
  text-align: left;
  margin-bottom: 1rem;
`;

export const NoIssuersErrorText = styled.p`
  font-size: 0.75rem;
  text-align: left;
  margin-bottom: 1rem;
`;

export const NoIssuersErrorButton = styled(LumaButton)`
  margin: 0 0 0 auto;
  justify-content: end;
  & > button {
    width: auto;
    padding: 0.625rem 1.4375rem;
  }
`;

export const QuotingTable = styled(Table)`
  th,
  td {
    padding: 0.625rem 0.25rem;
    word-break: break-word;
  }
`;
