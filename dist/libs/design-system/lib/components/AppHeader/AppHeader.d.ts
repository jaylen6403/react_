/// <reference types="react" />
export interface Props {
    /**
     * Class name for the header element.
     */
    className?: string;
    /**
     * Heading of the header.
     */
    title: React.ReactNode;
    /**
     * Content displayed in the center.
     */
    centerContent?: React.ReactNode;
    /**
     * Content displayed on the right.
     */
    rightContent?: React.ReactNode;
}
export declare const AppHeader: ({ className, title, centerContent, rightContent, }: Props) => JSX.Element;
