import {
  ModalClock,
  ModalHeaderActions,
  ModalTimer,
  ModalTimerIcon,
  ModalTitle,
  StyledModalHeader,
} from '../ModalHeader.styles';
import { ModalSeperatorColor } from '../../ModalHelpers';
import { ModalSubTitle } from '../../Modal.styles';
import { useEffect, useState } from 'react';
import { ModalActionProp } from '../../ModalFooter/ActionModalFooter/ActionModalFooter';
import { colors } from '@luma-fe-workspace/design-system';

interface Props {
  id: string;
  title: string;
  secondaryTitle?: string;
  seperatorColor?: ModalSeperatorColor;
  timer?: number;
  reject?: ModalActionProp;
}

function formatTimer(seconds: number) {
  const min = Math.floor(seconds / 60);
  const sec = (seconds % 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
  });
  return `${min}:${sec}`;
}

export const RequiredModalHeader = ({
  /**
   * id of Modal Title
   */
  id,
  /**
   * title of Modal Header
   */
  title,
  /**
   * rightSideTitle of Modal Header
   */
  secondaryTitle,
  /**
   * A timer in minutes that if provided will present on the right
   */
  timer = -1,
  /**
   * Specify the color of the Modal Header Divider
   *  buy: buyGreen
   *  red: sellRed
   *  none (default): greyFade
   */
  seperatorColor = 'NONE',
  /**
   * Reject ModalActionProp that will execute
   *   onClick function when timer runs out
   */
  reject,
}: Props) => {
  const [seconds, setSeconds] = useState(timer * 60 + 1);
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (seconds > 0 && reject) {
      interval = setInterval(() => {
        setSeconds((seconds) => {
          if (seconds === 1) reject?.onClick();
          return seconds === 0 ? seconds : seconds - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [seconds, reject]);

  return (
    <StyledModalHeader seperatorColor={seperatorColor}>
      <ModalTitle id={id}>{title}</ModalTitle>
      <ModalHeaderActions>
        {timer > 0 ? (
          <ModalSubTitle textColor={colors.redDarker}>
            <ModalTimer>
              <ModalClock>
                <ModalTimerIcon iconCode="stopwatch" />
              </ModalClock>
              {formatTimer(seconds)}
            </ModalTimer>
          </ModalSubTitle>
        ) : null}
        {secondaryTitle && <ModalSubTitle>{secondaryTitle}</ModalSubTitle>}
      </ModalHeaderActions>
    </StyledModalHeader>
  );
};
