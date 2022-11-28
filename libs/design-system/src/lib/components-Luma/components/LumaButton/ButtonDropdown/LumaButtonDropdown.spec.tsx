import { fireEvent, render, screen } from '@testing-library/react';
import { LumaButtonDropdown, DropdownButtonProps } from './LumaButtonDropdown';
import { DataItemProps } from '../../LumaDropdown/LumaDropDownBasicType';

describe('LumaButtonDropdown', () => {
  const onClickMock = jest.fn();
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
  const buttonArgs: DropdownButtonProps = {
    id: 'DropdownButton',
    children: 'Button',
    variant: 'primary',
    disabled: false,
    size: 'medium',
    onClick: onClickMock,
    dropdownItems: ITEMS,
    onChangeDropdown: onChangeMock,
  };
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle click on split', () => {
    render(
      <LumaButtonDropdown {...buttonArgs} split={true} disabledSplit={false} />
    );
    const button = screen.getAllByRole('button');
    fireEvent.click(button[0]);
    expect(onClickMock).toHaveBeenCalledTimes(1);
    fireEvent.click(button[1]);
    const listAfterClick = screen.getAllByRole('option');
    expect(listAfterClick.length).toEqual(ITEMS.length);
  });

  it('should handle click on dropdown', () => {
    render(<LumaButtonDropdown {...buttonArgs} split={false} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const listAfterClick = screen.getAllByRole('option');
    expect(listAfterClick.length).toEqual(ITEMS.length);
  });

  it('should disable the split', () => {
    render(
      <LumaButtonDropdown {...buttonArgs} split={true} disabledSplit={true} />
    );
    const button = screen.getAllByRole('button');
    fireEvent.click(button[0]);
    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(button[1]).toHaveProperty('disabled', true);
  });

  it('should disable the dropdown', () => {
    render(
      <LumaButtonDropdown {...buttonArgs} split={false} disabled={true} />
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(0);
    expect(button).toHaveProperty('disabled', true);
  });

  it('should handle click on split dropdown item', () => {
    render(
      <LumaButtonDropdown {...buttonArgs} split={true} disabledSplit={false} />
    );
    const itemIndex = 0;
    const button = screen.getAllByRole('button');
    fireEvent.click(button[0]);
    expect(onClickMock).toHaveBeenCalledTimes(1);
    fireEvent.click(button[1]);
    const listAfterClick = screen.getAllByRole('option');
    expect(listAfterClick.length).toEqual(ITEMS.length);
    fireEvent.click(listAfterClick[itemIndex]);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('should handle click on dropdown item', () => {
    render(<LumaButtonDropdown {...buttonArgs} split={false} />);
    const itemIndex = 0;
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const listAfterClick = screen.getAllByRole('option');
    expect(listAfterClick.length).toEqual(ITEMS.length);
    fireEvent.click(listAfterClick[itemIndex]);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('should have proper label of items', () => {
    render(
      <LumaButtonDropdown {...buttonArgs} split={true} disabledSplit={false} />
    );
    const itemIndex = 0;
    const button = screen.getAllByRole('button');
    fireEvent.click(button[0]);
    expect(onClickMock).toHaveBeenCalledTimes(1);
    fireEvent.click(button[1]);
    const listAfterClick = screen.getAllByRole('option');
    expect(listAfterClick.length).toEqual(ITEMS.length);
    screen.getByText(ITEMS[itemIndex].label || '');
  });

  it('should not allow handle click on split dropdown disabled item', () => {
    render(
      <LumaButtonDropdown {...buttonArgs} split={true} disabledSplit={false} />
    );
    const itemIndex = 1;
    const button = screen.getAllByRole('button');
    fireEvent.click(button[0]);
    expect(onClickMock).toHaveBeenCalledTimes(1);
    fireEvent.click(button[1]);
    const listAfterClick = screen.getAllByRole('option');
    expect(listAfterClick.length).toEqual(ITEMS.length);
    fireEvent.click(listAfterClick[itemIndex]);
    expect(onChangeMock).toHaveBeenCalledTimes(0);
  });

  it('should not allow handle click on dropdown disabled item', () => {
    render(<LumaButtonDropdown {...buttonArgs} split={false} />);
    const itemIndex = 1;
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const listAfterClick = screen.getAllByRole('option');
    expect(listAfterClick.length).toEqual(ITEMS.length);
    fireEvent.click(listAfterClick[itemIndex]);
    expect(onChangeMock).toHaveBeenCalledTimes(0);
  });
});
