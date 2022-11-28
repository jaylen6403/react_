import { LumaFont } from './LumaFonts';
interface LumaFontsProps {
    font: keyof typeof LumaFont.DEFAULT;
    size: string;
}
export declare const DIMENSION_MAP: {
    fontSizes: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        b1: string;
        b2: string;
        b3: string;
        b4: string;
    };
};
export declare const LumaFontsIBM: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export declare const LumaDimensions: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export declare const Text: import("styled-components").StyledComponent<"div", any, LumaFontsProps, never>;
export {};
