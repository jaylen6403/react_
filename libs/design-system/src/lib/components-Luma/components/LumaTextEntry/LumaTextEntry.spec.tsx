import { fireEvent, render, screen } from '@testing-library/react';
import { LumaTextEntry, TextEntryProps } from './LumaTextEntry';

describe('LumaTextEntry', () => {
  const label = 'Field Entry';
  const entryArgs: TextEntryProps = {
    label: label,
    helperText: 'Helper Message',
  };

  it('should render successfully small', () => {
    const { baseElement } = render(
      <LumaTextEntry {...entryArgs} sizeVariant="small" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully medium', () => {
    const { baseElement } = render(
      <LumaTextEntry {...entryArgs} sizeVariant="medium" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully large', () => {
    const { baseElement } = render(
      <LumaTextEntry {...entryArgs} sizeVariant="large" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully variant free small', () => {
    const { baseElement } = render(
      <LumaTextEntry {...entryArgs} variant="free" sizeVariant="small" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully variant free medium', () => {
    const { baseElement } = render(
      <LumaTextEntry {...entryArgs} variant="free" sizeVariant="medium" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully variant free large', () => {
    const { baseElement } = render(
      <LumaTextEntry {...entryArgs} variant="free" sizeVariant="large" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with helper text', () => {
    render(<LumaTextEntry {...entryArgs} helperText="error" />);
    screen.getByText('error');
  });

  it('should change value text', () => {
    const inputValue = 'test';
    render(<LumaTextEntry {...entryArgs} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });

  it('should change value text for free variant', () => {
    const inputValue = 'test';
    render(<LumaTextEntry {...entryArgs} variant="free" />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });

  it('should be disabled', () => {
    render(<LumaTextEntry {...entryArgs} disabled={true} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input).toHaveProperty('disabled', true);
  });

  it('should be disabled for free variant', () => {
    render(<LumaTextEntry {...entryArgs} disabled={true} variant="free" />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input).toHaveProperty('disabled', true);
  });

  it('should render free text entry with label', () => {
    render(<LumaTextEntry {...entryArgs} variant="free" />);
    screen.queryByPlaceholderText(label);
  });

  it('should render standard text entry with label', () => {
    render(<LumaTextEntry {...entryArgs} />);
    screen.queryByPlaceholderText(label);
  });
});
