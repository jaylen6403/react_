import { useCallback, useEffect, useState } from 'react';
import { MenuItem, TableCellDropdown } from '@luma-fe-workspace/design-system';
import { DateHelper } from '@luma-fe-workspace/utility';

export interface TableCellTimeOffsetProps {
  /**
   * Function to set cell value
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: any;
  /**
   * RFQ collection periond
   */
  goodForTime: string | undefined;
}

const msPerMinute = 60000;
export const defaultQuoteDeadlineOffsetMs = 5 * msPerMinute;

export const TableCellTimeOffset = ({
  setValue,
  goodForTime,
}: TableCellTimeOffsetProps) => {
  const [offset, setOffset] = useState(defaultQuoteDeadlineOffsetMs);
  const [deadlineOptions, setDeadlineOptions] = useState<MenuItem[]>([]);
  const [time, setTime] = useState<Date>(
    DateHelper.addMilliseconds(new Date(), defaultQuoteDeadlineOffsetMs)
  );
  useEffect(() => {
    setTime(DateHelper.addMilliseconds(new Date(), offset));
  }, [offset]);

  const handleSelect = useCallback(
    (newOffset: number | string) => {
      if (!goodForTime) return;
      if (typeof newOffset === 'string') {
        const bidDeadline = DateHelper.convertToUTC(goodForTime);
        const differenceinMs = DateHelper.differenceInMilliseconds(
          bidDeadline,
          new Date()
        );
        setOffset(differenceinMs);
        setValue('Max');
        setTime(DateHelper.addMilliseconds(new Date(), differenceinMs));
      } else {
        setOffset(newOffset);
        setValue(newOffset);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [goodForTime, offset, setValue]
  );

  const setDueTimes = useCallback(() => {
    if (!goodForTime) {
      return;
    }
    const baseOptions = [
      defaultQuoteDeadlineOffsetMs,
      10 * msPerMinute,
      30 * msPerMinute,
      60 * msPerMinute,
    ];

    const bidDeadline = DateHelper.convertToUTC(goodForTime);
    const differenceInMs = DateHelper.differenceInMilliseconds(
      bidDeadline,
      new Date()
    );
    const quoteDeadines: MenuItem[] = [];
    for (let i = 0; i < baseOptions.length; i++) {
      if (baseOptions[i] > differenceInMs) {
        break;
      } else {
        quoteDeadines.push({
          display: `${baseOptions[i] / msPerMinute} min`,
          onClick: () => handleSelect(baseOptions[i]),
        });
      }
    }
    if (quoteDeadines.length === 0) {
      setOffset(differenceInMs);
      setValue('Max');
      setTime(DateHelper.addMilliseconds(new Date(), differenceInMs));
    }

    quoteDeadines.push({
      display: 'Max',
      onClick: () => handleSelect('Max'),
    });
    setDeadlineOptions(quoteDeadines);
  }, [goodForTime, handleSelect, setValue]);

  useEffect(() => {
    setDueTimes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (deadlineOptions.length === 1) {
    return (
      <span>
        {time.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </span>
    );
  }
  return (
    <TableCellDropdown
      items={deadlineOptions}
      value={time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })}
    />
  );
};
