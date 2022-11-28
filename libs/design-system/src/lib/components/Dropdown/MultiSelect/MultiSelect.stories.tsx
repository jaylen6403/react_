import { useMemo, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MultiSelect, MenuItem } from './MultiSelect';

const ITEMS = [
  { display: 'Item 1', meta: 'item-1' },
  { display: 'Item 2', meta: 'item-2' },
  { display: 'Item 3', meta: 'item-3', isDisabled: true },
];

const SCROLLABLE_ITEMS = Array(100)
  .fill(undefined)
  .map((_, index) => ({
    display: `Item ${index}`,
    value: `item-${index}`,
  }));

export default {
  title: 'Secondaries/MultiSelect',
  component: MultiSelect,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/o3qGIAEVUqKGVJSrUuSxRQ/Secondary-Market?node-id=176%3A181',
    },
  },
} as ComponentMeta<typeof MultiSelect>;

const Template: ComponentStory<typeof MultiSelect> = (args) => {
  const [items, setItems] = useState([]);
  const onChange = (i: any) => {
    setItems(i);
  };
  return <MultiSelect {...args} selectedItems={items} onChange={onChange} />;
};

export const Default = Template.bind({});
Default.args = {
  items: ITEMS,
  placeholder: 'Edit Columns',
};

export const Secondary = Template.bind({});
Secondary.args = {
  items: ITEMS,
  placeholder: 'Edit Columns',
  variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  items: ITEMS,
  placeholder: 'Edit Columns',
  variant: 'tertiary',
};

export const Scrollable = Template.bind({});
Scrollable.args = {
  items: SCROLLABLE_ITEMS,
  placeholder: 'Edit Columns',
};

export const SelectAll: ComponentStory<typeof MultiSelect> = (args) => {
  const [items, setItems] = useState<MenuItem<string>[]>([]);
  const selectableItems = useMemo(
    () => ITEMS.filter((item) => !item.isDisabled),
    []
  );
  const SELECT_ALL: MenuItem<string>[] = useMemo(
    () => [
      {
        alignment: 'center',
        display: 'SELECT ALL',
        meta: 'select-all',
        onClick: () => setItems(selectableItems),
        isDisabled: items.length === selectableItems.length,
        width: '50%',
      },
      {
        alignment: 'center',
        display: 'CLEAR ALL',
        meta: 'clear-all',
        onClick: () => setItems([]),
        isDisabled: items.length === 0,
        width: '50%',
      },
    ],
    [items, selectableItems, setItems]
  );

  const onChange = (i: any) => {
    setItems(i);
  };
  return (
    <MultiSelect
      {...args}
      actions={SELECT_ALL}
      items={ITEMS}
      onChange={onChange}
      placeholder="Edit Columns"
      selectedItems={items}
    />
  );
};
