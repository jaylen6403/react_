/// <reference types="react" />
import { IconCode } from '../LumaIcon';
export interface IconLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    /**
     * Specifies the icon.
     */
    iconCode: IconCode;
    /**
     * Specifies label that will be displayed next to the icon.
     */
    label: string;
    /**
     * Link size.
     */
    sizeVariant: 'medium' | 'small';
    /**
     * Disable the link.
     */
    disabled?: boolean;
}
export declare const LumaIconLink: ({ iconCode, label, sizeVariant, disabled, ...rest }: IconLinkProps) => JSX.Element;
