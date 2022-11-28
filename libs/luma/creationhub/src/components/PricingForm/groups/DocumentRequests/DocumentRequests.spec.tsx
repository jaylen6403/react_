import { Rfq } from '@luma-fe-workspace/redux';
import { render, screen } from '@testing-library/react';
import rfqMock from '../../mocks/rfqMock';
import { DocumentRequests } from './DocumentRequests';
import * as PricingAPI from '../../usePricingAPI';
import pricingAPIMock from '../../../PricingForm/mocks/pricingAPIMock';
import * as DropdownUtils from '../ConfigurableFormGroups/formElements/dropdown/DropdownUtils';
import * as DocumentRequestsUtils from './DocumentRequestsUtils';

describe('DocumentRequests', () => {
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
  const parseEnumToDropdownValueMock = jest.fn();
  jest
    .spyOn(DropdownUtils, 'parseEnumToDropdownValue')
    .mockImplementation(parseEnumToDropdownValueMock);

  const updateRfqMock = jest.fn();
  it('should render correctly', () => {
    const { baseElement } = render(
      <DocumentRequests rfq={rfqMock as Rfq} updateRfq={updateRfqMock} />
    );
    expect(baseElement).toBeInTheDocument();
  });

  it('should display all elements', () => {
    render(<DocumentRequests rfq={rfqMock as Rfq} updateRfq={updateRfqMock} />);
    const textsInTheDocument = [
      'Document Requests',
      'Upload document',
      'documentName1',
      new Date('2022-08-01T12:00:00.0000').toLocaleString(),
    ];
    for (const text of textsInTheDocument) {
      expect(screen.getByText(text)).toBeInTheDocument();
    }
  });

  it('should display all supported document types', () => {
    render(<DocumentRequests rfq={rfqMock as Rfq} updateRfq={updateRfqMock} />);
    expect(parseEnumToDropdownValueMock).toBeCalledWith(
      rfqMock.supportedDocumentTypes
    );
  });

  it('should display all supported languages', () => {
    render(<DocumentRequests rfq={rfqMock as Rfq} updateRfq={updateRfqMock} />);
    expect(parseEnumToDropdownValueMock).toBeCalledWith(
      rfqMock.supportedLanguages
    );
  });
});
