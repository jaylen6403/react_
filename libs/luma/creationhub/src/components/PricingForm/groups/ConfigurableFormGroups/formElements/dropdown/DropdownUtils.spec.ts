import { EnumValue } from '@luma-fe-workspace/redux';
import { parseEnumToDropdownValue } from './DropdownUtils';

describe('DropdownUtils', () => {
  describe('parseEnumToDropdownValue', () => {
    it('should return proper value for a enums', () => {
      const values = [
        { id: 'id1', label: 'label1' },
        { id: 'id2', label: 'label2' },
      ] as EnumValue[];
      const result = parseEnumToDropdownValue(values);
      expect(result).toEqual([
        { value: 'id1', label: 'label1' },
        { value: 'id2', label: 'label2' },
      ]);
    });

    it('should return proper value for empty input', () => {
      const values = [] as EnumValue[];
      const result = parseEnumToDropdownValue(values);
      expect(result).toEqual([]);
    });
  });
});
