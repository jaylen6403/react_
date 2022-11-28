import { DataItemProps } from '@luma-fe-workspace/design-system';
import { DateRange } from '@luma-fe-workspace/redux';

interface DateItemProps extends DataItemProps {
  value: DateRange;
}

export const dates: DateItemProps[] = [
  {
    label: 'Today',
    value: 'T',
  },
  {
    label: '1 Week',
    value: '1W',
  },
  {
    label: '2 Weeks',
    value: '2W',
  },
  {
    label: '1 Month',
    value: '1M',
  },
  {
    label: '3 Months',
    value: '3M',
  },
  {
    label: '6 Months',
    value: '6M',
  },
  {
    label: '12 Months',
    value: '12M',
  },
  {
    label: '18 Months',
    value: '18M',
  },
];
