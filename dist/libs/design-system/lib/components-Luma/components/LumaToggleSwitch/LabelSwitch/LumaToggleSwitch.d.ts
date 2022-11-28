/// <reference types="react" />
declare type ToggleSwitchLabel = {
    position: 'top' | 'side';
    textChecked: string;
    textUnchecked: string;
};
export interface ToggleSwitchProps {
    /**
     * Toggle Switch label.
     */
    label: ToggleSwitchLabel;
    /**
     * Is switch checked.
     */
    checked: boolean;
    /**
     * Is switch disabled.
     */
    disabled: boolean;
    /**
     * Change handler.
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const LumaToggleSwitch: ({ label, checked, disabled, onChange, }: ToggleSwitchProps) => JSX.Element;
export {};
