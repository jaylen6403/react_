/// <reference types="react" />
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
export declare const LumaRadio: ({ label, disabled, checked, onChange, value, ...rest }: RadioProps) => JSX.Element;
