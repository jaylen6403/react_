import { RfqTraded } from '@luma-fe-workspace/redux';
import { RFQQuote } from './RFQQuote';
import rfqMock from '../../../../mocks/rfqMock';

describe('RFQQuote', () => {
  const updateRfqMock = jest.fn();
  const rfq = {
    ...rfqMock,
    id: 'test',
    version: 'versionTest',
  } as RfqTraded;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call action for indicative quote', () => {
    const quote = RFQQuote({
      rfq,
      updateRfq: updateRfqMock,
      isUpdateRfqPending: false,
      quoteType: 'INDICATIVE',
    });

    quote?.action({ quote: '', validUntil: 23 });
    expect(updateRfqMock).toBeCalledTimes(1);
  });

  it('should call action for tradable quote', () => {
    const quote = RFQQuote({
      rfq,
      updateRfq: updateRfqMock,
      isUpdateRfqPending: false,
      quoteType: 'TRADABLE',
    });

    quote?.action({ quote: '', validUntil: 23 });
    expect(updateRfqMock).toBeCalledTimes(1);
  });
});
