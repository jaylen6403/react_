import { fireEvent, render, screen } from '@testing-library/react';
import { LumaIconSwitch, IconSwitchProps } from './LumaIconSwitch';

describe('LumaIconSwitch', () => {
  const onChangeMock = jest.fn();
  const iconSwitchArgs: IconSwitchProps = {
    checked: true,
    icons: {
      right: 'file',
      left: 'file',
    },
    sizeVariant: 'small',
    onChange: onChangeMock,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<LumaIconSwitch {...iconSwitchArgs} />);
    expect(baseElement).toBeTruthy();
  });

  it('should handle click', () => {
    render(<LumaIconSwitch {...iconSwitchArgs} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
