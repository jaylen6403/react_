import { ISINInputWrapper, ISINInput } from './RFQ.styles';

interface RfqIsinProps {
  isin: string | undefined;
  setIsin: (value: string) => void;
  patchIsin: () => void;
}

export function RFQISIN({ isin, setIsin, patchIsin }: RfqIsinProps) {
  return (
    <ISINInputWrapper>
      <ISINInput
        sizeVariant="large"
        label="ISIN"
        data-testid="input-isin"
        value={isin}
        onChange={(e) => setIsin(e.target.value)}
        onBlur={patchIsin}
      />
    </ISINInputWrapper>
  );
}
