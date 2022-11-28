import { fireEvent, render, screen } from '@testing-library/react';
import { LumaValidUntil, LumaValidUntilProps } from './LumaValidUntil';

const LumaValidUntilArgs: LumaValidUntilProps = {
  onChange: jest.fn(),
};

describe('LumaValidUntil', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LumaValidUntil {...LumaValidUntilArgs} />);
    expect(baseElement).toBeTruthy();
  });

  it('should initially render button', () => {
    render(<LumaValidUntil {...LumaValidUntilArgs} />);
    expect(screen.getByTestId('button-valid_until')).toBeTruthy();
    expect(screen.queryByTestId('input-valid_until')).not.toBeTruthy();
  });

  it('should render input upon focus and not render the button', () => {
    render(<LumaValidUntil {...LumaValidUntilArgs} />);
    fireEvent.click(screen.getByTestId('button-valid_until'));
    expect(screen.queryByTestId('button-valid_until')).not.toBeTruthy();
    expect(screen.getByTestId('input-valid_until')).toBeTruthy();
  });

  it('should display minutes with the value from the input field', () => {
    render(<LumaValidUntil {...LumaValidUntilArgs} />);
    const button = screen.getByTestId('button-valid_until');
    fireEvent.click(button);
    const input = screen.getByTestId('input-valid_until') as HTMLInputElement;
    const value = 3;
    fireEvent.change(input, { target: { value: value } });
    fireEvent.blur(input);
    expect(
      screen.getByRole('button', { name: `${value} minutes` })
    ).toBeDefined();
  });
});
