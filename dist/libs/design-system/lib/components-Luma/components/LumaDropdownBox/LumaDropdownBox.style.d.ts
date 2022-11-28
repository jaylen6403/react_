import { DataItemProps } from '../LumaDropdown/LumaDropDownBasicType';
import { DropDownBoxInterface } from './LumaDropDownBox';
export declare const DropDownBox: import("styled-components").StyledComponent<"ul", any, Pick<DropDownBoxInterface<DataItemProps>, "variant" | "size" | "isOpen">, never>;
export declare const InnerBox: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const DropDownListElement: import("styled-components").StyledComponent<"li", any, {
    isHighlighted: boolean;
    isSelected?: boolean | undefined;
    disabled?: boolean | undefined;
}, never>;
export declare const DropDownSection: import("styled-components").StyledComponent<"div", any, {}, never>;
