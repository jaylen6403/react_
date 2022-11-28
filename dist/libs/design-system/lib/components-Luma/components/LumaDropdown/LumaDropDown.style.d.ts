import { LumaSingleDropDownProps } from './LumaDropDownBasicType';
export declare const Root: import("styled-components").StyledComponent<"div", any, Pick<LumaSingleDropDownProps, "fullWidth" | "size" | "error">, never>;
export declare const DropDownItemWrapper: import("styled-components").StyledComponent<"div", any, {
    variant: 'single' | 'multi' | undefined;
}, never>;
export declare const DropDownIcon: import("styled-components").StyledComponent<"span", any, {
    isSelected?: boolean | undefined;
}, never>;
export declare const StyledCheckbox: import("styled-components").StyledComponent<"div", any, {
    disabled: boolean | undefined;
    isChecked: boolean;
}, never>;
export declare const DropDownText: import("styled-components").StyledComponent<"span", any, {
    disabled?: boolean | undefined;
    isSelected?: boolean | undefined;
}, never>;
