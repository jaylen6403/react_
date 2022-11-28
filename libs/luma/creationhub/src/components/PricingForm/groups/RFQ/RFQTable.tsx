import { useState } from 'react';
import { IssuerPricing } from '@luma-fe-workspace/redux';
import { LumaTextEntry } from '@luma-fe-workspace/design-system';
import { RejectQuoteSection } from './RFQ.styles';
import { DropdownItem } from './RFQ';
import { QuotingTable } from '../Quoting/Quoting.styles';
import { useRowsAndColumns } from './RFQTable.Utils';

interface RfqTableProps {
  rfq: IssuerPricing;
  externalId: string | undefined;
  setExternalId: (value: string) => void;
  patchExternalId: () => void;
  actions?: DropdownItem[];
  isEditQuote?: boolean;
  isEditValidUntil?: boolean;
  isEditRejectionReason?: boolean;
}

export function RFQTable({
  rfq,
  externalId,
  setExternalId,
  patchExternalId,
  actions,
  isEditQuote,
  isEditValidUntil,
  isEditRejectionReason,
}: RfqTableProps) {
  const [rejectionReason, setRejectionReason] = useState('');

  const [rows, columns] = useRowsAndColumns({
    rfq,
    isEditQuote,
    isEditValidUntil,
    actions,
    externalId,
    setExternalId,
    patchExternalId,
    rejectionReason,
  });

  return (
    <>
      <QuotingTable columns={columns} rows={rows} />
      {isEditRejectionReason ? (
        <RejectQuoteSection>
          <div>Rejection reason: </div>
          <LumaTextEntry
            sizeVariant="small"
            value={rejectionReason}
            onChange={(e) => {
              setRejectionReason(e.target.value);
            }}
            data-testid="input-rejection_reason"
          />
        </RejectQuoteSection>
      ) : null}
    </>
  );
}
