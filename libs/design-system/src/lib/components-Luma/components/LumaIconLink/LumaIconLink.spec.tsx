import { fireEvent, render, screen } from '@testing-library/react';
import { LumaIconLink, IconLinkProps } from './LumaIconLink';

describe('LumaIconLink', () => {
  const onClickMock = jest.fn();
  const lumaIconArgs: IconLinkProps = {
    sizeVariant: 'small',
    iconCode: 'file-pdf',
    label: 'Link',
    onClick: onClickMock,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<LumaIconLink {...lumaIconArgs} />);
    expect(baseElement).toBeTruthy();
  });

  it('should handle click', () => {
    render(<LumaIconLink {...lumaIconArgs} />);
    const link = screen.getByText('Link') as HTMLAnchorElement;
    fireEvent.click(link);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
