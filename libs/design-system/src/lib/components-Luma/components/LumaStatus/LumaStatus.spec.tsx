import { render, screen } from '@testing-library/react';
import { LumaStatus, StatusProp } from './LumaStatus';

describe('LumaStatus', () => {
  const statusArgs: StatusProp = {
    variant: 'failed',
    ariaLabel: 'Message',
  };

  it('should render successfully', () => {
    const { baseElement } = render(<LumaStatus {...statusArgs} />);
    expect(baseElement).toBeTruthy();
  });

  it('should be an error variant', () => {
    render(<LumaStatus {...statusArgs} variant="failed" />);
    screen.getByText('We didn’t find anything.') as HTMLLabelElement;
  });

  it('should be a progress variant', () => {
    render(<LumaStatus {...statusArgs} variant="progress" />);
    screen.getByText('Thinking...') as HTMLLabelElement;
  });

  it('should render successfully with titleMessage', () => {
    render(<LumaStatus {...statusArgs} titleMessage="Title Message Test" />);
    screen.getByText('Title Message Test');
  });

  it('should render successfully with helperMessage', () => {
    render(<LumaStatus {...statusArgs} helperMessage="Helper Message Test" />);
    screen.getByText('Helper Message Test');
  });
});
