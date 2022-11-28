import { ReactNode } from 'react';
interface DrawerProps {
    id?: string;
    children: ReactNode;
    isOpen: boolean;
    closeDrawer?: () => void;
    hasOverlay?: boolean;
}
export declare const Drawer: ({ id, children, isOpen, closeDrawer, hasOverlay, }: DrawerProps) => JSX.Element;
export {};
