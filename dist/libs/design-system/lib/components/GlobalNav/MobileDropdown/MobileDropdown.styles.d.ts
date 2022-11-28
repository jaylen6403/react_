/// <reference types="react" />
import { Variant } from '..';
export declare const MobileTabWrapper: import("styled-components").StyledComponent<"div", any, {
    dropdownActive?: boolean | undefined;
    variantType: Variant;
}, never>;
export declare const MobileTabButton: import("styled-components").StyledComponent<"button", any, {
    isDropdown?: boolean | undefined;
    variantType: Variant;
    isActive?: boolean | undefined;
}, never>;
export declare const DropdownIcon: import("styled-components").StyledComponent<({ className, iconCode, style, rotate, prefix, }: import("../../Icon/Icon").IconProps) => JSX.Element | null, any, {
    variantType: Variant;
}, never>;
export declare const ActiveButtonHighlight: import("styled-components").StyledComponent<"div", any, {
    isActive: boolean;
    variantType: Variant;
}, never>;
export declare const MobileDropdownWrapper: import("styled-components").StyledComponent<"ul", any, {
    variantType: Variant;
}, never>;
export declare const MobileListButton: import("styled-components").StyledComponent<"button", any, {
    variantType: Variant;
}, never>;
export declare const MobileListWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
