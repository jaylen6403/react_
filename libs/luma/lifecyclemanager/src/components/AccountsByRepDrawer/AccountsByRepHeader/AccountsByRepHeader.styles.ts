import {
  LumaColor,
  LumaButton,
  spacing,
} from '@luma-fe-workspace/design-system';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

export const IssuerLogoContainer = styled.div<{ visible: boolean }>`
  ${(props) => !props.visible && 'display: none'}
`;

export const IssuerLogo = styled.img`
  height: 2rem;
  margin-bottom: 0.5rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 1.5rem;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const Issuer = styled.text`
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
  font-weight: 500;
`;

export const VerticalSeparator = styled.div`
  margin: 0 0.75rem;
  height: 1.25rem;
  width: 0.125rem;
  background-color: ${LumaColor.NEUTRAL_80};
`;

export const ProductIdentifierLink = styled.a`
  text-decoration: none;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${LumaColor.PRIMARY_50};
`;

export const DownloadButton = styled(LumaButton)`
  margin-left: ${spacing.xs};
`;

export const StructureType = styled.text`
  font-size: 1.25rem;
  margin-bottom: 0.625rem;
`;

export const EventDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 3.875rem;
  justify-content: space-between;
`;

export const EventDetailsRow = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.875rem;
`;

export const EventDetailsKey = styled.text`
  width: 5rem;
`;

export const EventDetailsValue = styled.text`
  display: flex;
  flex-direction: row;
  font-weight: 500;
`;
