/// <reference types="react" />
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
export declare const Option: ({ children, checked, onChange, disabled, key, ...rest }: Props) => JSX.Element;
