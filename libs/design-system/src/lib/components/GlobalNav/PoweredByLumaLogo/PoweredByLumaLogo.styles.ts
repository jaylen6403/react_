import styled from 'styled-components';
import { colors } from '../../../colors/colors';

export const PoweredLogoWrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: ${(props) => (props.isMobile ? '133px' : '160px')};
  max-height: 24px;
  margin-right: 24px;
`;

export const PoweredText = styled.p<{ isMobile: boolean }>`
  font-size: ${(props) => (props.isMobile ? '9px' : '11px')};
  font-family: IBMPlexSans;
  font-weight: 500;
  color: ${colors.blue};
  margin-right: 6px;
`;

export const LogoContainer = styled.div<{ width?: string; height?: string }>`
  width: ${(props) => (props.width ? props.width : '9rem')};
  height: ${(props) => (props.height ? props.height : '2rem')};
  overflow: auto;
  display: flex;
  flex: 1 1 0%;
`;
