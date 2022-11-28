import { Input, Switch, ToggleSwitchContainer } from './LumaToggleSwitch.style';

type ToggleSwitchLabel = {
  position: 'top' | 'side';
  textChecked: string;
  textUnchecked: string;
};

export interface ToggleSwitchProps {
  /**
   * Toggle Switch label.
   */
  label: ToggleSwitchLabel;
  /**
   * Is switch checked.
   */
  checked: boolean;
  /**
   * Is switch disabled.
   */
  disabled: boolean;
  /**
   * Change handler.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LumaToggleSwitch = ({
  label,
  checked = false,
  disabled = false,
  onChange,
}: ToggleSwitchProps) => {
  return (
    <ToggleSwitchContainer
      checked={checked}
      label={label}
      disabled={disabled}
      data-testid="toggle-test-id"
    >
      <span>{checked ? label.textChecked : label.textUnchecked}</span>
      <Input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <Switch disabled={disabled} />
    </ToggleSwitchContainer>
  );
};
