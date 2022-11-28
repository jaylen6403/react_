/// <reference types="react" />
import { BaseMenuItem } from '../Dropdown/DropdownBase.types';
export interface MenuItem<T> extends BaseMenuItem {
    value: T;
}
interface ContextMenuProps<T> {
    ariaLabel?: string;
    ariaLabelledBy?: string;
    isDisabled?: boolean;
    items: MenuItem<T>[];
}
export declare function ContextMenu<T>({ ariaLabel, ariaLabelledBy, items, }: ContextMenuProps<T>): JSX.Element;
export {};
