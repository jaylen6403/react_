import { useState } from 'react';

import { SPSUnderlier } from '@luma-fe-workspace/redux';

import {
  BarrierMessage,
  PerformanceDataWrapper,
  TooltipPerformanceDataWrapper,
  UnderlierTicker,
} from './PerformanceData.styles';
import { Tooltip } from '../../../Tooltip/Tooltip';
import { Indicator } from '../../../../utils/structuredProductsEventsUtils';

interface PerformanceDataProps {
  underliers?: SPSUnderlier[];
  barrierValue?: string;
  barrierIndicator: Indicator;
  id: string;
}

export const PerformanceData = ({
  underliers,
  barrierValue,
  barrierIndicator,
  id,
}: PerformanceDataProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const underliersToShow =
    underliers !== undefined && underliers?.length > 0
      ? underliers.slice(0, 3)
      : null;

  const hiddenUnderliers =
    underliers !== undefined && underliers?.length > 4
      ? underliers.slice(3)
      : null;

  return (
    <PerformanceDataWrapper>
      {underliersToShow?.map((underlier, idx) => (
        <UnderlierTicker key={`underlier-${idx}`}>
          {underlier.symbol}
        </UnderlierTicker>
      ))}
      {hiddenUnderliers ? (
        <UnderlierTicker
          id={id}
          isMore={true}
          onMouseOver={() => {
            setShowTooltip(true);
          }}
          onFocus={() => {
            setShowTooltip(true);
          }}
          onMouseOut={() => {
            setShowTooltip(false);
          }}
          onBlur={() => {
            setShowTooltip(false);
          }}
        >{`+ ${hiddenUnderliers.length} More`}</UnderlierTicker>
      ) : null}
      <BarrierMessage indicator={barrierIndicator}>
        {barrierValue}
      </BarrierMessage>

      <Tooltip wrapperId={id} top={'22%'} left={'15%'} isVisible={showTooltip}>
        <TooltipPerformanceDataWrapper>
          {hiddenUnderliers?.map((underlier, idx) => (
            <UnderlierTicker key={`underlier-${idx}`}>
              {underlier.symbol}
            </UnderlierTicker>
          ))}
        </TooltipPerformanceDataWrapper>
      </Tooltip>
    </PerformanceDataWrapper>
  );
};
