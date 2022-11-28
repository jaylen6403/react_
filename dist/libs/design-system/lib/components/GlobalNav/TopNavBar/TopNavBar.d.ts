/// <reference types="react" />
interface Props {
    userName: string;
    isMobile: boolean;
    logout: () => void;
    /**
     * outside company logo img source
     */
    issuerLogo?: string;
    /**
     * defines variant to be used for styling
     */
    variantType: 'primary' | 'secondary';
    /**
     * width property of logo
     */
    logoWidth?: string;
    /**
     * height property of logo
     */
    logoHeight?: string;
    /**
     * aria label for the profile/account button
     */
    accountAriaLabel: string;
}
export declare const TopNavBar: ({ issuerLogo, logoWidth, logoHeight, accountAriaLabel, variantType, userName, isMobile, logout, }: Props) => JSX.Element;
export {};
