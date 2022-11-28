/// <reference types="react" />
export declare type LumaValidUntilProps = {
    /** Callback with entered minutes passed in as argument */
    onChange: (validUntil: number | undefined) => void;
    inputDataTestId?: string;
    buttonDataTestId?: string;
};
export declare function LumaValidUntil({ onChange, inputDataTestId, buttonDataTestId, }: LumaValidUntilProps): JSX.Element;
