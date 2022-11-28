import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import rfqMock from '../../mocks/rfqMock';
import { AddDocumentForm } from './AddDocumentForm';
import * as PricingAPI from '../../usePricingAPI';
import pricingAPIMock from '../../../PricingForm/mocks/pricingAPIMock';
import * as DocumentRequestsUtils from './DocumentRequestsUtils';

describe('AddDocumentForm', () => {
  const addDocumentMock = jest.fn();
  const updateRfqMock = jest.fn();
  const file = new File([''], 'test.txt', { type: 'text/plain' });

  jest.spyOn(PricingAPI, 'usePricingAPI').mockReturnValue({
    ...pricingAPIMock,
    addDocument: addDocumentMock.mockReturnValue({
      unwrap: jest.fn().mockReturnValue({}),
    }),
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render properly', () => {
    const { baseElement } = render(
      <AddDocumentForm rfq={rfqMock} updateRfq={updateRfqMock} />
    );
    expect(baseElement).toBeInTheDocument();
  });

  it('should disable submit button by default', async () => {
    render(<AddDocumentForm rfq={rfqMock} updateRfq={updateRfqMock} />);
    const submitButton = screen.getByTestId('button-document_submit');
    expect(submitButton).toHaveProperty('disabled', true);
  });

  it('should set and display file properly', async () => {
    render(<AddDocumentForm rfq={rfqMock} updateRfq={updateRfqMock} />);
    const fileInput = screen.getByTestId('input-document_file');
    fireEvent.change(fileInput, { target: { files: [file] } });
    await waitFor(() => {
      expect(screen.getByText(/test.txt/i)).toBeInTheDocument();
    });
  });

  it('should upload document', async () => {
    render(<AddDocumentForm rfq={rfqMock} updateRfq={updateRfqMock} />);
    const fileInput = screen.getByTestId('input-document_file');
    const submitButton = screen.getByTestId('button-document_submit');
    const documentTypeDropdown = screen.getByTestId('dropdown-document_type');
    const documentLanguageDropdown = screen.getByTestId(
      'dropdown-document_language'
    );
    fireEvent.click(documentTypeDropdown);
    const typeList = screen.getAllByRole('option');
    fireEvent.click(typeList[0]);
    fireEvent.click(documentLanguageDropdown);
    const languageList = screen.getAllByRole('option');
    fireEvent.click(languageList[0]);
    fireEvent.change(fileInput, { target: { files: [file] } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Upload document')).toBeInTheDocument();
    });
  });

  it('should trigger click on hidden input', async () => {
    render(<AddDocumentForm rfq={rfqMock} updateRfq={updateRfqMock} />);
    fireEvent.click(screen.getByTestId('button-document_file'));
    const submitButton = screen.getByTestId('button-document_submit');
    fireEvent.click(submitButton);
  });
});
