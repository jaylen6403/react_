import styled from 'styled-components';
import { colors } from '../../../colors';
import { Variant } from '..';

const VARIANT_MAP = {
  primary: {
    topNavBackground: colors.blue,
    topNavBorder: colors.blue,
    accountIconMainColor: colors.white,
    accountIconActiveColor: ' #007dc2',
    textColor: colors.white,
    activeHighlightColor: ' #007dc2',
  },
  secondary: {
    topNavBackground: colors.white,
    topNavBorder: '#c4cdd1',
    accountIconMainColor: '#2f3336',
    accountIconActiveColor: ' #a9b3b8',
    textColor: '#2f3336',
    activeHighlightColor: '#a9b3b8',
  },
};

export const TopNavBarContainer = styled.div`
  max-height: 64px;
  background-color: ${colors.white};
`;

export const TopNavBarWrapper = styled.div<{
  variantType: Variant;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 64px;
  border-bottom-right-radius: 24px;
  background-color: ${(props) =>
    VARIANT_MAP[`${props.variantType}`].topNavBackground};
  border-bottom: 1px solid
    ${(props) => VARIANT_MAP[`${props.variantType}`].topNavBorder}; ;
`;

export const LogoContainer = styled.div<{ width?: string; height?: string }>`
  margin-left: 24px;
  width: ${(props) => (props.width ? props.width : '144px')};
  height: ${(props) => (props.height ? props.height : '28px')};
  overflow: auto;
  display: flex;
  flex: 1 1 0%;
`;
