import {
  useEffect,
  useState,
  forwardRef,
  ReactElement,
  MouseEventHandler,
  Ref,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import { Root, Button, Split, Xmark } from './LumaButton.styles';
import { LumaIcon } from '../LumaIcon';

export interface LumaButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Content rendered within the button.
   */
  children?: ReactNode;
  /**
   * Disable the button.
   */
  disabled?: boolean;
  /**
   * Style variant.
   */
  variant:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'tertiary_positive'
    | 'tertiary_negative'
    | 'toggle_active'
    | 'toggle_inactive'
    | 'tabs_active'
    | 'tabs_inactive'
    | 'document_error'
    | 'remove';
  /**
   * Button size.
   */
  size:
    | 'large'
    | 'medium'
    | 'small'
    | 'x_small'
    | 'icon_only'
    | 'toggle_xx_small'
    | 'toggle_small'
    | 'toggle_medium'
    | 'tab'
    | 'document_upload'
    | 'document_upload_remove';

  /**
   * Specifies if this is a dropdown button
   */
  dropdown?: {
    isDropdown: boolean;
    isOpen: boolean;
    getToggleButtonProps: () => void;
  };
  /**
   * Code of the icon to be displayed in the button.
   */
  icon?: {
    iconComponent: ReactElement<typeof LumaIcon>;
    isOnRight?: boolean;
  };
  /**
   * Specifies onClick action.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /**
   * Specifies if this is the split button.
   */
  split?: boolean;
  /**
   * Disable only the split part
   */
  disabledSplit?: boolean;
  /**
   * Specifies role of a button.
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * Specifies if button width is set to 100%.
   */
  fullWidth?: boolean;
  /* Specifies if this is the x mark.
   */
  xmark?: boolean;
  /**
   * Specifies data test id for split part of the button
   */
  splitDataTestId?: string;
}

export const LumaButton = forwardRef<HTMLButtonElement, LumaButtonProps>(
  function LumaButton(
    componentProps: LumaButtonProps,
    forwardedRef: Ref<HTMLButtonElement>
  ) {
    const {
      children,
      variant = 'primary',
      disabled = false,
      icon,
      size = 'medium',
      dropdown = {
        isDropdown: false,
        isOpen: false,
        getToggleButtonProps: function (): void {
          throw new Error('Function not implemented.');
        },
      },
      onClick,
      split = false,
      disabledSplit = false,
      type = 'button',
      className,
      fullWidth = false,
      xmark,
      splitDataTestId = 'button-luma_split',
      ...rest
    }: LumaButtonProps = componentProps;

    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
      setDropdownOpen(dropdown.isOpen);
    }, [dropdown.isOpen]);

    const getDropdownPropsButtonIfNeeded = () => {
      if (!split && dropdown.isDropdown) {
        return dropdown.getToggleButtonProps();
      }
      return null;
    };

    const getDropdownPropsSplitIfNeeded = () => {
      if (split) {
        return dropdown.getToggleButtonProps();
      }
      return null;
    };
    const dropdownPropsButton = getDropdownPropsButtonIfNeeded() ?? {};
    const dropdownPropsSplit = getDropdownPropsSplitIfNeeded() ?? {};
    return (
      <Root
        fullWidth={fullWidth}
        size={size}
        dropdown={dropdown}
        className={className}
      >
        <Button
          icon={icon}
          onClick={onClick}
          variant={variant}
          size={size}
          split={split}
          ref={forwardedRef}
          {...dropdownPropsButton}
          type={type}
          disabled={disabled}
          fullWidth={fullWidth}
          {...rest}
          xmark={xmark}
        >
          {icon?.iconComponent}
          {children}
          {dropdown.isDropdown && (
            <LumaIcon iconCode={dropdownOpen ? 'angle-up' : 'angle-down'} />
          )}
          {xmark && (
            <Xmark>
              <LumaIcon iconCode="xmark" />
            </Xmark>
          )}
        </Button>

        {split && (
          <Split
            variant={variant}
            disabled={disabledSplit}
            {...dropdownPropsSplit}
            data-testid={splitDataTestId}
          >
            <LumaIcon iconCode={dropdownOpen ? 'angle-up' : 'angle-down'} />
          </Split>
        )}
      </Root>
    );
  }
);
