import { Root, HiddenCheckbox, Label } from './Option.style';
import { Icon } from '../Icon/Icon';

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * Label of option.
   */
  children: React.ReactNode;
  /**
   * Disable the checkbox.
   */
  disabled?: boolean;

  checked?: boolean;

  key: string;

  onChange?: () => void;
}

export const Option = ({
  children,
  checked,
  onChange,
  disabled,
  key,
  ...rest
}: Props) => {
  const getIcon = () => {
    return checked ? 'check-square' : 'square';
  };

  return (
    <Root
      disabled={disabled}
      checked={checked}
      key={key}
      htmlFor={`option ${key}`}
    >
      <HiddenCheckbox
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        id={`option ${key}`}
      />
      <Icon
        iconCode={getIcon()}
        style={{
          padding: '0.375rem',
          fontSize: '0.875rem',
        }}
      />
      <Label key={key}>{children}</Label>
    </Root>
  );
};
