/// <reference types="react" />
import { IconCode } from '../../LumaIcon';
export interface IconSwitchProps {
    /**
     * defines the icons that will be displayed on the right and left side of the switch
     */
    icons: {
        left: IconCode;
        right: IconCode;
    };
    /**
     * defines the icons that will be displayed on the right and left side of the switch
     */
    sizeVariant: 'small' | 'x_small';
    /**
     * if the value is true then the marker is on the right. If false - on the left.
     */
    checked: boolean;
    /**
     * Is switch disabled.
     */
    disabled?: boolean;
    /**
     * Change handler.
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const LumaIconSwitch: ({ icons, sizeVariant, checked, disabled, onChange, }: IconSwitchProps) => JSX.Element;
