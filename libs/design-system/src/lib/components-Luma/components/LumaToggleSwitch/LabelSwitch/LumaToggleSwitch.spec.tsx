import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { LumaToggleSwitch, ToggleSwitchProps } from './LumaToggleSwitch';

describe('LumaToggleSwitch', () => {
  const onChangeMock = jest.fn();
  const toggleSwitchArgs: ToggleSwitchProps = {
    onChange: onChangeMock,
    label: {
      position: 'top',
      textChecked: 'on',
      textUnchecked: 'off',
    },
    checked: false,
    disabled: false,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<LumaToggleSwitch {...toggleSwitchArgs} />);
    expect(baseElement).toBeTruthy();
  });

  it('should handle click', () => {
    render(<LumaToggleSwitch {...toggleSwitchArgs} />);
    const toggle = screen.getByRole('checkbox') as HTMLInputElement;
    fireEvent.click(toggle);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('should be disabled', () => {
    render(<LumaToggleSwitch {...toggleSwitchArgs} disabled={true} />);
    const input = screen.getByRole('checkbox') as HTMLInputElement;
    expect(input).toHaveProperty('disabled', true);
  });

  it('should change labels on click', () => {
    const SwitchWrapper = () => {
      const [selected, setSelected] = useState<boolean>(false);
      const clickSwitch = () => {
        setSelected(!selected);
      };
      return (
        <LumaToggleSwitch
          {...toggleSwitchArgs}
          onChange={clickSwitch}
          checked={selected}
        />
      );
    };
    render(<SwitchWrapper />);
    const toggle = screen.getByRole('checkbox') as HTMLInputElement;
    screen.getByText(toggleSwitchArgs.label.textUnchecked) as HTMLLabelElement;
    fireEvent.click(toggle);
    screen.getByText(toggleSwitchArgs.label.textChecked) as HTMLLabelElement;
    fireEvent.click(toggle);
    screen.getByText(toggleSwitchArgs.label.textUnchecked) as HTMLLabelElement;
  });

  it('check label position on top', () => {
    render(<LumaToggleSwitch {...toggleSwitchArgs} />);
    const input = screen.getByTestId('toggle-test-id') as HTMLLabelElement;
    const styledLabel = getComputedStyle(input);
    expect(styledLabel.flexDirection).toBe('column');
  });

  it('check label position on side', () => {
    render(
      <LumaToggleSwitch
        {...toggleSwitchArgs}
        label={{ position: 'side', textChecked: 'on', textUnchecked: 'off' }}
      />
    );
    const input = screen.getByTestId('toggle-test-id') as HTMLLabelElement;
    const styledLabel = getComputedStyle(input);
    expect(styledLabel.flexDirection).toBe('row-reverse');
  });
});
