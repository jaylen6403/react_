/// <reference types="react" />
import { Styles } from 'react-modal';
export interface LumaModalProps {
    /**
     * Modal's content
     */
    children: React.ReactNode;
    /**
     * Whether the modal is open
     */
    isOpen: boolean;
    /**
     * App's root element (for setting aria-hidden)
     */
    appElement: string | HTMLElement;
    /**
     * Callback fired after opening
     */
    onAfterOpen?: () => void;
    /**
     * Callback fired after closing
     */
    onAfterClose?: () => void;
    /**
     * Custom styling
     */
    style?: Styles;
    /**
     * Specifies whether to show the close button and its action
     */
    closeButton?: {
        show: boolean;
        handleClose: () => void;
    };
}
export declare function LumaModal({ children, isOpen, appElement, onAfterOpen, onAfterClose, style, closeButton, }: LumaModalProps): JSX.Element;
