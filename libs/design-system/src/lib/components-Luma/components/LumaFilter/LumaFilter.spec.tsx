import { fireEvent, render, screen } from '@testing-library/react';
import { LumaFilter, FilterProps } from './LumaFilter';
import { DataItemProps } from '../LumaDropdown/LumaDropDownBasicType';

describe('LumaFilter', () => {
  const onChangeMock = jest.fn();
  const ITEMS: DataItemProps[] = [
    {
      label: 'First Checkbox',
      value: 'option1',
      checkboxIndex: 0,
    },
    {
      label: 'Second Checkbox - Disabled',
      value: 'option2',
      checkboxIndex: 1,
      isDisabled: true,
    },
    {
      label: 'Third Checkbox - Section',
      value: 'option3',
      checkboxIndex: 2,
      sectionName: 'Section',
    },
    {
      label: 'Fourth Option',
      value: 'option4',
      iconCode: 'folder-download',
      checkboxIndex: 3,
    },
  ];
  const filterArgs: FilterProps = {
    id: 'filter',
    dropdownItems: ITEMS,
    onChangeDropdown: onChangeMock,
  };
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle click on filter', () => {
    render(<LumaFilter {...filterArgs} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const listAfterClick = screen.getAllByRole('option');
    expect(listAfterClick.length).toEqual(ITEMS.length);
  });

  it('should handle click on item', () => {
    render(<LumaFilter {...filterArgs} />);
    const itemIndex = 0;
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const listAfterClick = screen.getAllByRole('option');
    expect(listAfterClick.length).toEqual(ITEMS.length);
    fireEvent.click(listAfterClick[itemIndex]);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    screen.getByText(ITEMS[itemIndex].label || '');
  });

  it('should handle click on disabled item', () => {
    render(<LumaFilter {...filterArgs} />);
    const itemIndex = 1;
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const listAfterClick = screen.getAllByRole('option');
    expect(listAfterClick.length).toEqual(ITEMS.length);
    fireEvent.click(listAfterClick[itemIndex]);
    expect(onChangeMock).toHaveBeenCalledTimes(0);
    screen.getByText(ITEMS[itemIndex].label || '');
  });

  it('should be disabled', () => {
    render(<LumaFilter {...filterArgs} disabled={true} />);
    const filter = screen.getByRole('button') as HTMLButtonElement;
    expect(filter).toHaveProperty('disabled', true);
  });

  it('should set default value', () => {
    const defaultValue = ITEMS[0];
    render(<LumaFilter {...filterArgs} defaltValue={defaultValue} />);
    screen.getByText(defaultValue.label || '');
  });
});
