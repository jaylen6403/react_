import { fireEvent, render, screen } from '@testing-library/react';
import { LumaSingleDropDown } from './LumaSingleDropDown';
import {
  DataItemProps,
  LumaSingleDropDownProps,
} from '../LumaDropDownBasicType';

describe('LumaSingleDropdown', () => {
  const ITEMS: DataItemProps[] = [
    {
      label: 'Option 1',
      value: 'option1',
      checkboxIndex: 0,
    },
    {
      label: 'Option 2',
      value: 'option2',
      checkboxIndex: 1,
      isDisabled: true,
    },
    {
      label: 'Option 3',
      value: 'option3',
      checkboxIndex: 2,
      sectionName: 'Section',
    },
    {
      label: 'Option 4',
      value: 'option4',
      iconCode: 'folder-download',
      checkboxIndex: 3,
    },
  ];
  const placeholder = 'Field Entry';
  const lumaSingleDropdownArgs: LumaSingleDropDownProps = {
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
      <LumaSingleDropDown {...lumaSingleDropdownArgs} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should change value text', () => {
    const inputValue = 'test';
    render(<LumaSingleDropDown {...lumaSingleDropdownArgs} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });

  it('should be disabled', () => {
    render(<LumaSingleDropDown {...lumaSingleDropdownArgs} disabled={true} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input).toHaveProperty('disabled', true);
  });

  // For now, we are not filtering the results on the frontend.
  // The results will be filtered through the backend.
  it('should have list of options', () => {
    render(<LumaSingleDropDown {...lumaSingleDropdownArgs} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: ITEMS[0].value } });
    const list = screen.getAllByRole('option');
    expect(list.length).toEqual(ITEMS.length);
  });

  it('should change input value on click on option', () => {
    const itemIndex = 0;
    render(<LumaSingleDropDown {...lumaSingleDropdownArgs} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: ITEMS[0].label } });
    const list = screen.getAllByRole('option');
    expect(list.length).toEqual(ITEMS.length);
    fireEvent.click(list[itemIndex]);
    expect(input.value).toBe(ITEMS[itemIndex].label);
  });

  it('Should open dropdown after focus on input', () => {
    render(<LumaSingleDropDown {...lumaSingleDropdownArgs} />);
    expect(() => screen.getAllByRole('option')).toThrow();
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.click(input);
    const listAfterClick = screen.getAllByRole('option');
    expect(listAfterClick.length).toEqual(ITEMS.length);
  });

  it('Should have placeholder', () => {
    render(<LumaSingleDropDown {...lumaSingleDropdownArgs} />);
    screen.getByText(placeholder);
  });

  it('should have an error set', () => {
    const errorText = 'error';
    render(
      <LumaSingleDropDown
        {...lumaSingleDropdownArgs}
        error={true}
        helperText={errorText}
      />
    );
    screen.getByText(placeholder);
  });

  it('Should have the option set', () => {
    const defaultOption = ITEMS[3];
    render(
      <LumaSingleDropDown
        {...lumaSingleDropdownArgs}
        defaultSelectedItem={defaultOption}
      />
    );
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe(defaultOption.label);
  });

  it('It should not have value', () => {
    const inputValue = 'test';
    render(<LumaSingleDropDown {...lumaSingleDropdownArgs} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
    fireEvent.change(input, { target: { value: '' } });
    expect(input.value).toBe('');
  });

  it('Should allow the input value to be changed after selecting an option from the list', () => {
    const inputValue = 'test';
    const itemIndex = 0;
    render(<LumaSingleDropDown {...lumaSingleDropdownArgs} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: ITEMS[0].label } });
    const list = screen.getAllByRole('option');
    expect(list.length).toEqual(ITEMS.length);
    fireEvent.click(list[itemIndex]);
    expect(input.value).toBe(ITEMS[itemIndex].label);
    fireEvent.change(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });
});
