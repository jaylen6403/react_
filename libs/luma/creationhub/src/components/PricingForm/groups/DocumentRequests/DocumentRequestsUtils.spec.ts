import { downloadDocument, getDocuments } from './DocumentRequestsUtils';
import rfqMock from '../../mocks/rfqMock';
import * as PricingAPI from '../../usePricingAPI';
import pricingAPIMock from '../../mocks/pricingAPIMock';

describe('DocumentRequestsUtils', () => {
  const filename = 'test.txt';
  const blobMock = new Blob();
  const createObjectURLMock = jest.fn();

  describe('downloadDocument', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    jest.spyOn(PricingAPI, 'usePricingAPI').mockReturnValue({
      ...pricingAPIMock,
      getDocument: jest.fn().mockReturnValue({
        unwrap: jest.fn().mockReturnValue(blobMock),
      }),
    });

    it('should call proper url function', () => {
      window.URL.createObjectURL = createObjectURLMock;
      downloadDocument(blobMock, filename);
      expect(createObjectURLMock).toHaveBeenCalledWith(blobMock);
    });

    it('should return documents object', () => {
      window.URL.createObjectURL = createObjectURLMock;
      const documents = getDocuments(rfqMock, jest.fn());
      expect(documents).toHaveLength(rfqMock.documents?.length || 0);
      if (documents && documents?.length > 0) {
        documents[0].downloadAction.action();
      }
    });
  });

  describe('getDocuments', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    jest.spyOn(PricingAPI, 'usePricingAPI').mockReturnValue({
      ...pricingAPIMock,
      getDocument: jest.fn().mockReturnValue({
        unwrap: jest.fn().mockReturnValue(blobMock),
      }),
    });

    it('should return documents object', () => {
      const documents = getDocuments(rfqMock, jest.fn());
      expect(documents).toHaveLength(rfqMock.documents?.length || 0);
      if (documents && documents?.length > 0) {
        documents[0].downloadAction.action();
      }
    });
  });
});
