import { render, screen, fireEvent } from '@testing-library/react';
import { LumaChip, ChipProps } from './LumaChip';

describe('LumaChip', () => {
  const onChangeMock = jest.fn();
  const chipArgs: ChipProps = {
    variant: 'primary',
    children: 'ABC',
    state: 'locked',
    sizeVariant: 'regular',
    onChange: onChangeMock,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<LumaChip {...chipArgs} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with entry', () => {
    const { baseElement } = render(<LumaChip {...chipArgs} entry={true} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with removable entry', () => {
    const { baseElement } = render(
      <LumaChip {...chipArgs} entry={true} state="removable" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should change value in entry', () => {
    render(<LumaChip {...chipArgs} entry={true} state="removable" />);
    const entry = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(entry, { target: { value: '100' } });
    expect(entry.value).toBe('100');
  });

  it('should not change value in entry', () => {
    render(<LumaChip {...chipArgs} entry={true} state="removable" />);
    const entry = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(entry, { target: { value: 'test' } });
    expect(entry.value).toBe('');
  });

  it('should display value in entry', () => {
    render(<LumaChip {...chipArgs} entry={true} value={100} />);
    const entry = screen.getByRole('textbox') as HTMLInputElement;
    expect(entry.value).toBe('100');
  });
});
