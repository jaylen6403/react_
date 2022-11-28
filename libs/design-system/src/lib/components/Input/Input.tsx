import { Root } from './Input.styles';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Class name for input element.
   */
  className?: string;
  /**
   * Disable the button.
   */
  disabled: boolean;
  /**
   * Disable the button.
   */
  hasError: boolean;
  /**
   * Placeholder text for input element.
   */
  placeholder?: string;
}

export const Input = ({ hasError = false, ...rest }: Props) => {
  return <Root hasError={hasError} {...rest} />;
};
