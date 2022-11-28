import { fireEvent, render, screen } from '@testing-library/react';
import { LumaMultiDropDown } from './LumaMultiDropDown';
import {
  DataItemProps,
  LumaMultiDropDownProps,
  MaxLengthValue,
} from '../LumaDropDownBasicType';

describe('LumaMultiDropdown', () => {
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
      label: 'Fourth Option with very long label',
      value: 'option4',
      iconCode: 'folder-download',
      checkboxIndex: 3,
    },
  ];
  const placeholder = 'Field Entry';
  const lumaMultiDropdownArgs: LumaMultiDropDownProps = {
    placeholder: placeholder,
    name: 'test dropdown',
    id: 'test-dropdown',
    items: ITEMS,
    readOnly: false,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <LumaMultiDropDown {...lumaMultiDropdownArgs} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should be disabled', () => {
    render(<LumaMultiDropDown {...lumaMultiDropdownArgs} disabled={true} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input).toHaveProperty('disabled', true);
  });

  // For now, we are not filtering the results on the frontend.
  // The results will be filtered through the backend.
  it('should have list of options', () => {
    render(<LumaMultiDropDown {...lumaMultiDropdownArgs} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.click(input);
    const list = screen.getAllByRole('option');
    expect(list.length).toEqual(ITEMS.length);
  });

  it('should change input value on click on option', () => {
    const itemIndex = 0;
    render(<LumaMultiDropDown {...lumaMultiDropdownArgs} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.click(input);
    const list = screen.getAllByRole('option');
    expect(list.length).toEqual(ITEMS.length);
    fireEvent.click(list[itemIndex]);
    const inputWithValue = screen.getByRole('textbox') as HTMLInputElement;
    expect(inputWithValue.value).toBe(ITEMS[itemIndex].label);
  });

  it('should change input value on click on long option', () => {
    const itemIndex = 3;
    render(<LumaMultiDropDown {...lumaMultiDropdownArgs} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.click(input);
    const list = screen.getAllByRole('option');
    expect(list.length).toEqual(ITEMS.length);
    fireEvent.click(list[itemIndex]);
    const inputWithValue = screen.getByRole('textbox') as HTMLInputElement;
    expect(inputWithValue.value).toBe(
      ITEMS[itemIndex]?.label?.substring(0, MaxLengthValue) + '...'
    );
  });

  it('should handle click on many options', () => {
    const itemsIndexToClick = [0, 2, 3];
    render(<LumaMultiDropDown {...lumaMultiDropdownArgs} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.click(input);
    const list = screen.getAllByRole('option');
    expect(list.length).toEqual(ITEMS.length);
    for (const index of itemsIndexToClick) {
      fireEvent.click(list[index]);
    }
    const inputWithValue = screen.getByRole('textbox') as HTMLInputElement;
    expect(inputWithValue.value).toBe(
      `${ITEMS[itemsIndexToClick[0]].label}, +${itemsIndexToClick.length - 1}`
    );
  });

  it('should handle click on disabled item', () => {
    const itemsIndex = 1;
    render(<LumaMultiDropDown {...lumaMultiDropdownArgs} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.click(input);
    const list = screen.getAllByRole('option');
    expect(list.length).toEqual(ITEMS.length);
    fireEvent.click(list[itemsIndex]);
    const inputWithValue = screen.getByRole('textbox') as HTMLInputElement;
    expect(inputWithValue.value).toBe('');
  });

  it('should handle uncheck option', () => {
    const itemsIndex = 0;
    render(<LumaMultiDropDown {...lumaMultiDropdownArgs} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.click(input);
    const list = screen.getAllByRole('option');
    expect(list.length).toEqual(ITEMS.length);
    fireEvent.click(list[itemsIndex]);
    const inputWithValue = screen.getByRole('textbox') as HTMLInputElement;
    expect(inputWithValue.value).toBe(ITEMS[itemsIndex].label);
    fireEvent.click(list[itemsIndex]);
    const inputWithoutValue = screen.getByRole('textbox') as HTMLInputElement;
    expect(inputWithoutValue.value).toBe('');
  });
});
