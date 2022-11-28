import { fireEvent, render, screen } from '@testing-library/react';
import { LumaRadio, RadioProps } from './LumaRadio';
import { useState } from 'react';

describe('LumaRadio', () => {
  const LumaRadioArgs: RadioProps = {
    onChange: () => console.log('test'),
    id: 'radio1',
  };

  it('should render successfully', () => {
    const { baseElement } = render(
      <LumaRadio key={`Radio`} {...LumaRadioArgs} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should handle radio click', () => {
    const RadiosWrapper = () => {
      const radios = [
        ['First', 'first'],
        ['Second', 'second'],
      ];
      const [selected, setSelected] = useState<string>('first');
      const selectRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.value);
      };
      return (
        <>
          {radios.map(([text, value], i) => (
            <LumaRadio
              key={`Radio${i}`}
              checked={selected === value}
              onChange={selectRadio}
              value={value}
              label={text}
            />
          ))}
        </>
      );
    };
    render(<RadiosWrapper />);
    const radioFirst = screen.getByLabelText('First') as HTMLInputElement;
    const radioSecond = screen.getByLabelText('Second') as HTMLInputElement;
    fireEvent.click(radioSecond);
    expect(radioFirst.checked).toEqual(false);
    expect(radioSecond.checked).toEqual(true);
    fireEvent.click(radioFirst);
    expect(radioFirst.checked).toEqual(true);
    expect(radioSecond.checked).toEqual(false);
  });
});
