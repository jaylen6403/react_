/// <reference types="react" />
export declare type Variant = 'primary' | 'secondary' | 'tertiary';
export interface MenuItemProps {
    alignment: 'left' | 'center' | 'right';
    disabled?: boolean;
    isAction?: boolean;
    isHighlighted?: boolean;
    variant: Variant;
    width?: string;
}
export interface RootProps {
    isOpen?: boolean;
    variant: Variant;
}
export declare const DropdownHeader: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const DropdownIcon: import("styled-components").StyledComponent<({ className, iconCode, style, rotate, prefix, }: import("../Icon/Icon").IconProps) => JSX.Element | null, any, {}, never>;
export declare const Divider: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MenuItem: import("styled-components").StyledComponent<"li", any, MenuItemProps, never>;
export declare const Menu: import("styled-components").StyledComponent<"ul", any, {}, never>;
export declare const Button: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const Root: import("styled-components").StyledComponent<"div", any, RootProps, never>;
