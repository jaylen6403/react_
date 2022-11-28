/// <reference types="react" />
import { IconCode } from '../LumaIcon';
declare type ChipError = {
    hasError: boolean;
    position?: 'bottom' | 'side';
    errorMessage?: string;
};
declare const enum StateEnum {
    locked = "locked",
    removable = "removable"
}
export interface ChipProps {
    /**
     * Children appearing on the left side of the chip.
     */
    children: React.ReactNode;
    /**
     * Style variant.
     */
    variant: 'primary' | 'secondary' | 'tertiary' | 'icon';
    /**
     * State of chip.
     */
    state: keyof typeof StateEnum;
    /**
     * Whether the value part is disabled
     */
    disabled?: boolean;
    /**
     * Size of chip.
     */
    sizeVariant: 'regular' | 'small' | 'icon';
    /**
     * Whether the chip should have a value part
     */
    entry?: boolean;
    /**
     * Code of the icon to be displayed in the chip.
     */
    iconCode?: IconCode;
    /**
     * Defines action for delete
     */
    onRemove?: React.MouseEventHandler<HTMLDivElement>;
    /**
     * onChange action
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * onBlur action
     */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Sets a numeric value
     */
    value?: number;
    /**
     * Value units displayed
     */
    unit?: string;
    /**
     * Defines error
     */
    error?: ChipError;
    /**
     * Defines max length of input in entry part
     */
    entryMaxLength?: number;
}
export declare const LumaChip: ({ children, variant, state, disabled, sizeVariant, entry, iconCode, onRemove, onChange, onBlur, value, unit, error, entryMaxLength, }: ChipProps) => JSX.Element;
export {};
