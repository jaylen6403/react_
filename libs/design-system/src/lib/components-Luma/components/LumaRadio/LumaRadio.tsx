import { RadioContainer, StyledRadio, HiddenRadio } from './LumaRadio.styles';

export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * The label that is rendered to the right of the radio marker.
   */
  label?: React.ReactNode;
  /**
   * Determines whether the radio is disabled.
   */
  disabled?: boolean;
  /**
   * Determines whether the radio is checked.
   */
  checked?: boolean;
  /**
   * onChange action on radio.
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * The value associated with the radio.
   */
  value?: string;
}

export const LumaRadio = ({
  label,
  disabled = false,
  checked = false,
  onChange,
  value = 'radio',
  ...rest
}: RadioProps) => {
  return (
    <RadioContainer disabled={disabled} checked={checked}>
      <HiddenRadio
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        value={value}
        {...rest}
      />
      <StyledRadio checked={checked} disabled={disabled} />
      {label}
    </RadioContainer>
  );
};
