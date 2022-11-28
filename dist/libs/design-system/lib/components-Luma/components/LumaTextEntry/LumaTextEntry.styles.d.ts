import type { TextEntryProps } from './LumaTextEntry';
export declare const SIZE_MAP: {
    small: {
        height: number;
        input: {
            padding: string;
            paddingFree: string;
        };
        label: {
            transform: string;
            opacity: string;
            fontSize: string;
        };
    };
    medium: {
        height: number;
        input: {
            padding: string;
            paddingFree: string;
        };
        label: {
            transform: string;
            opacity: string;
            fontSize: string;
        };
    };
    large: {
        height: number;
        input: {
            padding: string;
            paddingFree: string;
        };
        label: {
            transform: string;
            opacity: string;
            fontSize: string;
        };
    };
    x_small: {
        height: string;
        padding: string;
        fontSize: string;
        width: string;
    };
    icon_only: {
        height: string;
        padding: string;
        fontSize: string;
        width: string;
    };
};
export declare const TextEntryContainer: import("styled-components").StyledComponent<"span", any, Pick<TextEntryProps, "fullWidth" | "disabled">, never>;
export declare const IconInsideTextEntry: import("styled-components").StyledComponent<"label", any, Pick<TextEntryProps, "disabled">, never>;
export declare const TextEntryField: import("styled-components").StyledComponent<"span", any, Pick<TextEntryProps, "sizeVariant">, never>;
export declare const Input: import("styled-components").StyledComponent<"input", any, Pick<TextEntryProps, "disabled" | "readOnly" | "sizeVariant" | "variant" | "useByDropdown">, never>;
export declare const TextEntryMockContainer: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const TextEntryMockLabelContainer: import("styled-components").StyledComponent<"span", any, Pick<TextEntryProps, "sizeVariant">, never>;
export declare const TextEntryMockLabel: import("styled-components").StyledComponent<"label", any, {}, never>;
export declare const TextEntryHelper: import("styled-components").StyledComponent<"span", any, {}, never>;
