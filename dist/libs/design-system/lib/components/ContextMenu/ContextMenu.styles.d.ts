/// <reference types="react" />
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
interface MenuItemProps {
    isAction?: boolean;
    width?: string;
}
interface RootProps {
    isOpen?: boolean;
}
export declare const ContextMenuItem: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuItemProps & import("react").RefAttributes<HTMLDivElement>>, any, MenuItemProps, never>;
export declare const ContextMenuContent: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuContentProps & import("react").RefAttributes<HTMLDivElement>>, any, {}, never>;
export declare const ContextMenuRoot: import("styled-components").StyledComponent<import("react").FC<ContextMenuPrimitive.ContextMenuProps>, any, RootProps, never>;
export declare const Instruction: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
