/// <reference types="react" />
import { MenuItem } from '../Dropdown/Dropdown';
export interface TableCellDropdownProps {
    /**
     * Selected value
     */
    value: number | string | null;
    /**
     * Dropdown options
     */
    items: MenuItem[];
    /**
     * Display color
     */
    displayColor?: string;
}
export declare const TableCellDropdown: ({ value, items, displayColor, }: TableCellDropdownProps) => JSX.Element;
