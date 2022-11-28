import { useEffect, useState } from 'react';
import {
  RemoveIcon,
  Input,
  LabelPart,
  Unit,
  EntryPart,
  ErrorMessage,
  ChipContainer,
  Icon,
  Chip,
} from './LumaChip.styles';
import { IconCode, LumaIcon } from '../LumaIcon';

type ChipError = {
  hasError: boolean;
  position?: 'bottom' | 'side';
  errorMessage?: string;
};

const enum StateEnum {
  locked = 'locked',
  removable = 'removable',
}

export interface ChipProps {
  /**
   * Children appearing on the left side of the chip.
   */
  children: React.ReactNode;
  /**
   * Style variant.
   */
  variant: 'primary' | 'secondary' | 'tertiary' | 'icon';
  /**
   * State of chip.
   */
  state: keyof typeof StateEnum;
  /**
   * Whether the value part is disabled
   */
  disabled?: boolean;
  /**
   * Size of chip.
   */
  sizeVariant: 'regular' | 'small' | 'icon';
  /**
   * Whether the chip should have a value part
   */
  entry?: boolean;
  /**
   * Code of the icon to be displayed in the chip.
   */
  iconCode?: IconCode;
  /**
   * Defines action for delete
   */
  onRemove?: React.MouseEventHandler<HTMLDivElement>;
  /**
   * onChange action
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * onBlur action
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Sets a numeric value
   */
  value?: number;
  /**
   * Value units displayed
   */
  unit?: string;
  /**
   * Defines error
   */
  error?: ChipError;
  /**
   * Defines max length of input in entry part
   */
  entryMaxLength?: number;
}

export const LumaChip = ({
  children,
  variant = 'primary',
  state = StateEnum.locked,
  disabled = false,
  sizeVariant = 'regular',
  entry = false,
  iconCode,
  onRemove,
  onChange,
  onBlur,
  value,
  unit = '%',
  error = { hasError: false },
  entryMaxLength = 3,
}: ChipProps) => {
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    setInputValue(value?.toString() ?? '');
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const inputPatternRegex = /^[0-9\b]+$/;
    if (inputValue === '' || inputPatternRegex.test(inputValue)) {
      setInputValue(inputValue);
      if (onChange) {
        onChange(e);
      }
    }
  };

  const calculateInputWidth = (inputValue: string) => {
    const inputLength = inputValue.length;
    return `${inputLength !== 0 ? inputLength + 1 : 2}ch`;
  };

  return (
    <ChipContainer error={error}>
      <Chip sizeVariant={sizeVariant}>
        <LabelPart sizeVariant={sizeVariant} variant={variant} entry={entry}>
          {state === StateEnum.removable && (
            <RemoveIcon onClick={onRemove} data-testid="chip-remove">
              <LumaIcon iconCode="times" />
            </RemoveIcon>
          )}

          {children}

          {iconCode && (
            <Icon>
              <LumaIcon iconCode={iconCode} />
            </Icon>
          )}
        </LabelPart>

        {entry && (
          <EntryPart
            sizeVariant={sizeVariant}
            error={error}
            variant={variant}
            disabled={disabled}
            state={state}
          >
            <Input
              type="text"
              maxLength={entryMaxLength}
              sizeVariant={sizeVariant}
              value={inputValue}
              error={error}
              onChange={handleChange}
              onBlur={onBlur}
              style={{
                width: calculateInputWidth(inputValue),
              }}
              disabled={disabled || state === StateEnum.locked}
              data-testid="chip-entry"
            />
            <Unit sizeVariant={sizeVariant}>
              {inputValue.toString().length > 0 && unit}
            </Unit>
          </EntryPart>
        )}
      </Chip>
      {error?.hasError && error?.errorMessage && (
        <ErrorMessage>{error.errorMessage}</ErrorMessage>
      )}
    </ChipContainer>
  );
};
