/// <reference types="react" />
export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * Content rendered within the button.
     */
    children: React.ReactNode;
    /**
     * Disable the button.
     */
    disabled?: boolean;
    /**
     * Style variant.
     */
    variant: 'primary' | 'secondary' | 'delete';
}
export declare const Button: ({ children, variant, ...rest }: Props) => JSX.Element;
