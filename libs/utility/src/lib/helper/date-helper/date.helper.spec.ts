import { DateHelper } from '@luma-fe-workspace/utility';

describe('date-helper', () => {
  it('adds 7 days to dates', () => {
    const date = new Date('12/23/21');
    const date2 = new Date('12/30/21');
    const weekAdded = DateHelper.addWeek(date);
    const weekAddedNewYear = DateHelper.addWeek(date2);

    expect(weekAdded).toEqual(new Date('12/30/21'));
    expect(weekAddedNewYear).toEqual(new Date('01/06/22'));
  });

  it('compares dates', () => {
    const date = new Date('12/23/21');
    const date2 = new Date('05/06/22');
    const compare = DateHelper.isDateBefore(date, date2);
    const compare2 = DateHelper.isDateBefore(date2, date);

    expect(compare).toEqual(true);
    expect(compare2).toEqual(false);
  });
});
