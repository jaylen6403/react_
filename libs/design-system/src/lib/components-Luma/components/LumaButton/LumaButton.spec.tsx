import { fireEvent, render, screen } from '@testing-library/react';
import { LumaButton, LumaButtonProps } from './LumaButton';

describe('LumaButton', () => {
  const onClickMock = jest.fn();
  const buttonArgs: LumaButtonProps = {
    children: 'Button',
    variant: 'primary',
    disabled: false,
    size: 'medium',
    onClick: onClickMock,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully variant primary', () => {
    const { baseElement } = render(<LumaButton {...buttonArgs} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully variant secondary', () => {
    const { baseElement } = render(
      <LumaButton {...buttonArgs} variant="secondary" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully variant tertiary', () => {
    const { baseElement } = render(
      <LumaButton {...buttonArgs} variant="tertiary" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully variant tertiary_positive', () => {
    const { baseElement } = render(
      <LumaButton {...buttonArgs} variant="tertiary_positive" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully variant toggle_active', () => {
    const { baseElement } = render(
      <LumaButton {...buttonArgs} variant="toggle_active" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully variant toggle_inactive', () => {
    const { baseElement } = render(
      <LumaButton {...buttonArgs} variant="toggle_inactive" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully variant tabs_active', () => {
    const { baseElement } = render(
      <LumaButton {...buttonArgs} variant="tabs_active" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully variant tabs_inactive', () => {
    const { baseElement } = render(
      <LumaButton {...buttonArgs} variant="tabs_inactive" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should handle click', () => {
    render(<LumaButton {...buttonArgs} />);
    const button = screen.getByText('Button') as HTMLButtonElement;
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should be disabled', () => {
    render(<LumaButton {...buttonArgs} disabled={true} />);
    const button = screen.getByText('Button') as HTMLButtonElement;
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
});
