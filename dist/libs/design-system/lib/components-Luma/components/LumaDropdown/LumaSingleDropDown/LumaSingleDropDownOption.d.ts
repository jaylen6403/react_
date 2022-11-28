/// <reference types="react" />
import { DataItemProps } from '../LumaDropDownBasicType';
interface LumaSingleDropDownOptionProps<DataItemProps> {
    disabled?: boolean;
    isSelected?: boolean;
    item?: DataItemProps;
}
export declare const LumaSingleDropDownOption: ({ item, isSelected, }: LumaSingleDropDownOptionProps<DataItemProps>) => JSX.Element;
export {};
