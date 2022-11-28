import { fireEvent, render, screen } from '@testing-library/react';
import { LumaTabs, TabsProps } from './LumaTabs';

describe('LumaTabs', () => {
  const onClickMock = jest.fn();
  const lumaTabsArgs: TabsProps = {
    variant: 'buttons',
    fieldValues: [
      { paramName: 'Button1', label: 'Link 1' },
      { paramName: 'Button2', label: 'Link 2' },
      { paramName: 'Button3', label: 'Link 3', isDisabled: true },
    ],
    activeValue: 'Button1',
    onClick: onClickMock,
    buttonIconCode: 'file',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully buttons', () => {
    const { baseElement } = render(<LumaTabs {...lumaTabsArgs} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully links', () => {
    const { baseElement } = render(
      <LumaTabs {...lumaTabsArgs} variant="links" />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should handle click', () => {
    render(<LumaTabs {...lumaTabsArgs} />);
    const link = screen.getByText('Link 1') as HTMLAnchorElement;
    fireEvent.click(link);
  });

  it('should be disabled', () => {
    render(<LumaTabs {...lumaTabsArgs} variant="buttons" />);
    const link = screen.getByText('Link 3') as HTMLAnchorElement;
    fireEvent.click(link);
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
});
