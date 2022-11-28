import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import {
  ChProduct,
  PricingInProgress,
  PricingState,
  ProductLayout,
} from '@luma-fe-workspace/redux';
import rfqMock from '../../mocks/rfqMock';
import { QuotingInProgress } from './QuotingInProgress';
import * as DocumentRequestsUtils from '../DocumentRequests/DocumentRequestsUtils';
import * as PricingAPI from '../../usePricingAPI';
import pricingAPIMock from '../../mocks/pricingAPIMock';

describe('QuotingInProgress', () => {
  const downloadDocumentMock = jest.fn();
  jest
    .spyOn(DocumentRequestsUtils, 'downloadDocument')
    .mockImplementation(downloadDocumentMock);
  afterEach(() => {
    jest.clearAllMocks();
  });
  const blobMock = new Blob();
  jest.spyOn(PricingAPI, 'usePricingAPI').mockReturnValue({
    ...pricingAPIMock,
    getDocument: jest.fn().mockReturnValue({
      unwrap: jest.fn().mockReturnValue(blobMock),
    }),
  });

  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'root');
  document.body.appendChild(modalRoot);

  const pricingMock = {
    state: PricingState.InProgress,
    id: 'testId',
    product: {} as ChProduct,
    constraints: {},
    productLayout: {} as ProductLayout,
    version: '1',
    rfqIssuers: [
      {
        issuerId: 'testId',
        rfq: rfqMock,
        actions: [],
      },
    ],
  } as PricingInProgress;
  const props = {
    pricing: pricingMock,
    isMutationPending: false,
    updatePricing: jest.fn(),
    cancelRfq: jest.fn(),
    createRfq: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<QuotingInProgress {...props} />);
    expect(baseElement).toBeInTheDocument();
  });

  it('should download selected document', async () => {
    render(<QuotingInProgress {...props} />);
    const documentsViewButton = screen.getByTestId('documents-button-testId');
    fireEvent.click(documentsViewButton);
    const documentDownload = screen.getAllByTestId('document-download');
    fireEvent.click(documentDownload[0]);
    await waitFor(() => {
      expect(downloadDocumentMock).toHaveBeenCalledTimes(1);
    });
  });
});
