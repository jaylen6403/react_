import type { CSSProperties, MouseEventHandler } from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
export declare type IconCode = IconName;
declare const iconTypesDictionary: {
    solid: "fas";
    regular: "far";
    light: "fal";
    duotone: "fad";
};
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
     * Icon visual type.
     */
    type?: keyof typeof iconTypesDictionary;
    /**
     * Specifies onClick action.
     */
    onClick?: MouseEventHandler<SVGSVGElement>;
}
export declare const LumaIcon: ({ className, iconCode, type, style, rotate, onClick, }: IconProps) => JSX.Element;
export {};
