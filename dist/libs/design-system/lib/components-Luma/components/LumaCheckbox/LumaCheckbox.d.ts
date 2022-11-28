/// <reference types="react" />
export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
    /**
     * The label that is rendered to the right of the checkbox marker.
     */
    label?: React.ReactNode;
    /**
     * Determines whether the checkbox is disabled.
     */
    disabled?: boolean;
    /**
     * Determines whether the checkbox is checked.
     */
    checked?: boolean;
    /**
     * React key prop from checkbox.
     */
    checkboxKey: string;
    /**
     * onChange action on checkbox.
     */
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const LumaCheckbox: ({ label, disabled, checked, checkboxKey, onChange, ...rest }: CheckboxProps) => JSX.Element;
