import {
  Rfq,
  RfqState,
  RfqTypeEnum,
  ValueTypes,
} from '@luma-fe-workspace/redux';

const rfqMock: Rfq = {
  state: RfqState.TRADE_REQUESTED,
  type: RfqTypeEnum.LIVE,
  id: 'c90793e7-4057-425e-ac29-f2214de48b53',
  pricingId: 'c5045098-3f03-4a21-8127-2b4e1638c30b',
  issuer: 'RBC',
  isApi: false,
  product: {
    params: {
      STRIKE_LEVEL: {
        type: ValueTypes.Numeric,
        value: 100,
      },
    },
  },
  productLayout: {
    sections: [
      {
        label: 'Section 1',
        fieldGroups: [
          {
            label: 'Field Group 1',
            fields: [{ paramName: 'STRIKE_LEVEL', label: 'Strike' }],
          },
        ],
      },
    ],
  },
  documents: [
    {
      id: 'documentId1',
      filename: 'documentName1',
      documentType: 'FACT_SHEETS',
      language: 'en',
      uploadTimestamp: '2022-08-01T12:00:00.0000',
    },
    {
      id: 'documentId2',
      filename: 'documentName2',
      documentType: 'TERMSHEET',
      language: 'de',
      uploadTimestamp: '2022-08-01T13:00:00.0000',
    },
  ],
  supportedDocumentTypes: [
    { id: 'MISCELLANEOUS_DOCUMENTS', label: 'Miscellaneous' },
    { id: 'FACT_SHEETS', label: 'Fact Sheets' },
    { id: 'TERMSHEET', label: 'Termsheet' },
  ],
  supportedLanguages: [
    { id: 'de', label: 'German' },
    { id: 'en', label: 'English' },
    { id: 'es', label: 'Spanish' },
    { id: 'fr', label: 'French' },
  ],
  version: '2',
} as Rfq;

export default rfqMock;
