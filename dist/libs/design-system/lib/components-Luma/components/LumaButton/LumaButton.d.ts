import { ReactElement, MouseEventHandler, ButtonHTMLAttributes, ReactNode } from 'react';
import { LumaIcon } from '../LumaIcon';
export interface LumaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
    variant: 'primary' | 'secondary' | 'tertiary' | 'tertiary_positive' | 'tertiary_negative' | 'toggle_active' | 'toggle_inactive' | 'tabs_active' | 'tabs_inactive' | 'document_error' | 'remove';
    /**
     * Button size.
     */
    size: 'large' | 'medium' | 'small' | 'x_small' | 'icon_only' | 'toggle_xx_small' | 'toggle_small' | 'toggle_medium' | 'tab' | 'document_upload' | 'document_upload_remove';
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
    xmark?: boolean;
    /**
     * Specifies data test id for split part of the button
     */
    splitDataTestId?: string;
}
export declare const LumaButton: import("react").ForwardRefExoticComponent<LumaButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
