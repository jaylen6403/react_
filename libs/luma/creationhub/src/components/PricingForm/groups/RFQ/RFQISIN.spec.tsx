import { render, screen, fireEvent } from '@testing-library/react';
import { RFQISIN } from './RFQISIN';

describe('RFQISIN', () => {
  const props = {
    isin: 'abc123',
    setIsin: jest.fn(),
    patchIsin: jest.fn(),
  };
  it('should render properly', () => {
    const { baseElement } = render(<RFQISIN {...props} />);
    expect(baseElement).toBeInTheDocument();
    expect(screen.getByDisplayValue('abc123')).toBeInTheDocument();
  });

  it('should fire events', () => {
    render(<RFQISIN {...props} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(props.setIsin).toHaveBeenCalledTimes(1);
    expect(props.setIsin).toHaveBeenCalledWith('test');
    fireEvent.blur(input);
    expect(props.patchIsin).toHaveBeenCalledTimes(1);
  });
});
