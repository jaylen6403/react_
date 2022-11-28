import { HTMLAttributes } from 'react';
export declare const SIZE_MAP: {
    small: {
        height: number;
    };
    medium: {
        height: number;
    };
    large: {
        height: number;
    };
};
interface TextSearchStyleProps extends HTMLAttributes<HTMLDivElement> {
    error?: boolean;
    readOnly?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
    sizeVariant: keyof typeof SIZE_MAP;
}
export declare const TextSearchContainer: import("styled-components").StyledComponent<"div", any, Pick<TextSearchStyleProps, "fullWidth" | "sizeVariant">, never>;
export declare const HelperText: import("styled-components").StyledComponent<"span", any, Pick<TextSearchStyleProps, "error">, never>;
export declare const DropDownItemWrapper: import("styled-components").StyledComponent<"div", any, {
    variant?: 'standard' | 'underlier' | undefined;
}, never>;
export declare const DropItem: import("styled-components").StyledComponent<"p", any, {
    variant?: 'standard' | 'underlier' | undefined;
}, never>;
export declare const SearchIcon: import("styled-components").StyledComponent<"div", any, Pick<TextSearchStyleProps, "disabled">, never>;
export declare const HiddenInput: import("styled-components").StyledComponent<"input", any, {}, never>;
export declare const InputContainer: import("styled-components").StyledComponent<"div", any, Pick<TextSearchStyleProps, "error" | "disabled" | "sizeVariant">, never>;
export declare const ClearIcon: import("styled-components").StyledComponent<"button", any, {}, never>;
export {};
