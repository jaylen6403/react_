import styled, { css } from 'styled-components';
import { LumaColor } from '@luma-fe-workspace/design-system';
import { PrincipalProximity } from './AGGridTable';

export const IssuerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem 0;
  height: 100%;
  width: 100%;
  > * {
    display: flex;
    justify-content: start;
    height: 100%;
    width: 100%;
  }
  p {
    margin: 0rem;
    padding-top: 0.6875rem;
    font-size: 0.875rem;
    font-family: 'IBM Plex Sans', sans-serif;
    width: 100%;
    height: 100%;
  }
`;

export const IssuerLogo = styled.img<{ height?: string; width?: string }>`
  ${(props) => props.height && `height: ${props.height};`}
  ${(props) => props.width && `width: ${props.width};`}
`;

export const IssuerSecuritynumber = styled.p`
  font-weight: 500;
  color: ${LumaColor.PRIMARY_50};
  cursor: pointer;
  &:hover {
    color: ${LumaColor.PRIMARY_60};
  }
`;

export const IssuerName = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
`;

export const SecurityText = styled.p`
  font-weight: bold;
  color: ${LumaColor.NEUTRAL_60};
`;

export const UnderlinerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UnderlierPerformanceText = styled.p<{
  performance: number;
}>`
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: bold;
  ${(props) => {
    if (props.performance < 0) {
      return css`
        color: ${LumaColor.NEGATIVE_60};
      `;
    } else if (props.performance > 0) {
      return css`
        color: ${LumaColor.POSITIVE_60};
      `;
    } else {
      return css`
        color: ${LumaColor.NEUTRAL_80};
      `;
    }
  }}
  font-size: 0.875rem;
`;

export const UnderlierWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: auto;
`;

export const UnderlierTicker = styled.div<{
  activeUnderlier?: boolean;
  performance?: number;
}>`
  display: flex;
  ${(props) => {
    if (props.activeUnderlier && props.performance) {
      if (props.performance < 0) {
        return css`
          background-color: ${LumaColor.NEGATIVE_20};
          color: ${LumaColor.NEGATIVE_60};
        `;
      } else if (props.performance > 0) {
        return css`
          background-color: ${LumaColor.POSITIVE_20};
          color: ${LumaColor.POSITIVE_60};
        `;
      }
    }
    if (props.activeUnderlier) {
      return css`
        background-color: ${LumaColor.NEUTRAL_40};
      `;
    } else {
      return css`
        background-color: ${LumaColor.NEUTRAL_20};
      `;
    }
  }}
  border-radius: 0.25rem;
  display: inline-block;
  height: 1.2rem;
  width: auto;
  &:last-child {
    margin-right: 0;
  }
`;

export const UnderlierText = styled.p`
  font-size: 0.688rem;
  padding: 0;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  padding: 0.6rem 0.5rem;
`;

export const StatusContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding: 0.25rem 0rem;
  p {
    font-size: 0.75rem;
    padding: 0rem;
    margin: 0.625rem 0rem;
  }
`;

export const StatusLabelContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const StatusLabel = styled.p<{ color?: string }>`
  color: ${(props) => props.color ?? 'black'};
  font-weight: 500;
`;
export const SettlementRates = styled.div`
  width: 100%;
`;
export const SettlementRate = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: row;
  justify-content: space-between;
`;
export const SettlementRateLabel = styled.p``;
export const SettlementRateValue = styled.p``;
export const StructuredContainer = styled.div`
  display: flex;
  white-space: pre-line;
  align-items: center;
  height: 6rem;
  max-width: 100%;
  overflow-wrap: break-word;
`;

export const StructuredText = styled.p`
  font-family: 'IBM Plex Sans', sans-serif;
  color: ${LumaColor.NEUTRAL_80};
  font-size: 0.875rem;
  line-height: 1;
  padding: 1rem 0.5rem;
`;

export const TooltipWrapper = styled.div`
  background-color: ${LumaColor.NEUTRAL_00_WHITE};
  border-radius: 8px;
  border: 1px solid red;
  border: solid 1px ${LumaColor.NEUTRAL_40};
  height: 100%;
  padding: 0.5rem;
  width: 100%;
`;

export const ThresholdContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1rem;
`;

export const PrincipalProximityWrapper = styled.div`
  margin-bottom: 0.25rem;
  display: flex;
`;

export const PrincipalProximityValue = styled.div<{
  principleProxAboveOrBelow: PrincipalProximity | undefined;
}>`
  ${(props) => {
    if (props.principleProxAboveOrBelow === PrincipalProximity.NEGATIVE) {
      return css`
        font-weight: bold;
        color: ${LumaColor.NEGATIVE_60};
      `;
    } else if (
      props.principleProxAboveOrBelow === PrincipalProximity.POSITIVE
    ) {
      return css`
        font-weight: bold;
        color: ${LumaColor.POSITIVE_60};
      `;
    } else {
      return css`
        color: ${LumaColor.NEUTRAL_80};
      `;
    }
  }}
`;

export const Barrier = styled.div`
  font-size: 0.6875rem;
`;

export const BarrierValue = styled.div`
  font-weight: 500;
`;

export const PrincipalProximityNumber = styled.span`
  margin-right: 0.25rem;
`;
