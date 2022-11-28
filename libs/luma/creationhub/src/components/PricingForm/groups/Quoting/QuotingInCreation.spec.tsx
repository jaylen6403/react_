import { Issuer } from '@luma-fe-workspace/redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { QuotingInCreation } from './QuotingInCreation';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'root');
document.body.appendChild(modalRoot);

describe('Quoting', () => {
  const issuers = {
    Barclays: {
      rating: 'AAA',
      canAutoQuoteIndicative: true,
      canAutoQuoteLive: true,
    } as Issuer,
    BANK_OF_AMERICA: {
      rating: 'AA+',
      canAutoQuoteIndicative: true,
      canAutoQuoteLive: true,
    } as Issuer,
    MORGAN_STANLEY: {
      rating: 'AA',
      canAutoQuoteIndicative: false,
      canAutoQuoteLive: true,
    } as Issuer,
    RBC: {
      rating: 'AA+',
      canAutoQuoteIndicative: false,
      canAutoQuoteLive: true,
    } as Issuer,
    SocGen: {
      rating: 'AAA',
      canAutoQuoteIndicative: true,
      canAutoQuoteLive: true,
    } as Issuer,
  };
  const toggleIssuer = jest.fn();
  const toggleAllIssuers = jest.fn();
  const selectedIssuers = ['Barclays', 'SOCIETE_GENERALE'];

  const props = {
    issuers,
    toggleIssuer,
    toggleAllIssuers,
    selectedIssuers,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<QuotingInCreation {...props} />);
    expect(baseElement).toBeInTheDocument();
  });

  it('should render images', () => {
    render(<QuotingInCreation {...props} />);
    expect(screen.getByAltText('BANK_OF_AMERICA')).toBeTruthy();
    expect(screen.getByAltText('MORGAN_STANLEY')).toBeTruthy();
    expect(screen.getByAltText('SocGen')).toBeTruthy();
    expect(screen.getByAltText('BANK_OF_AMERICA')).toBeTruthy();
  });

  it('should render checkbox', () => {
    render(<QuotingInCreation {...props} />);
    const checkbox = screen.getByTestId(
      'checkbox-Barclays'
    ) as HTMLInputElement;
    expect(checkbox).toBeTruthy();
    expect(checkbox.checked).toBeTruthy();
  });

  it('should handle checkbox click', () => {
    render(<QuotingInCreation {...props} />);
    const checkbox = screen.getByTestId(
      'checkbox-Barclays'
    ) as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(toggleIssuer).toHaveBeenCalledTimes(1);
    expect(toggleIssuer).toHaveBeenCalledWith('Barclays');
  });
});
