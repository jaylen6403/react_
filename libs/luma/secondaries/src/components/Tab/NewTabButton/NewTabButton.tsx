import { Root } from './NewTabButton.styles';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Content rendered within the button.
   */
  children: React.ReactNode;
  /**
   * Disable the button.
   */
  disabled: boolean;
  /**
   * Style variant.
   */
  variant: 'primary' | 'secondary';
}

export const NewTabButton = ({
  children,
  variant = 'primary',
  ...rest
}: Props) => {
  return (
    <Root variant={variant} {...rest}>
      {children}
    </Root>
  );
};
