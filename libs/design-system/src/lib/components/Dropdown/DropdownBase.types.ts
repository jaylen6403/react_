export interface BaseMenuItem {
  /**
   * Display text.
   */
  display: React.ReactNode;
  /**
   * Item with a divider below.
   */
  hasSectionBreak?: boolean;
  /**
   * Whether an item is disabled.
   */
  isDisabled?: boolean;
}
