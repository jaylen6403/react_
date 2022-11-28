import { EnumValue } from '@luma-fe-workspace/redux';

export const parseEnumToDropdownValue = (values: EnumValue[]) => {
  return values.map(({ id, label }) => {
    return { value: id, label };
  });
};
