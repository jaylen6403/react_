import * as React from 'react';
import {
  Root,
  TitleMessageDefault,
  SubMessageDefault,
  DefaultStatusIcon,
} from './LumaStatus.style';
import { LumaIcon } from '../LumaIcon';

const Message = (props: any) => {
  const { icon, titleMessage, helperMessage, iconAnimation } =
    props.children[0];
  return (
    <>
      {icon && (
        <DefaultStatusIcon>
          <LumaIcon
            iconCode={icon}
            type="regular"
            className={`${iconAnimation ? iconAnimation : ''}`}
          />
        </DefaultStatusIcon>
      )}
      {titleMessage && (
        <TitleMessageDefault>{titleMessage}</TitleMessageDefault>
      )}
      {helperMessage && <SubMessageDefault>{helperMessage}</SubMessageDefault>}
    </>
  );
};
const LoadingMessage = (props: any) => {
  const { icon, titleMessage, iconAnimation } = props.children[0];
  return (
    <>
      {icon && (
        <DefaultStatusIcon>
          <LumaIcon
            className={`${iconAnimation ? iconAnimation : ''}`}
            iconCode={icon}
            type="regular"
          />
        </DefaultStatusIcon>
      )}
      <TitleMessageDefault>{titleMessage}</TitleMessageDefault>
    </>
  );
};

export interface StatusProp {
  /** Type of the status */
  variant: 'progress' | 'failed';
  /** status aria label */
  ariaLabel: string;
  /** for adding teplate  */
  renderContent?: React.ReactElement<HTMLElement>;
  /** To change Default message */
  titleMessage?: string;
  /** To change Default helper message */
  helperMessage?: string;
  /** To change or add icon to the status */
  icon?: string;
  /** To add icon animation to the status */
  iconAnimate?: string;
  /** To add icon animation to the status */
  statusBorder?: boolean;
}

export const LumaStatus = ({
  variant,
  ariaLabel,
  titleMessage = variant === 'failed'
    ? 'We didn’t find anything.'
    : 'Thinking...',
  helperMessage = 'Try a specific symbol or company name for relevant results.',
  icon = variant === 'failed' ? 'exclamation-circle' : 'spinner',
  iconAnimate,
  statusBorder = false,
  renderContent = variant === 'failed' ? <Message /> : <LoadingMessage />,
  ...rest
}: StatusProp) => {
  return (
    <Root arial-label={ariaLabel} statusBorder={statusBorder} {...rest}>
      {variant === 'failed' ? (
        <div>
          {React.cloneElement(renderContent, {}, [
            {
              titleMessage: titleMessage,
              helperMessage: helperMessage,
              icon: icon,
              iconAnimation: iconAnimate,
            },
          ])}
        </div>
      ) : (
        <div>
          {React.cloneElement(renderContent, {}, [
            {
              titleMessage: titleMessage,
              icon: icon,
              iconAnimation: iconAnimate,
            },
          ])}
        </div>
      )}
    </Root>
  );
};
