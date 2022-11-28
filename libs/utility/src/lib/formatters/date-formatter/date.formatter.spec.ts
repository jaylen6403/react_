import { DateFormatter } from '../date-formatter/date.formatter';

describe('date-helper', () => {
  it('should format dates as specified', () => {
    const date = new Date('05/05/2021');
    const formattedDate = DateFormatter.formatLocalDate(date);

    expect(formattedDate).toEqual('2021-05-05');
  });
});
