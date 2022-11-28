/// <reference types="react" />
import { DataItemProps } from '../LumaDropDownBasicType';
interface LumaMultiDropDownOptionProps {
    selectedItems?: DataItemProps[];
    disabled?: boolean;
    item?: DataItemProps;
}
export declare const LumaMultiDropDownOption: ({ selectedItems, item, disabled, }: LumaMultiDropDownOptionProps) => JSX.Element;
export {};
