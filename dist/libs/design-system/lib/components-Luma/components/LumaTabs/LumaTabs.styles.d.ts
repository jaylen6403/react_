import type { TabsProps } from './LumaTabs';
interface Props extends TabsProps {
    active: boolean;
    disabled: boolean;
}
export declare const TabsContainer: import("styled-components").StyledComponent<"div", any, Pick<Props, "variant">, never>;
export declare const Indicator: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Link: import("styled-components").StyledComponent<"a", any, Pick<Props, "active" | "disabled">, never>;
export {};
