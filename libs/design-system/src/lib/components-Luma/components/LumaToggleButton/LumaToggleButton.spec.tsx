import { fireEvent, render, screen } from '@testing-library/react';
import { LumaToggleButton, ToggleButtonProps } from './LumaToggleButton';
import { useState } from 'react';
import { LumaColor } from '../../LumaColors';

describe('LumaToggleButton', () => {
  function hexToRgb(hex: string) {
    /*
      Explanation of regex tokens:
        ^         Matches the beginning of the string
        #?        Matches a '#' character 0 or 1 times
        (
          [
            a-f   Matches a character in the range 'a' to 'f'.
            \d    Matches any digit character (0-9)
          ]
          {2}     Matches 2 of the preceding token
        )
        $         Matches the end of the string
        /i        case-insensitive
      Example:
        - #FF0000:
          # - ^#?
          FF - ([a-f\d]{2})
          00 - ([a-f\d]{2})
          00 - ([a-f\d]{2})
    */
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      const r = parseInt(result[1], 16);
      const g = parseInt(result[2], 16);
      const b = parseInt(result[3], 16);
      return r + ', ' + g + ', ' + b;
    }
    return null;
  }

  const LumaToggleButtonArgs: ToggleButtonProps = {
    activeValue: 'Button1',
    size: 'toggle_medium',
    fieldValues: [
      { paramName: 'Button1', label: 'Button 01' },
      { paramName: 'Button2', label: 'Button 02', isDisabled: true },
      { paramName: 'Button3', label: 'Button 03' },
      { paramName: 'Button4', label: 'Button 04' },
    ],
    onClick: () => console.log('test'),
  };

  it('should render successfully', () => {
    const { baseElement } = render(
      <LumaToggleButton {...LumaToggleButtonArgs} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render a certain number of buttons ', () => {
    render(<LumaToggleButton {...LumaToggleButtonArgs} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(4);
  });

  it('should render a toggle button with text above', () => {
    render(<LumaToggleButton {...LumaToggleButtonArgs} title={'test'} />);
    screen.getByText('test');
  });

  it('should be disabled', () => {
    render(<LumaToggleButton {...LumaToggleButtonArgs} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveProperty('disabled', false);
    expect(buttons[1]).toHaveProperty('disabled', true);
    expect(buttons[2]).toHaveProperty('disabled', false);
    expect(buttons[3]).toHaveProperty('disabled', false);
  });

  it('should handle click', () => {
    const ToggleButtonsWrapper = () => {
      const [paramName, setParamName] = useState('Button1');
      const clickHandler = (e: string) => {
        setParamName(e);
      };
      return (
        <LumaToggleButton
          {...LumaToggleButtonArgs}
          activeValue={paramName}
          onClick={clickHandler}
        />
      );
    };
    render(<ToggleButtonsWrapper />);
    const buttons = screen.getAllByRole('button');
    const styledBeforeClick = getComputedStyle(buttons[2]);
    expect(styledBeforeClick.color).toBe(
      `rgb(${hexToRgb(LumaColor.NEUTRAL_60)})`
    );
    fireEvent.click(buttons[2]);
    const styledAfterClick = getComputedStyle(buttons[2]);
    expect(styledAfterClick.color).toBe(
      `rgb(${hexToRgb(LumaColor.NEUTRAL_80)})`
    );
  });
});
