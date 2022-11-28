import { IssuerPricing } from '@luma-fe-workspace/redux';
import { fireEvent, render, screen } from '@testing-library/react';
import rfqMock from '../../mocks/rfqMock';
import { RFQTable } from './RFQTable';

describe('RFQTable', () => {
  const patchExternalIdMock = jest.fn();
  const setExternalIdMock = jest.fn();

  const props = {
    rfq: rfqMock as IssuerPricing,
    externalId: undefined,
    setExternalId: setExternalIdMock,
    patchExternalId: patchExternalIdMock,
    actions: [],
    isEditQuote: true,
    isEditValidUntil: false,
    isEditRejectionReason: true,
  };

  it('should render correctly', () => {
    const { baseElement } = render(<RFQTable {...props} />);
    expect(baseElement).toBeInTheDocument();
  });

  it('should accept all available actions', () => {
    render(<RFQTable {...props} />);
    const input = screen.getByTestId(
      'input-rejection_reason'
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });
});
