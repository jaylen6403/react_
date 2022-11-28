import { fireEvent, render, screen } from '@testing-library/react';
import { LumaCheckbox, CheckboxProps } from './LumaCheckbox';

describe('LumaCheckbox', () => {
  const onChangeMock = jest.fn();
  const CheckboxArgs: CheckboxProps = {
    onChange: onChangeMock,
    label: 'Checkbox',
    checkboxKey: 'Checkbox',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', () => {
    const CheckboxArgs: CheckboxProps = {
      onChange: () => console.log('test'),
      label: 'Checkbox',
      checkboxKey: 'Checkbox',
    };
    const { baseElement } = render(<LumaCheckbox {...CheckboxArgs} />);
    expect(baseElement).toBeTruthy();
  });

  it('should handle click', () => {
    render(<LumaCheckbox {...CheckboxArgs} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('should be disabled', () => {
    render(<LumaCheckbox disabled={true} {...CheckboxArgs} />);
    const checkbox = screen.getByText('Checkbox') as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(onChangeMock).toHaveBeenCalledTimes(0);
  });
});
