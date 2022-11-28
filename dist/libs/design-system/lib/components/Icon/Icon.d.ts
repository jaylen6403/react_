import type { CSSProperties } from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
export declare type IconCode = IconName;
export interface IconProps {
    /**
     * Class name for the top level svg element.
     */
    className?: string;
    /**
     * Icon code corresponding to an SVG.
     */
    iconCode: IconCode;
    /**
     * Rotate icon in degrees.
     */
    rotate?: number;
    /**
     * CSS properties.
     */
    style?: CSSProperties;
    /**
     * prefix for icons, fal = light, far = regular, fas = strong
     */
    prefix?: 'fal' | 'fas' | 'far';
}
export declare const Icon: ({ className, iconCode, style, rotate, prefix, }: IconProps) => JSX.Element | null;
