import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { faCircleInfo } from '@fortawesome/pro-solid-svg-icons';

import { Tooltip } from '../../Tooltip/Tooltip';
import { CircleInfoIcon, InfoWrapper, InsightsTooltip } from './Tooltip.styles';

interface Props {
  tooltipText: string;
  wrapperId: string;
}

export const InfoTooltip = ({ tooltipText, wrapperId }: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setShowTooltip(false);
      }}
    >
      <InfoWrapper>
        <CircleInfoIcon
          icon={faCircleInfo}
          onClick={() => setShowTooltip(!showTooltip)}
        />
      </InfoWrapper>
      <Tooltip
        wrapperId={wrapperId}
        top={'10'}
        left={'0'}
        isVisible={showTooltip}
      >
        <InsightsTooltip>{tooltipText}</InsightsTooltip>
      </Tooltip>
    </OutsideClickHandler>
  );
};
