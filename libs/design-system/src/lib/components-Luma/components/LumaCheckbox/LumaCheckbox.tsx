import {
  CheckboxContainer,
  StyledCheckbox,
  HiddenCheckbox,
} from './LumaCheckbox.style';
import { LumaIcon } from '../LumaIcon';

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * The label that is rendered to the right of the checkbox marker.
   */
  label?: React.ReactNode;
  /**
   * Determines whether the checkbox is disabled.
   */
  disabled?: boolean;
  /**
   * Determines whether the checkbox is checked.
   */
  checked?: boolean;
  /**
   * React key prop from checkbox.
   */
  checkboxKey: string;
  /**
   * onChange action on checkbox.
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LumaCheckbox = ({
  label,
  disabled = false,
  checked = false,
  checkboxKey,
  onChange,
  ...rest
}: CheckboxProps) => {
  return (
    <CheckboxContainer
      disabled={disabled}
      checked={checked}
      key={checkboxKey}
      htmlFor={`checkbox ${checkboxKey}`}
    >
      <HiddenCheckbox
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        id={`checkbox ${checkboxKey}`}
        key={checkboxKey}
        {...rest}
      />
      <StyledCheckbox checked={checked} disabled={disabled}>
        {checked && <LumaIcon iconCode={'check'} />}
      </StyledCheckbox>
      {label}
    </CheckboxContainer>
  );
};
