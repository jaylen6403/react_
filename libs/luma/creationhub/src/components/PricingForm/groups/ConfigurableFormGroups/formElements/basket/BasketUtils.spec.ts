import { parseWeight } from './BasketUtils';

describe('BasketUtils', () => {
  describe('parseWeight', () => {
    it('should return proper value', () => {
      const result = parseWeight(1.0);
      expect(result).toEqual(100);
    });
  });
});
