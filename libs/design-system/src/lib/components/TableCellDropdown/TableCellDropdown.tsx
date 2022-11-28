import { MenuItem } from '../Dropdown/Dropdown';

import { GridDropdown } from './TableCellDropdown.styles';

export interface TableCellDropdownProps {
  /**
   * Selected value
   */
  value: number | string | null;
  /**
   * Dropdown options
   */
  items: MenuItem[];
  /**
   * Display color
   */
  displayColor?: string;
}

export const TableCellDropdown = ({
  value,
  items,
  displayColor,
}: TableCellDropdownProps) => {
  return (
    <GridDropdown
      items={items}
      placeholder={value}
      variant={'secondary'}
      displayColor={displayColor}
    />
  );
};
