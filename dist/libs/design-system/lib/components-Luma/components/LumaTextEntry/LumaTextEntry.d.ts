import { ChangeEvent, FocusEvent, ReactNode } from 'react';
declare const enum VariantEnum {
    free = "free",
    label = "label"
}
export interface TextEntryProps {
    /**a unique key for the field */
    id?: string;
    /**which act as placeholder initially when type anything it will act as label of the textbox */
    label?: string;
    /**htmlForwhich will help label will target for  */
    htmlFor?: string;
    /**Type of the field*/
    type?: string;
    /**it will be the value enter*/
    value?: string;
    defaultValue?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    /**onBlur action*/
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    className?: string;
    /**Error will act when user need to show validation error*/
    error?: boolean;
    /**helpr will show below the input field*/
    helperText?: string;
    /**readonly : cannot Enter or fill value*/
    readOnly?: boolean;
    /**fullwidth will make the field 100% width*/
    fullWidth?: boolean;
    /**disabled will disable the field
     * @default false
     */
    disabled?: boolean;
    /**size will make the field small, medium or large size
     *@default medium*/
    sizeVariant?: 'small' | 'medium' | 'large';
    icon?: ReactNode;
    variant?: keyof typeof VariantEnum;
    useByDropdown?: boolean;
}
export declare const LumaTextEntry: import("react").ForwardRefExoticComponent<TextEntryProps & import("react").RefAttributes<HTMLInputElement>>;
export default LumaTextEntry;
