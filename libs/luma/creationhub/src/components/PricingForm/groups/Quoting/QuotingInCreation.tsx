import { useEffect, useState } from 'react';
import { Issuer, IssuerId } from '@luma-fe-workspace/redux';
import {
  LumaCheckbox,
  LumaIcon,
  LumaModal,
} from '@luma-fe-workspace/design-system';
import { Hint } from '../../elements/Hint';
import {
  IssuerLogo,
  Rectangle,
  CenteredCell,
  QuotingWrapper,
  Title,
  NoIssuersErrorTitle,
  NoIssuersErrorText,
  NoIssuersErrorButton,
  QuotingTable,
} from './Quoting.styles';
import { issuersDisplayData } from './QuotingUtils';

interface QuotingProps {
  issuers: Record<IssuerId, Issuer>;
  selectedIssuers: IssuerId[];
  toggleIssuer: (issuerId: IssuerId) => void;
  toggleAllIssuers: (value: boolean) => void;
}

export function QuotingInCreation({
  issuers,
  selectedIssuers,
  toggleIssuer,
  toggleAllIssuers,
}: QuotingProps) {
  const [displayNoIssuersModal, setDisplayNoIssuersModal] = useState(false);
  const areIssuersEmpty = !issuers || !Object.keys(issuers).length;
  const areAllIssuersSelected =
    !areIssuersEmpty &&
    Object.keys(issuers).every((key) => selectedIssuers.includes(key));

  useEffect(() => {
    setDisplayNoIssuersModal(areIssuersEmpty);
  }, [issuers]);

  const hideNoIssuersModal = () => {
    setDisplayNoIssuersModal(false);
  };

  const columns = [
    {
      label: 'Available Issuers',
      header: (
        <LumaCheckbox
          checkboxKey="toggleIssuers"
          checked={areAllIssuersSelected}
          onChange={(e) => {
            toggleAllIssuers(e.target.checked);
          }}
          label="Available Issuers"
          data-testid="checkbox-available_issuers"
        />
      ),
      field: ({ selected, id }: { selected: boolean; id: IssuerId }) => {
        const displayData = issuersDisplayData[id] ?? { label: id };
        return (
          <LumaCheckbox
            checkboxKey={id}
            checked={selected}
            onChange={() => {
              toggleIssuer(id);
            }}
            data-testid={`checkbox-${id}`}
            label={
              displayData?.icon ? (
                <IssuerLogo src={displayData.icon} alt={id} />
              ) : (
                displayData.label
              )
            }
          />
        );
      },
    },
    {
      label: 'Quote',
      field: ({
        canAutoQuoteIndicative,
      }: {
        canAutoQuoteIndicative: boolean;
      }) => (
        <CenteredCell>
          {canAutoQuoteIndicative ? (
            <Rectangle />
          ) : (
            <LumaIcon
              style={{ fontSize: '1.25rem' }}
              type="regular"
              iconCode="user-clock"
            />
          )}
        </CenteredCell>
      ),
    },
    // NOTE: currently not sent by backend, can be restored when implemented
    // {
    //   label: 'Credit Rating',
    //   field: ({ rating, id }: { rating: string; id: IssuerId }) => (
    //     <CenteredCell data-testid={`${id}-rating`}>{rating}</CenteredCell>
    //   ),
    // },
  ];

  const rows = Object.entries(issuers).map(
    ([id, { canAutoQuoteIndicative }]) => {
      const selected = selectedIssuers.includes(id);
      return {
        id,
        values: [
          { selected, id },
          { canAutoQuoteIndicative, id },
          // { rating, id },
        ],
      };
    }
  );
  return (
    <>
      <LumaModal
        isOpen={displayNoIssuersModal}
        appElement="#root"
        style={{
          content: {
            border: 'none',
            maxWidth: '29rem',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.37)',
          },
        }}
      >
        <NoIssuersErrorTitle>Error</NoIssuersErrorTitle>
        <NoIssuersErrorText>
          No issuer is assigned to the selected program. Please contact Luma
          support for assistance.
        </NoIssuersErrorText>
        <NoIssuersErrorButton
          variant="primary"
          size="large"
          onClick={hideNoIssuersModal}
          data-testid="button-dismiss_no_issuer_err"
        >
          Dismiss
        </NoIssuersErrorButton>
      </LumaModal>
      <QuotingWrapper>
        <Title>Get Quotes</Title>
        <Hint>
          Request quotes from individual issuers below. The{' '}
          <LumaIcon iconCode="user-clock" type="regular" /> indicates a manual
          quote from issuer.
        </Hint>
        <QuotingTable columns={columns} rows={rows} />
      </QuotingWrapper>
    </>
  );
}
