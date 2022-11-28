import { ReactNode } from 'react';
declare type ModalProps = {
    id?: string;
    children: ReactNode;
    isOpen: boolean;
    background?: string;
    top?: string;
    left?: string;
    position?: string;
};
export declare const Modal: ({ id, children, isOpen, background, top, left, position, }: ModalProps) => JSX.Element;
export {};
