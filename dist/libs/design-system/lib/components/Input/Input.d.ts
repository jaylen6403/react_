/// <reference types="react" />
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
export declare const Input: ({ hasError, ...rest }: Props) => JSX.Element;
