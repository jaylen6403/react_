import { SecondaryOrder } from '@luma-fe-workspace/redux';
import { mockProduct } from './mockProductData';
import { DateHelper } from '@luma-fe-workspace/utility';

export const getMockOrderData = (userName: string) => {
  const mockRFQData: SecondaryOrder[] = [
    {
      account: 4454,
      associatedRequestId: 1,
      associatedResponseId: 2,
      associatedUserIds: {
        liquidityProvider: userName,
        liquidityTaker: 'liquidityTaker',
      },
      coverPrice: 150,
      productIdentifier: {
        productId: mockProduct.productId?.toString() ?? '0',
        securityIdentifierType: 'CUSIP',
        securityIdentifierValue:
          mockProduct.productGeneral.cusip?.toString() ?? '0',
      },
      orderId: 1,
      price: 200,
      quantity: 150,
      side: 'BUY',
      status: 'PENDING',
      settlement: DateHelper.addDays(new Date(), 1).toISOString(),
    },
    {
      account: 4454,
      associatedRequestId: 3,
      associatedResponseId: 4,
      associatedUserIds: {
        liquidityProvider: 'liquidityProvider',
        liquidityTaker: userName,
      },
      coverPrice: 190,
      productIdentifier: {
        productId: mockProduct.productId?.toString() ?? '0',
        securityIdentifierType: 'CUSIP',
        securityIdentifierValue:
          mockProduct.productGeneral.cusip?.toString() ?? '0',
      },
      orderId: 2,
      price: 100,
      quantity: 250,
      side: 'BUY',
      status: 'PENDING',
      settlement: DateHelper.addDays(new Date(), 2).toISOString(),
    },
    {
      account: 4454,
      associatedRequestId: 5,
      associatedResponseId: 6,
      associatedUserIds: {
        liquidityProvider: userName,
        liquidityTaker: 'liquidityTaker',
      },
      coverPrice: 10,
      productIdentifier: {
        productId: mockProduct.productId?.toString() ?? '0',
        securityIdentifierType: 'CUSIP',
        securityIdentifierValue:
          mockProduct.productGeneral.cusip?.toString() ?? '0',
      },
      executed: DateHelper.addDays(new Date(), -2).toISOString(),
      orderId: 3,
      price: 50,
      quantity: 140,
      side: 'BUY',
      status: 'FILLED',
      settlement: DateHelper.addDays(new Date(), 1).toISOString(),
    },
    {
      account: 4454,
      associatedRequestId: 7,
      associatedResponseId: 8,
      associatedUserIds: {
        liquidityProvider: userName,
        liquidityTaker: 'liquidityTaker',
      },
      coverPrice: 90,
      productIdentifier: {
        productId: mockProduct.productId?.toString() ?? '0',
        securityIdentifierType: 'CUSIP',
        securityIdentifierValue:
          mockProduct.productGeneral.cusip?.toString() ?? '0',
      },
      orderId: 4,
      price: 10,
      quantity: 40,
      side: 'BUY',
      status: 'CANCELED',
      settlement: DateHelper.addDays(new Date(), 4).toISOString(),
    },
    {
      account: 4454,
      associatedRequestId: 9,
      associatedResponseId: 10,
      associatedUserIds: {
        liquidityProvider: 'liquidityProvider',
        liquidityTaker: userName,
      },
      coverPrice: 40,
      productIdentifier: {
        productId: mockProduct.productId?.toString() ?? '0',
        securityIdentifierType: 'CUSIP',
        securityIdentifierValue:
          mockProduct.productGeneral.cusip?.toString() ?? '0',
      },
      orderId: 5,
      price: 100,
      quantity: 50,
      side: 'BUY',
      status: 'REJECTED',
      settlement: DateHelper.addDays(new Date(), 3).toISOString(),
    },
  ];
  return mockRFQData;
};
