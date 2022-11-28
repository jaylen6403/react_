import styled from 'styled-components';
import { colors } from '@luma-fe-workspace/design-system';
import { CellEffects } from './SecondariesTable';
import { FONT_IBM_MONO } from '../../lib/luma-secondaries.styles';

export const HeaderRow = styled.tr`
  background-color: ${colors.greyLighter};
  padding: 0.5rem 0.75rem;
  border-top: 0.0625rem solid ${colors.greyLight};
  font-family: ${FONT_IBM_MONO};
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
`;

export const HeaderTitle = styled.td<{ textAlign?: string }>`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.01875rem;
  padding: 0.5rem 0.75rem;
  ${(props) => props.textAlign && `text-align: ${props.textAlign};`}
`;

export const Row = styled.tr`
  border: 0;
  padding: 0rem;
  border: 0.0625rem solid ${colors.greyLight};
`;

export const Cell = styled.td<CellEffects>`
  padding: 0.5rem 0.75rem;
  border-left: 0.0625rem solid ${colors.greyLight};
  border-right: 0.0625rem solid ${colors.greyLight};
  white-space: nowrap;
  font-size: 0.75rem;

  ${(props) => {
    return `
    color: ${props.isGreyedOut ? colors.greyMedium : colors.greyDarker};
    ${
      props.hideTextOverflow
        ? `text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: ${props.width};`
        : ''
    }
    ${props.bold ? 'font-weight: 500;' : 'font-weight: 400;'}
    ${
      props.fontSize ? `font-size: ${props.fontSize};` : '  font-size: 0.75rem;'
    }
    ${props.width ? `width: ${props.width};` : ''}
    ${props.minWidth ? `min-width: ${props.minWidth};` : ''}
    ${props.textAlign ? `text-align: ${props.textAlign};` : ''}
    `;
  }}
`;

export const Root = styled.table<{ rootStyles?: string }>`
  font-family: ${FONT_IBM_MONO};
  border: 0.0625rem solid ${colors.greyLight};
  border-collapse: collapse;
  width: 100%;
  & ${Cell}:first-child {
    border-left: none;
  }
  & ${Cell}:last-child {
    border-right: none;
  }

  .odd-row {
    background: ${colors.white};
  }
  .even-row {
    background: ${colors.greyFade};
  }

  ${(props) => props.rootStyles}
`;

export const FooterRow = styled.th`
  background: ${colors.greyLightest};
  height: 2rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
`;
