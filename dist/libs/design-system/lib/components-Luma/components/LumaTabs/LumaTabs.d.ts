/// <reference types="react" />
import { IconCode } from '../LumaIcon';
interface FieldValues {
    paramName: string;
    label: string;
    isDisabled?: boolean;
}
declare const enum VariantEnum {
    buttons = "buttons",
    links = "links"
}
export interface TabsProps {
    /**
     * Determines whether the Tabs component is to be composed of buttons or links
     */
    variant: keyof typeof VariantEnum;
    /**
     * Currently selected value.
     */
    activeValue?: string;
    /**
     * List of tabs.
     */
    fieldValues: FieldValues[];
    /**
     * Handler of click which receives paramName of clicked tab.
     */
    onClick: (paramName: string) => void;
    /**
     * Code of the icon to be displayed in buttons.
     */
    buttonIconCode: IconCode;
}
export declare const LumaTabs: ({ variant, activeValue, fieldValues, onClick, buttonIconCode, }: TabsProps) => JSX.Element;
export {};
