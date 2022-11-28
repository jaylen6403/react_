import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { BaseMenuItem } from '../Dropdown/DropdownBase.types';
import { Divider } from '../Dropdown/DropdownBase.styles';
import {
  ContextMenuItem,
  ContextMenuContent,
  ContextMenuRoot,
  Instruction,
} from './ContextMenu.styles';

export interface MenuItem<T> extends BaseMenuItem {
  value: T;
}

interface ContextMenuProps<T> {
  ariaLabel?: string;
  ariaLabelledBy?: string;
  isDisabled?: boolean;
  items: MenuItem<T>[];
}

export function ContextMenu<T>({
  ariaLabel,
  ariaLabelledBy,
  items,
}: ContextMenuProps<T>) {
  return (
    <ContextMenuRoot>
      <ContextMenuPrimitive.Trigger>
        <Instruction>Right click Here!!!</Instruction>
      </ContextMenuPrimitive.Trigger>
      <ContextMenuContent alignOffset={-5} sideOffset={2}>
        {items.map((item, index) => {
          const itemProps = {
            item,
            index,
            disabled: item.isDisabled,
          };
          return (
            <React.Fragment key={`${item.display}-${index}`}>
              <ContextMenuItem
                {...itemProps}
                onSelect={() =>
                  console.log('You selected ', item.display, ' button')
                }
                aria-label={ariaLabel}
                aria-labelledby={ariaLabelledBy}
              >
                {item.display}
              </ContextMenuItem>

              {item.hasSectionBreak && <Divider />}
            </React.Fragment>
          );
        })}
      </ContextMenuContent>
    </ContextMenuRoot>
  );
}
