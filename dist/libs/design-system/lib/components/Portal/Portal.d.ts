import { ReactNode } from 'react';
declare type PortalProps = {
    id?: string;
    children: ReactNode;
};
export declare const Portal: ({ id, children }: PortalProps) => import("react").ReactPortal;
export {};
