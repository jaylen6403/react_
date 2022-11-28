import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { LumaNotFound, LumaNotFoundProps } from './LumaNotFound';

describe('LumaNotFound', () => {
  const defaultUrl = '/default-url';
  const customUrl = '/custom-url';
  let props: LumaNotFoundProps = {
    returnUrl: defaultUrl,
  };

  it('should render component', () => {
    render(
      <Router>
        <LumaNotFound {...props} />
      </Router>
    );
    expect(screen.getByRole('link').getAttribute('href')).toBe(defaultUrl);
  });

  it('should render with custom url', () => {
    props = { ...props, returnUrl: customUrl };
    render(
      <Router>
        <LumaNotFound {...props} />
      </Router>
    );
    expect(screen.getByRole('link').getAttribute('href')).toBe(customUrl);
  });
});
