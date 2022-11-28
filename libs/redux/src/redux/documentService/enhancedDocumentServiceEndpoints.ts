import { documentServiceApi } from './documentServiceEndpoints';

export const enhancedDocumentServiceApi = documentServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getMarketplaceProductDocumentPdfUsingGet: build.query({
      query: (queryArg) => ({
        url: `/document/marketplaceproduct`,
        params: { cusip: queryArg.cusip, documentType: queryArg.documentType },
        responseHandler: async (response) => {
          const documentBlob = await response.blob();
          return documentBlob;
        },
      }),
    }),
    getProductDocumentPdfUsingGet: build.query({
      query: (queryArg) => ({
        url: `/document/product`,
        params: { cusip: queryArg.cusip, documentType: queryArg.documentType },
        responseHandler: async (response) => {
          const documentBlob = await response.blob();
          return documentBlob;
        },
      }),
    }),
    getDocumentContentsUsingGet: build.query({
      query: (queryArg) => ({
        url: `/document/${queryArg.key}/contents`,
        params: { key: queryArg.key },
        responseHandler: async (response) => {
          const documentBlob = await response.blob();
          return documentBlob;
        },
      }),
    }),
  }),
  overrideExisting: true,
});

const {
  useGetMarketplaceProductDocumentPdfUsingGetQuery,
  useGetProductDocumentPdfUsingGetQuery,
  useGetDocumentContentsUsingGetQuery,
} = enhancedDocumentServiceApi;

export { useGetMarketplaceProductDocumentPdfUsingGetQuery as useGetMarketplaceProductDocumentPdfUsingGetQueryEnhanced };
export { useGetProductDocumentPdfUsingGetQuery as useGetProductDocumentPdfUsingGetQueryEnhanced };
export { useGetDocumentContentsUsingGetQuery as useGetDocumentContentsUsingGetQueryEnhanced };
