/// <reference types="react" />
interface CardProps {
    backgroundColor?: string;
    borderRadius?: number;
    flexDirection?: string;
    margin?: number;
    padding?: number;
    children: React.ReactNode;
}
export declare const Card: ({ backgroundColor, borderRadius, flexDirection, margin, padding, children, }: CardProps) => JSX.Element;
export {};
