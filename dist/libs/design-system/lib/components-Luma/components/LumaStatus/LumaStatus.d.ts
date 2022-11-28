import * as React from 'react';
export interface StatusProp {
    /** Type of the status */
    variant: 'progress' | 'failed';
    /** status aria label */
    ariaLabel: string;
    /** for adding teplate  */
    renderContent?: React.ReactElement<HTMLElement>;
    /** To change Default message */
    titleMessage?: string;
    /** To change Default helper message */
    helperMessage?: string;
    /** To change or add icon to the status */
    icon?: string;
    /** To add icon animation to the status */
    iconAnimate?: string;
    /** To add icon animation to the status */
    statusBorder?: boolean;
}
export declare const LumaStatus: ({ variant, ariaLabel, titleMessage, helperMessage, icon, iconAnimate, statusBorder, renderContent, ...rest }: StatusProp) => JSX.Element;
