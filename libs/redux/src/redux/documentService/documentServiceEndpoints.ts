import { baseApi as api } from './documentServiceBaseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMarketplaceProductDocumentPdfUsingGet: build.query<
      GetMarketplaceProductDocumentPdfUsingGetApiResponse,
      GetMarketplaceProductDocumentPdfUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/document/marketplaceproduct`,
        params: { cusip: queryArg.cusip, documentType: queryArg.documentType },
      }),
    }),
    getProductDocumentPdfUsingGet: build.query<
      GetProductDocumentPdfUsingGetApiResponse,
      GetProductDocumentPdfUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/document/product`,
        headers: { Authorization: queryArg.authorization },
        params: { cusip: queryArg.cusip, documentType: queryArg.documentType },
      }),
    }),
    getProductDocumentsUsingPostUsingPost: build.mutation<
      GetProductDocumentsUsingPostUsingPostApiResponse,
      GetProductDocumentsUsingPostUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/document/product`,
        method: 'POST',
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getDocumentContentsUsingGet: build.query<
      GetDocumentContentsUsingGetApiResponse,
      GetDocumentContentsUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/document/${queryArg.key}/contents`,
        params: { key: queryArg.key },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as documentServiceApi };
export type GetMarketplaceProductDocumentPdfUsingGetApiResponse =
  /** status 200 OK */ Resource;
export type GetMarketplaceProductDocumentPdfUsingGetApiArg = {
  /** cusip */
  cusip: string;
  /** documentType */
  documentType: string;
};
export type GetProductDocumentPdfUsingGetApiResponse =
  /** status 200 OK */ Resource;
export type GetProductDocumentPdfUsingGetApiArg = {
  authorization: string;
  /** cusip */
  cusip: string;
  /** documentType */
  documentType: string;
};
export type GetProductDocumentsUsingPostUsingPostApiResponse =
  /** status 200 OK */ ProductDocuments[] | /** status 201 Created */ undefined;
export type GetProductDocumentsUsingPostUsingPostApiArg = {
  authorization: string;
  /** cusips */
  body: string[];
};
export type GetDocumentContentsUsingGetApiResponse =
  /** status 200 OK */ Resource;
export type GetDocumentContentsUsingGetApiArg = {
  // authorization: string;
  /** key */
  key: string;
};
export type File = {
  absolute?: boolean;
  absoluteFile?: File;
  absolutePath?: string;
  canonicalFile?: File;
  canonicalPath?: string;
  directory?: boolean;
  executable?: boolean;
  file?: boolean;
  freeSpace?: number;
  hidden?: boolean;
  lastModified?: number;
  name?: string;
  parent?: string;
  parentFile?: File;
  path?: string;
  readable?: boolean;
  totalSpace?: number;
  usableSpace?: number;
  writable?: boolean;
};
export type InputStream = object;
export type Uri = {
  absolute?: boolean;
  authority?: string;
  fragment?: string;
  host?: string;
  opaque?: boolean;
  path?: string;
  port?: number;
  query?: string;
  rawAuthority?: string;
  rawFragment?: string;
  rawPath?: string;
  rawQuery?: string;
  rawSchemeSpecificPart?: string;
  rawUserInfo?: string;
  scheme?: string;
  schemeSpecificPart?: string;
  userInfo?: string;
};
export type UrlStreamHandler = object;
export type Url = {
  authority?: string;
  content?: object;
  defaultPort?: number;
  deserializedFields?: UrlStreamHandler;
  file?: string;
  host?: string;
  path?: string;
  port?: number;
  protocol?: string;
  query?: string;
  ref?: string;
  serializedHashCode?: number;
  userInfo?: string;
};
export type Resource = {
  description?: string;
  file?: File;
  filename?: string;
  inputStream?: InputStream;
  open?: boolean;
  readable?: boolean;
  uri?: Uri;
  url?: Url;
};
export type ProductDocuments = {
  cusip?: string;
  documents?: {
    [key: string]: string;
  };
};
export const {
  useGetMarketplaceProductDocumentPdfUsingGetQuery,
  useGetProductDocumentPdfUsingGetQuery,
  useGetProductDocumentsUsingPostUsingPostMutation,
  useGetDocumentContentsUsingGetQuery,
} = injectedRtkApi;
