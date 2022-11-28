import { SecondaryRequestForQuote } from '@luma-fe-workspace/redux';
import { mockProduct } from './mockProductData';
import { DateHelper } from '@luma-fe-workspace/utility';

export const getMockRFQData = (userName: string) => {
  const mockRFQData: SecondaryRequestForQuote[] = [
    // First three are created by the user, second three are not.
    // Each sets last RFQ is expired.
    {
      endTime: DateHelper.addMinutes(new Date(), 15).toISOString().slice(0, -1),
      createDateTimestamp: DateHelper.subtractMinutes(new Date(), 10)
        .toISOString()
        .slice(0, -1),
      createdByUserId: userName,
      desk: 'TEST DESK',
      firm: 'TEST DESK',
      product: mockProduct,
      productIdentifier: {
        productId: mockProduct.productId?.toString() ?? '0',
        securityIdentifierType: 'CUSIP',
        securityIdentifierValue:
          mockProduct.productGeneral.cusip?.toString() ?? '0',
      },
      quantity: 100,
      quotes: [
        {
          createDateTimestamp: DateHelper.subtractMinutes(new Date(), 8)
            .toISOString()
            .slice(0, -1),
          createdByUserId: '1',
          desk: 'TEST DESK',
          firm: 'TEST DESK',
          goodUntilTime: DateHelper.addMinutes(new Date(), 5)
            .toISOString()
            .slice(0, -1),
          quoteAmount: 150,
          quoteProvider: 'TEST FIRM',
          requestId: 10024,
          responseId: 100241,
          revision: 0,
          status: 'Pending',
          userAccount: 4454,
        },
        {
          createDateTimestamp: DateHelper.subtractMinutes(new Date(), 5)
            .toISOString()
            .slice(0, -1),
          createdByUserId: '2',
          desk: 'TEST DESK',
          firm: 'TEST DESK',
          goodUntilTime: DateHelper.addMinutes(new Date(), 1)
            .toISOString()
            .slice(0, -1),
          quoteAmount: 250,
          quoteProvider: 'TEST FIRM',
          requestId: 10024,
          responseId: 100242,
          revision: 0,
          status: 'Pending',
          userAccount: 5654,
        },
        {
          createDateTimestamp: DateHelper.subtractMinutes(new Date(), 6)
            .toISOString()
            .slice(0, -1),
          createdByUserId: '3',
          desk: 'TEST DESK',
          firm: 'TEST DESK',
          goodUntilTime: DateHelper.subtractMinutes(new Date(), 10)
            .toISOString()
            .slice(0, -1),
          quoteAmount: 100,
          quoteProvider: 'TEST FIRM',
          requestId: 10024,
          responseId: 100243,
          revision: 0,
          status: 'Pending',
          userAccount: 4454,
        },
      ],
      requestId: 10024,
      requestType: 'BWIC',
      revision: 1,
      settlementTimestamp: DateHelper.addDays(new Date(), 2)
        .toISOString()
        .slice(0, -1),
      status: 'OPEN',
      userAccount: 4435,
    },
    {
      endTime: DateHelper.addMinutes(new Date(), 25).toISOString().slice(0, -1),
      createDateTimestamp: DateHelper.subtractMinutes(new Date(), 5)
        .toISOString()
        .slice(0, -1),
      createdByUserId: userName,
      desk: 'TEST DESK',
      firm: 'TEST DESK',
      product: mockProduct,
      productIdentifier: {
        productId: mockProduct.productId?.toString() ?? '0',
        securityIdentifierType: 'CUSIP',
        securityIdentifierValue:
          mockProduct.productGeneral.cusip?.toString() ?? '0',
      },
      quantity: 150,
      quotes: [
        {
          createDateTimestamp: DateHelper.subtractMinutes(new Date(), 5)
            .toISOString()
            .slice(0, -1),
          createdByUserId: '1',
          desk: 'TEST DESK',
          firm: 'TEST DESK',
          goodUntilTime: DateHelper.addMinutes(new Date(), 20)
            .toISOString()
            .slice(0, -1),
          quoteAmount: 200,
          quoteProvider: 'TEST FIRM',
          requestId: 10025,
          responseId: 100251,
          revision: 0,
          status: 'Pending',
          userAccount: 4454,
        },
        {
          createDateTimestamp: DateHelper.subtractMinutes(new Date(), 15)
            .toISOString()
            .slice(0, -1),
          createdByUserId: '2',
          desk: 'TEST DESK',
          firm: 'TEST DESK',
          goodUntilTime: DateHelper.subtractMinutes(new Date(), 10)
            .toISOString()
            .slice(0, -1),
          quoteAmount: 200,
          quoteProvider: 'TEST FIRM',
          requestId: 10025,
          responseId: 100252,
          revision: 0,
          status: 'Pending',
          userAccount: 5654,
        },
        {
          createDateTimestamp: DateHelper.subtractMinutes(new Date(), 6)
            .toISOString()
            .slice(0, -1),
          createdByUserId: '3',
          desk: 'TEST DESK',
          firm: 'TEST DESK',
          goodUntilTime: DateHelper.addMinutes(new Date(), 1)
            .toISOString()
            .slice(0, -1),
          quoteAmount: 150,
          quoteProvider: 'TEST FIRM',
          requestId: 10025,
          responseId: 100253,
          revision: 0,
          status: 'Pending',
          userAccount: 4454,
        },
      ],
      requestId: 10025,
      requestType: 'BWIC',
      revision: 1,
      settlementTimestamp: DateHelper.addDays(new Date(), 1)
        .toISOString()
        .slice(0, -1),
      status: 'OPEN',
      userAccount: 4435,
    },
    {
      endTime: DateHelper.subtractMinutes(new Date(), 15)
        .toISOString()
        .slice(0, -1),
      createDateTimestamp: DateHelper.subtractMinutes(new Date(), 10)
        .toISOString()
        .slice(0, -1),
      createdByUserId: userName,
      desk: 'TEST DESK',
      firm: 'TEST DESK',
      product: mockProduct,
      productIdentifier: {
        productId: mockProduct.productId?.toString() ?? '0',
        securityIdentifierType: 'CUSIP',
        securityIdentifierValue:
          mockProduct.productGeneral.cusip?.toString() ?? '0',
      },
      quantity: 100,
      quotes: [
        {
          createDateTimestamp: DateHelper.subtractMinutes(new Date(), 8)
            .toISOString()
            .slice(0, -1),
          createdByUserId: '1',
          desk: 'TEST DESK',
          firm: 'TEST DESK',
          goodUntilTime: DateHelper.addMinutes(new Date(), 5)
            .toISOString()
            .slice(0, -1),
          quoteAmount: 150,
          quoteProvider: 'TEST FIRM',
          requestId: 10026,
          responseId: 100261,
          revision: 0,
          status: 'Pending',
          userAccount: 4454,
        },
        {
          createDateTimestamp: DateHelper.subtractMinutes(new Date(), 5)
            .toISOString()
            .slice(0, -1),
          createdByUserId: '2',
          desk: 'TEST DESK',
          firm: 'TEST DESK',
          goodUntilTime: DateHelper.addMinutes(new Date(), 1)
            .toISOString()
            .slice(0, -1),
          quoteAmount: 150,
          quoteProvider: 'TEST FIRM',
          requestId: 10026,
          responseId: 100262,
          revision: 0,
          status: 'Pending',
          userAccount: 5654,
        },
        {
          createDateTimestamp: DateHelper.subtractMinutes(new Date(), 6)
            .toISOString()
            .slice(0, -1),
          createdByUserId: '3',
          desk: 'TEST DESK',
          firm: 'TEST DESK',
          goodUntilTime: DateHelper.addMinutes(new Date(), 10)
            .toISOString()
            .slice(0, -1),
          quoteAmount: 100,
          quoteProvider: 'TEST FIRM',
          requestId: 10026,
          responseId: 100263,
          revision: 0,
          status: 'Pending',
          userAccount: 4454,
        },
      ],
      requestId: 10026,
      requestType: 'BWIC',
      revision: 1,
      settlementTimestamp: DateHelper.addDays(new Date(), 2)
        .toISOString()
        .slice(0, -1),
      status: 'OPEN',
      userAccount: 4435,
    },
    {
      endTime: DateHelper.addMinutes(new Date(), 25).toISOString().slice(0, -1),
      createDateTimestamp: DateHelper.subtractMinutes(new Date(), 5)
        .toISOString()
        .slice(0, -1),
      createdByUserId: '1',
      desk: 'TEST DESK',
      firm: 'TEST DESK',
      product: mockProduct,
      productIdentifier: {
        productId: mockProduct.productId?.toString() ?? '0',
        securityIdentifierType: 'CUSIP',
        securityIdentifierValue:
          mockProduct.productGeneral.cusip?.toString() ?? '0',
      },
      quantity: 150,
      quotes: [
        {
          createDateTimestamp: DateHelper.subtractMinutes(new Date(), 15)
            .toISOString()
            .slice(0, -1),
          createdByUserId: '2',
          desk: 'TEST DESK',
          firm: 'TEST DESK',
          goodUntilTime: DateHelper.subtractMinutes(new Date(), 10)
            .toISOString()
            .slice(0, -1),
          quoteAmount: 200,
          quoteProvider: 'TEST FIRM',
          requestId: 10027,
          responseId: 100271,
          revision: 0,
          status: 'Pending',
          userAccount: 5654,
        },
        {
          createDateTimestamp: DateHelper.subtractMinutes(new Date(), 6)
            .toISOString()
            .slice(0, -1),
          createdByUserId: '3',
          desk: 'TEST DESK',
          firm: 'TEST DESK',
          goodUntilTime: DateHelper.addMinutes(new Date(), 1)
            .toISOString()
            .slice(0, -1),
          quoteAmount: 150,
          quoteProvider: 'TEST FIRM',
          requestId: 10027,
          responseId: 100272,
          revision: 0,
          status: 'Pending',
          userAccount: 4454,
        },
      ],
      requestId: 10027,
      requestType: 'BWIC',
      revision: 1,
      settlementTimestamp: DateHelper.addDays(new Date(), 1)
        .toISOString()
        .slice(0, -1),
      status: 'OPEN',
      userAccount: 4435,
    },
    {
      endTime: DateHelper.addMinutes(new Date(), 1).toISOString().slice(0, -1),
      createDateTimestamp: DateHelper.subtractMinutes(new Date(), 5)
        .toISOString()
        .slice(0, -1),
      createdByUserId: '2',
      desk: 'TEST DESK',
      firm: 'TEST DESK',
      product: mockProduct,
      productIdentifier: {
        productId: mockProduct.productId?.toString() ?? '0',
        securityIdentifierType: 'CUSIP',
        securityIdentifierValue:
          mockProduct.productGeneral.cusip?.toString() ?? '0',
      },
      quantity: 150,
      quotes: [
        {
          createDateTimestamp: DateHelper.subtractMinutes(new Date(), 5)
            .toISOString()
            .slice(0, -1),
          createdByUserId: userName,
          desk: 'TEST DESK',
          firm: 'TEST DESK',
          goodUntilTime: DateHelper.addMinutes(new Date(), 20)
            .toISOString()
            .slice(0, -1),
          quoteAmount: 200,
          quoteProvider: 'TEST FIRM',
          requestId: 10028,
          responseId: 100281,
          revision: 0,
          status: 'Pending',
          userAccount: 4454,
        },
        {
          createDateTimestamp: DateHelper.subtractMinutes(new Date(), 15)
            .toISOString()
            .slice(0, -1),
          createdByUserId: '2',
          desk: 'TEST DESK',
          firm: 'TEST DESK',
          goodUntilTime: DateHelper.subtractMinutes(new Date(), 10)
            .toISOString()
            .slice(0, -1),
          quoteAmount: 200,
          quoteProvider: 'TEST FIRM',
          requestId: 10028,
          responseId: 100282,
          revision: 0,
          status: 'Pending',
          userAccount: 5654,
        },
        {
          createDateTimestamp: DateHelper.subtractMinutes(new Date(), 6)
            .toISOString()
            .slice(0, -1),
          createdByUserId: '3',
          desk: 'TEST DESK',
          firm: 'TEST DESK',
          goodUntilTime: DateHelper.addMinutes(new Date(), 1)
            .toISOString()
            .slice(0, -1),
          quoteAmount: 150,
          quoteProvider: 'TEST FIRM',
          requestId: 10028,
          responseId: 100283,
          revision: 0,
          status: 'Pending',
          userAccount: 4454,
        },
      ],
      requestId: 10028,
      requestType: 'BWIC',
      revision: 1,
      settlementTimestamp: DateHelper.addDays(new Date(), 1)
        .toISOString()
        .slice(0, -1),
      status: 'OPEN',
      userAccount: 4435,
    },
    {
      endTime: DateHelper.subtractMinutes(new Date(), 10)
        .toISOString()
        .slice(0, -1),
      createDateTimestamp: DateHelper.subtractMinutes(new Date(), 5)
        .toISOString()
        .slice(0, -1),
      createdByUserId: '2',
      desk: 'TEST DESK',
      firm: 'TEST DESK',
      product: mockProduct,
      productIdentifier: {
        productId: mockProduct.productId?.toString() ?? '0',
        securityIdentifierType: 'CUSIP',
        securityIdentifierValue:
          mockProduct.productGeneral.cusip?.toString() ?? '0',
      },
      quantity: 150,
      quotes: [
        {
          createDateTimestamp: DateHelper.subtractMinutes(new Date(), 5)
            .toISOString()
            .slice(0, -1),
          createdByUserId: userName,
          desk: 'TEST DESK',
          firm: 'TEST DESK',
          goodUntilTime: DateHelper.addMinutes(new Date(), 20)
            .toISOString()
            .slice(0, -1),
          quoteAmount: 200,
          quoteProvider: 'TEST FIRM',
          requestId: 10029,
          responseId: 100291,
          revision: 0,
          status: 'Pending',
          userAccount: 4454,
        },
        {
          createDateTimestamp: DateHelper.subtractMinutes(new Date(), 15)
            .toISOString()
            .slice(0, -1),
          createdByUserId: '2',
          desk: 'TEST DESK',
          firm: 'TEST DESK',
          goodUntilTime: DateHelper.subtractMinutes(new Date(), 10)
            .toISOString()
            .slice(0, -1),
          quoteAmount: 200,
          quoteProvider: 'TEST FIRM',
          requestId: 10029,
          responseId: 100292,
          revision: 0,
          status: 'Pending',
          userAccount: 5654,
        },
        {
          createDateTimestamp: DateHelper.subtractMinutes(new Date(), 6)
            .toISOString()
            .slice(0, -1),
          createdByUserId: '3',
          desk: 'TEST DESK',
          firm: 'TEST DESK',
          goodUntilTime: DateHelper.addMinutes(new Date(), 1)
            .toISOString()
            .slice(0, -1),
          quoteAmount: 150,
          quoteProvider: 'TEST FIRM',
          requestId: 10029,
          responseId: 100293,
          revision: 0,
          status: 'Pending',
          userAccount: 4454,
        },
      ],
      requestId: 10029,
      requestType: 'BWIC',
      revision: 1,
      settlementTimestamp: DateHelper.addDays(new Date(), 1)
        .toISOString()
        .slice(0, -1),
      status: 'OPEN',
      userAccount: 4435,
    },
  ];
  return mockRFQData;
};
