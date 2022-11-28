import {
  ToggleButtonContainer,
  Title,
  ButtonWrapper,
} from './LumaToggleButton.styles';
import { LumaButton, LumaButtonProps } from '../LumaButton';

interface FieldValues {
  paramName: string;
  label: string;
  isDisabled?: boolean;
}

export interface ToggleButtonProps {
  /**
   * Currently selected value.
   */
  activeValue: string;
  /**
   * List of toggles.
   */
  fieldValues: FieldValues[];
  /**
   * The title toggle for the button that will be displayed above.
   */
  title?: string;
  /**
   * Button size.
   */
  size?: LumaButtonProps['size'];
  /**
   * Handler of click which receives paramName of clicked button.
   */
  onClick: (paramName: string) => void;
}

export const LumaToggleButton = ({
  activeValue,
  fieldValues,
  title,
  size = 'toggle_medium',
  onClick,
}: ToggleButtonProps) => {
  return (
    <ToggleButtonContainer>
      {title && <Title>{title}</Title>}
      <ButtonWrapper>
        {fieldValues.map(({ label, paramName, isDisabled }) => {
          const onButtonClick = () => {
            onClick(paramName);
          };
          const isActive = paramName === activeValue;
          return (
            <LumaButton
              key={paramName}
              variant={isActive ? 'toggle_active' : 'toggle_inactive'}
              size={size}
              disabled={isDisabled || false}
              onClick={onButtonClick}
            >
              {label}
            </LumaButton>
          );
        })}
      </ButtonWrapper>
    </ToggleButtonContainer>
  );
};
