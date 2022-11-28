import { fireEvent, render, screen } from '@testing-library/react';
import {
  LumaTextSearch,
  RenderContent,
  TextSearchProps,
} from './LumaTextSearch';
import { TextSearchItem } from '../LumaDropdown/LumaDropDownBasicType';

const data: TextSearchItem[] = [
  {
    id: 'XS2343811993',
    label: 'MSWM',
  },
  {
    id: 'XS2343811994',
    label: 'Morgan Stanley',
  },
];

describe('LumaTextSearch', () => {
  const searchArgs: TextSearchProps<TextSearchItem> = {
    id: 'text-search',
    placeholder: 'Search',
    items: data,
    itemToString: (item) => {
      if (item && 'id' in item) {
        return item.label;
      }
      return '';
    },
    inputAriaLabel: 'input id',
    buttonAriaLabel: 'clear input',
    renderContent: <RenderContent />,
    sizeVariant: 'large',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<LumaTextSearch {...searchArgs} />);
    expect(baseElement).toBeTruthy();
  });

  it('should change text value', () => {
    const inputValue = 'test';
    render(
      <LumaTextSearch {...searchArgs} disabled={false} readOnly={false} />
    );
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });

  it('should be disabled', () => {
    render(<LumaTextSearch {...searchArgs} disabled={true} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input).toHaveProperty('disabled', true);
  });

  // For now, we are not filtering the results on the frontend.
  // The results will be filtered through the backend.
  it('should have list of options', () => {
    render(<LumaTextSearch {...searchArgs} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: data[0].label } });
    const list = screen.getAllByRole('option');
    expect(list.length).toEqual(2);
  });

  it('should clear input value on click on option', () => {
    const issuerIndex = 0;
    render(<LumaTextSearch {...searchArgs} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: data[0].label } });
    const list = screen.getAllByRole('option');
    expect(list.length).toEqual(2);
    fireEvent.click(list[issuerIndex]);
    expect(input.value).toBe('');
  });
});
