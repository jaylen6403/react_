import React, { Dispatch, SetStateAction, useMemo } from 'react';

import {
  PhysicalSettlement,
  UnderlierRest,
  CashSettlementRates,
  EventProductData,
} from '@luma-fe-workspace/redux';
import { colors, LumaButton, LumaIcon } from '@luma-fe-workspace/design-system';
import {
  RowData,
  ConfirmationStatus,
  EventCalculationStatuses,
  PrincipalProximity,
} from './AGGridTable';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { bofaLogo } from '../../utils/constants';
import { ITooltipParams } from 'ag-grid-community';
import {
  getPhysicalSettlementData,
  handleLMProductLink,
  getBarrierText,
} from '../../utils/gridUtils';

import {
  IssuerContainer,
  IssuerLogo,
  UnderlierTicker,
  IssuerSecuritynumber,
  UnderlierWrapper,
  UnderlierText,
  StatusContainer,
  StatusLabelContainer,
  StatusLabel,
  SettlementRates,
  SettlementRate,
  SettlementRateLabel,
  SettlementRateValue,
  SecurityText,
  StructuredContainer,
  StructuredText,
  UnderlinerContainer,
  IssuerName,
  TooltipWrapper,
  ThresholdContainer,
  PrincipalProximityWrapper,
  PrincipalProximityValue,
  Barrier,
  BarrierValue,
  PrincipalProximityNumber,
  UnderlierPerformanceText,
} from './AGGridTableComponents.style';

interface ColumnProps {
  data: RowData;
}
export const UnderlierColumn = ({ data }: ColumnProps) => {
  const { Underliers: underliers } = data;
  const activeUnderlier: UnderlierRest | undefined = useMemo(
    () =>
      underliers?.find(
        (underlier) => underlier.ticker === data.activeUnderlier
      ),
    [underliers, data.activeUnderlier]
  );
  const sortedUnderliers: UnderlierRest[] | undefined = useMemo(() => {
    const nonActiveUnderliers = underliers?.filter(
      (underlier) => underlier.ticker !== data.activeUnderlier
    );
    return [
      ...(activeUnderlier ? [activeUnderlier] : []),
      ...(nonActiveUnderliers ? nonActiveUnderliers : []),
    ];
  }, [activeUnderlier, underliers, data.activeUnderlier]);

  let count = 0;
  return (
    <UnderlinerContainer>
      {data.underlierPerformance ? (
        <UnderlierPerformanceText performance={data.underlierPerformance}>
          {data.underlierPerformance}%
        </UnderlierPerformanceText>
      ) : null}
      <UnderlierWrapper>
        {sortedUnderliers?.map((underlier: UnderlierRest, idx: number) => {
          count += 1;
          if (count <= 3) {
            return (
              <UnderlierTicker
                key={idx}
                activeUnderlier={data.activeUnderlier === underlier.ticker}
                performance={data.underlierPerformance}
              >
                <UnderlierText>{underlier.ticker}</UnderlierText>
              </UnderlierTicker>
            );
          } else if (count === 4) {
            return (
              <UnderlierTicker key={idx}>
                <UnderlierText>{`+${count - 2} More`}</UnderlierText>
              </UnderlierTicker>
            );
          } else {
            return null;
          }
        })}
      </UnderlierWrapper>
    </UnderlinerContainer>
  );
};

export const formatIssuerColumn = ({ data }: ColumnProps) => (
  <IssuerContainer>
    <IssuerLogo
      src={bofaLogo}
      alt={data.eventProductData?.issuer || ''}
      width={'8.75rem'}
    />
    <IssuerName>{data.eventProductData?.issuer || ''}</IssuerName>
    <IssuerSecuritynumber onClick={() => handleLMProductLink(data.cusip)}>
      {data.cusip || ''}
    </IssuerSecuritynumber>

    <SecurityText>{data.productSymbol || ''}</SecurityText>
  </IssuerContainer>
);

export const generateActions = (
  setDrawerData: Dispatch<SetStateAction<EventProductData | undefined>>,
  setProductStructure: Dispatch<SetStateAction<string | undefined>>
) => {
  const EmailAction = ({ data }: ColumnProps) => {
    const isButtonDisabled = useMemo((): boolean => {
      if (!data['Event Calculation']) return true;
      if (
        ![
          EventCalculationStatuses.CONFIRMED,
          EventCalculationStatuses.REVIEW,
        ].includes(data['Event Calculation'])
      )
        return true;
      return false;
    }, [data]);

    return (
      <LumaButton
        variant="secondary"
        size="small"
        disabled={isButtonDisabled}
        onClick={() => {
          setDrawerData(data.eventProductData);
          setProductStructure(data.eventProductData?.structureNameInternal);
        }}
        icon={{
          iconComponent: <LumaIcon iconCode="envelope" />,
        }}
      >
        Send Notification
      </LumaButton>
    );
  };
  return EmailAction;
};

interface StatusProps {
  color: string;
  icon: IconName;
}
interface StatusSymbols {
  [key: string]: StatusProps;
}

const statusSymbols: StatusSymbols = {
  'Upcoming Event': { color: 'black', icon: 'calendar' },
  'Pending Event': { color: colors.warning60, icon: 'clock' },
  Review: { color: colors.negative60, icon: 'circle-xmark' },
  Confirmed: { color: colors.positive60, icon: 'check-circle' },
};

interface CashSettlementRateMap {
  fieldName: keyof CashSettlementRates;
  label: string;
}
const cashSettlementRatesMapping: CashSettlementRateMap[] = [
  { fieldName: 'lumaRate', label: 'Luma' },
  { fieldName: 'issuerRate', label: 'Issuer' },
  { fieldName: 'rate', label: 'Confirmed' },
];

interface PhysicalSettlementMap {
  fieldName: 'lumaValue' | 'issuerValue' | 'value';
  label: string;
}
const physicalSettlementRatesMapping: PhysicalSettlementMap[] = [
  { fieldName: 'lumaValue', label: 'Luma' },
  { fieldName: 'issuerValue', label: 'Issuer' },
  { fieldName: 'value', label: 'Confirmed' },
];

const getPhysicalSettlement = (
  physicalSettlements: PhysicalSettlement[] | undefined,
  fieldName: 'lumaValue' | 'issuerValue' | 'value'
): string | null => {
  if (!physicalSettlements) return '';
  const { cash: cashSettlement, shares: sharesSettlement } =
    getPhysicalSettlementData(physicalSettlements);

  const sharePlurality =
    sharesSettlement?.[fieldName] === 1 ? 'Share' : 'Shares';

  const shares = sharesSettlement?.[fieldName]
    ? `${sharesSettlement[fieldName]} ${sharePlurality}`
    : '';
  const cash = cashSettlement?.[fieldName]
    ? `$${cashSettlement?.[fieldName] || 0}`
    : '';
  return sharesSettlement?.[fieldName]
    ? `${shares}${shares && cash && ' + '}${cash}`
    : null;
};

const formatCashSettlement = (
  rates: CashSettlementRates,
  type: keyof CashSettlementRates
): string | null => {
  return rates[type] ? `${rates[type]}%` : null;
};

export const ThresholdProximityColumn = ({ data }: ColumnProps) => {
  const barrier = data?.Threshold;
  const principalProximityAboveOrBelow = data?.principalProximityAboveOrBelow;
  const principalProximityValue = data?.principalProximityValue;
  const barrierText = useMemo(
    () => getBarrierText(data?.['Event Type'], data.downsideType),
    [data]
  );

  const principalProximityDisplay: string | null = useMemo(() => {
    if (principalProximityAboveOrBelow) {
      if (principalProximityAboveOrBelow === PrincipalProximity.POSITIVE) {
        return ' Above';
      } else {
        return ' Below';
      }
    }
    return null;
  }, [principalProximityAboveOrBelow]);

  return (
    <ThresholdContainer>
      <PrincipalProximityWrapper>
        <PrincipalProximityValue
          principleProxAboveOrBelow={principalProximityAboveOrBelow}
        >
          <PrincipalProximityNumber>
            {principalProximityValue || '------'}
          </PrincipalProximityNumber>
        </PrincipalProximityValue>
        {principalProximityDisplay}
      </PrincipalProximityWrapper>

      {barrier ? (
        <Barrier>
          <BarrierValue>
            {+(barrier * 100).toFixed(2)}% {barrierText ?? null}
          </BarrierValue>
        </Barrier>
      ) : null}
    </ThresholdContainer>
  );
};

export const StatusComponent = ({ data }: ColumnProps) => {
  const confirmationStatus: ConfirmationStatus | undefined =
    data?.confirmationStatus;
  return (
    <StatusContainer>
      {confirmationStatus?.status && (
        <StatusLabelContainer>
          <StatusLabel color={statusSymbols[confirmationStatus.status]?.color}>
            {confirmationStatus.status}
          </StatusLabel>

          {confirmationStatus.status === EventCalculationStatuses.CONFIRMED ? (
            <SettlementRateValue>
              <SettlementRateValue>
                {confirmationStatus?.cashSettlementRates
                  ? formatCashSettlement(
                      confirmationStatus.cashSettlementRates,
                      'rate'
                    )
                  : getPhysicalSettlement(
                      confirmationStatus.physicalSettlementRates,
                      'value'
                    )}
              </SettlementRateValue>
            </SettlementRateValue>
          ) : null}
        </StatusLabelContainer>
      )}
      {confirmationStatus?.cashSettlementRates && (
        <SettlementRates>
          {cashSettlementRatesMapping.map(
            (cashSettlementRate: CashSettlementRateMap, idx: number) => {
              if (
                cashSettlementRate.label === 'Confirmed' &&
                confirmationStatus.status === EventCalculationStatuses.CONFIRMED
              )
                return null;
              return confirmationStatus.cashSettlementRates?.[
                cashSettlementRate.fieldName
              ] ? (
                <SettlementRate key={idx}>
                  <SettlementRateLabel>
                    {cashSettlementRate.label}
                  </SettlementRateLabel>
                  <SettlementRateValue>
                    {formatCashSettlement(
                      confirmationStatus.cashSettlementRates,
                      cashSettlementRate.fieldName
                    )}
                  </SettlementRateValue>
                </SettlementRate>
              ) : null;
            }
          )}
        </SettlementRates>
      )}
      {confirmationStatus?.physicalSettlementRates && (
        <SettlementRates>
          {physicalSettlementRatesMapping.map(
            (physicalSettlement: PhysicalSettlementMap, idx: number) => {
              const physicalSettlementValue = getPhysicalSettlement(
                confirmationStatus.physicalSettlementRates,
                physicalSettlement.fieldName
              );
              if (
                !physicalSettlementValue ||
                (physicalSettlement.label === 'Confirmed' &&
                  confirmationStatus.status ===
                    EventCalculationStatuses.CONFIRMED)
              )
                return null;
              return (
                <SettlementRate key={idx}>
                  <SettlementRateLabel>
                    {physicalSettlement.label}
                  </SettlementRateLabel>
                  <SettlementRateValue>
                    {physicalSettlementValue}
                  </SettlementRateValue>
                </SettlementRate>
              );
            }
          )}
        </SettlementRates>
      )}
    </StatusContainer>
  );
};

export const StructuredComponent = ({ data }: ColumnProps) => (
  <StructuredContainer>
    <StructuredText>{data.Structure}</StructuredText>
  </StructuredContainer>
);

export const IssuerNameTooltip = ({
  data,
}: ITooltipParams<RowData, string>) => {
  return <TooltipWrapper>{data?.eventProductData?.issuer}</TooltipWrapper>;
};
