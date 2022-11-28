import { useRef, useState } from 'react';
import { ValidUntilButton, ValidUntilInput } from './LumaValidUntil.styles';

export type LumaValidUntilProps = {
  /** Callback with entered minutes passed in as argument */
  onChange: (validUntil: number | undefined) => void;
  inputDataTestId?: string;
  buttonDataTestId?: string;
};

export function LumaValidUntil({
  onChange,
  inputDataTestId = 'input-valid_until',
  buttonDataTestId = 'button-valid_until',
}: LumaValidUntilProps) {
  const [focus, setFocus] = useState(false);
  const [validUntil, setValidUntil] = useState<number | null>(null);
  const inputRef = useRef(document.createElement('input'));

  return focus ? (
    <ValidUntilInput
      type="number"
      ref={inputRef}
      data-testid={inputDataTestId}
      value={validUntil ?? ''}
      min="0"
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          const value = inputRef.current.value;
          setValidUntil(value ? Number(value) : null);
          onChange(value ? Number(value) : undefined);
          setFocus(false);
        }
      }}
      onChange={(event) => {
        const value = event.target.value;
        setValidUntil(value ? Number(value) : null);
        onChange(value ? Number(value) : undefined);
      }}
    />
  ) : (
    <ValidUntilButton
      data-testid={buttonDataTestId}
      onClick={() => {
        setFocus(true);
        setTimeout(() => inputRef?.current?.focus(), 0);
      }}
    >
      {(validUntil || validUntil === 0) && <span>{validUntil} minutes</span>}
    </ValidUntilButton>
  );
}
