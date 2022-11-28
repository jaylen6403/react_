import styled from 'styled-components';
import { colors } from '@luma-fe-workspace/design-system';

export const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const QuoteSelectorButton = styled.button<{ static: boolean }>`
  font-family: 'IBM Plex Sans';
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0.01875rem;
  width: 100%;
  height: 100%;
  background: ${(props) => (props.static ? 'transparent' : colors.white)};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.0625rem solid ${colors.greyLightest};
  color: ${colors.greyDark};

  ${(props) => {
    if (props.static) {
      return;
    }
    return `
      cursor: pointer;
      &:hover {
        border: 0.125rem solid ${colors.oceanDarker};
      }
      &:focus {
        border: 0.125rem solid ${colors.oceanDarker};
      }`;
  }}
  &.disabled {
    border: 0;
  }
`;

export const QuoteSelectorOffers = styled.div`
  font-size: 0.75rem;
  padding-left: 0.4375rem;
  display: flex;
  color: ${colors.oceanDarker};
`;

export const QuoteSelectorOfferCount = styled.span`
  margin-left: 0.25rem;
`;

export const QuoteList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  background-color: ${colors.greyLighter};
  color: ${colors.greyDarker};
  width: auto;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.15);
  padding: ${(props) => (props.isOpen ? '0.5rem 0.25rem' : '0')};
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  margin: 0.25rem 0rem;
`;

export const QuoteAcceptButton = styled.button`
  background-color: ${colors.greyLighter};
  border: 0;
  width: 100%;
  color: ${colors.blueLighter};
  font-family: IBM Plex Sans;
  font-size: 0.75rem;
  font-weight: 400;
  cursor: pointer;
  margin-bottom: 0.875rem;
  &:hover {
    background-color: ${colors.greyLightest};
    border-radius: 0.25rem;
  }
`;

export const QuoteListItem = styled.li<{ readOnly?: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.greyLighter};
  width: 100%;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.125rem;
  border-radius: 0.25rem;
  font-family: IBM Plex Sans;

  ${(props) => {
    if (props.readOnly) {
      return 'font-weight: 400;';
    }
    return `
      font-weight: 500;
      &:hover {
        background: ${colors.greyLightest};
      }
    `;
  }}
`;

export const QuoteAmount = styled.div<{ multipleQuotes: boolean }>`
  margin-right: ${(props) => (props.multipleQuotes ? '0.875rem' : '2.5rem')};
  font-family: IBM Plex Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.03em;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 9.8125rem;
`;

export const QuoteDeadline = styled.div`
  color: ${colors.greyMedium};
  font-family: IBM Plex Sans;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.0625rem;
  letter-spacing: 0.01875rem;
`;

export const BestQuoteDivider = styled.div`
  background-color: ${colors.greyLight};
  height: 0.0625rem;
  border: 0;
  margin: 0.125rem 0rem;
  width: calc(100% - 0.25rem);
`;
