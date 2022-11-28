import React from 'react';
import { colors } from '@luma-fe-workspace/design-system';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import {
  ActiveUnderlier,
  CellWrapper,
  InactiveUnderlier,
  ProductIdentifier,
  Text,
  UnderliersWrapper,
  CurrencyBubble,
  NotionalDrawerButton,
} from '../AGGridTable/AGGridTable.styles';
import {
  GetCompanyLogosUsingGetResponseArg,
  LifecycleEventLM,
} from '@luma-fe-workspace/redux';
import { createProductDetailsUrl } from '../../utils/linkingUtils';
import { IssuerLogo } from './EventTable.styles';

export const formatDisplayString = (string: string) => {
  return string
    ?.split('_')
    .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(' ');
};

const getPercentColor = (value: number | null, shouldBeColored: boolean) => {
  if (shouldBeColored && value) {
    if (value >= 0) {
      return colors.positive30;
    } else {
      return colors.negative30;
    }
  } else {
    return colors.neutral80;
  }
};

export const getPercentString = (
  value: number | null,
  decimalPlaces?: number
) => {
  if (value || value === 0) {
    const fixedDecimalPlaceValue = decimalPlaces
      ? value.toFixed(decimalPlaces)
      : value;
    // Negative signs are handled by the value itself
    if (value >= 0) {
      return `+${fixedDecimalPlaceValue}%`;
    } else {
      return `${fixedDecimalPlaceValue}%`;
    }
  } else {
    return null;
  }
};

function isActiveUnderlier(activeUnderlier: string, underlier: string) {
  return activeUnderlier === underlier;
}

export const getEventListColumns = (
  setSelectedEvent: (event: LifecycleEventLM) => void,
  displayCurrency: string,
  logoData?: GetCompanyLogosUsingGetResponseArg
) => {
  const columnDefs: ColDef[] = [
    {
      field: 'eventDate',
      colId: 'eventDate',
      headerName: 'Date',
      cellClass: 'eventDate',
      minWidth: 100,
      sortable: true,
      sort: 'asc',
    },
    {
      colId: 'productIdentifier',
      headerName: 'Issuer/Product ID',
      wrapText: true,
      cellStyle: { wordBreak: 'normal', textIndent: 0, paddingLeft: 7.5 },
      cellRenderer: (e: ICellRendererParams) => {
        const event: LifecycleEventLM = e.data;
        const issuer = event.issuer;
        const cusip = event.cusip;
        const isin = event.isin;
        const productDetailPageURL = createProductDetailsUrl(cusip ?? isin);
        const issuerLogo = logoData?.[`${event.issuer}`];
        const issuerURL = `https://cms.lumafintech.com/cms-assets/PROD/images/company-logos/${issuerLogo}`;

        return (
          <CellWrapper onClick={() => setSelectedEvent(event)}>
            {logoData && (
              <div>
                <IssuerLogo
                  src={issuerURL}
                  alt="issuer_logo"
                  onError={(event) => {
                    const target = event.target as HTMLInputElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            )}

            <Text>{issuer}</Text>
            <ProductIdentifier href={productDetailPageURL} target="_blank">
              {cusip ?? isin}
            </ProductIdentifier>
          </CellWrapper>
        );
      },
    },
    {
      field: 'structureType',
      colId: 'structureType',
      maxWidth: 350,
      minWidth: 250,
      headerName: 'Structure Type',
      wrapText: true,
      cellStyle: {
        wordBreak: 'normal',
        textIndent: 0,
        paddingLeft: 7.5,
      },
      cellRenderer: (e: ICellRendererParams) => {
        const event: LifecycleEventLM = e.data;
        const structureType = event.structureType;
        return (
          <CellWrapper>
            <Text>{structureType}</Text>
          </CellWrapper>
        );
      },
    },
    {
      colId: 'eventType',
      headerName: 'Event Type',
      wrapText: true,
      headerClass: 'header-left-padding',
      cellStyle: { wordBreak: 'normal', textIndent: 0, paddingLeft: 16 },
      cellRenderer: (e: ICellRendererParams) => {
        const event: LifecycleEventLM = e.data;
        const eventType = event.eventType;
        const couponRate = event.couponRatePercent;

        return (
          <CellWrapper>
            <Text>
              {formatDisplayString(eventType)}{' '}
              {(eventType === 'COUPON' || eventType === 'CALL') && 'Eval'}
            </Text>
            {'coupon' === eventType.toLowerCase() && (
              // TODO: Change p.p. to p.a. (per-period -> per-annum) once data is available
              <Text fontWeight="bold">
                {(couponRate * 100).toFixed(2)}% p.p.
              </Text>
            )}
          </CellWrapper>
        );
      },
    },
    {
      colId: 'eventProximity',
      headerName: 'Event Proximity',
      cellRenderer: (e: ICellRendererParams) => {
        const event: LifecycleEventLM = e.data;
        const eventProximity = event.eventProximityPercent;
        const eventLevel = event.eventLevelPercent * 100;
        const eventType = event.eventType;

        // No decimals for the event level
        const cellView =
          event.eventType === 'MATURITY' ? '-----' : `${eventLevel}%`;

        return (
          <CellWrapper>
            <Text fontWeight={'bold'}>
              {getPercentString(eventProximity, 2)}
            </Text>
            <Text>{cellView}</Text>
            <Text>{formatDisplayString(eventType)}</Text>
          </CellWrapper>
        );
      },
    },
    {
      field: 'basketType',
      colId: 'basketType',
      headerName: 'Basket Type',
    },
    {
      colId: 'underlierPerformance',
      headerName: 'Underlier Performance',
      cellRenderer: (e: ICellRendererParams) => {
        const event: LifecycleEventLM = e.data;
        const underlierPerformance = event.underlierPerformancePercent * 100;
        const underliers = event.listOfUnderliers;
        const activeUnderlier = event.activeUnderlier;

        return (
          <CellWrapper>
            {underlierPerformance === null ? (
              <Text>-----</Text>
            ) : (
              <Text
                color={getPercentColor(underlierPerformance, true)}
                fontWeight={'bold'}
              >
                {getPercentString(underlierPerformance, 2)}
              </Text>
            )}

            <UnderliersWrapper>
              {underliers?.map((item: string) => {
                if (isActiveUnderlier(activeUnderlier, item)) {
                  return (
                    <React.Fragment key={`${item}`}>
                      <ActiveUnderlier
                        underlierPerformance={underlierPerformance}
                      >
                        {item}
                      </ActiveUnderlier>
                    </React.Fragment>
                  );
                } else {
                  return (
                    <React.Fragment key={`${item}`}>
                      <InactiveUnderlier>{item}</InactiveUnderlier>
                    </React.Fragment>
                  );
                }
              })}
            </UnderliersWrapper>
          </CellWrapper>
        );
      },
    },
    {
      colId: 'protectionProximity',
      headerName: 'Protection Proximity',
      cellRenderer: (e: ICellRendererParams) => {
        const event: LifecycleEventLM = e.data;
        const protectionProximity = event.protectionProximityLevelPercent * 100;
        // No decimals for the protection level
        const protectionLevel = event.protectionLevelPercent * 100;
        const protectionType = event.protectionType;

        return (
          <CellWrapper>
            <Text
              color={getPercentColor(protectionProximity, true)}
              fontWeight={'bold'}
            >
              {getPercentString(protectionProximity, 2)}
            </Text>
            <Text>{protectionLevel}%</Text>
            <Text>{formatDisplayString(protectionType)}</Text>
          </CellWrapper>
        );
      },
    },
    {
      field: 'payoutAmount',
      colId: 'payoutAmount',
      headerName: 'Payout Amount',
      headerClass: 'ag-right-aligned-header',
      cellStyle: { justifyContent: 'end' },
      cellRenderer: (e: ICellRendererParams) => {
        const event: LifecycleEventLM = e.data;
        const formattedPayoutAmount = event.payoutAmount?.toLocaleString(
          undefined,
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }
        );

        return <span>{formattedPayoutAmount}</span>;
      },
    },
    {
      field: 'currency',
      colId: 'currency',
      headerName: 'CCY',
      headerClass: 'ag-right-aligned-header right-numeric-header-padding',
      cellStyle: { justifyContent: 'end', paddingRight: 10 },
      cellRenderer: (e: ICellRendererParams) => {
        return (
          <span>
            <CurrencyBubble>{displayCurrency}</CurrencyBubble>
          </span>
        );
      },
    },
    {
      field: 'markToMarket',
      colId: 'markToMarket',
      headerName: 'MTM Price',
      headerClass: 'ag-right-aligned-header',
      cellStyle: { justifyContent: 'end' },
      cellRenderer: (e: ICellRendererParams) => {
        const event: LifecycleEventLM = e.data;
        const markToMarket = event.markToMarketPercent;
        return <span>{Number(markToMarket).toFixed(3)}</span>;
      },
    },
    {
      field: 'notional',
      colId: 'notional',
      headerName: 'Notional',
      headerClass: 'ag-right-aligned-header last-column-right-padding',
      cellStyle: { justifyContent: 'end', paddingRight: 10 },
      cellRenderer: (e: ICellRendererParams) => {
        const event: LifecycleEventLM = e.data;
        const totalNotional = event.notionalHoldingsSum;
        return (
          <NotionalDrawerButton onClick={() => setSelectedEvent(event)}>
            {Intl.NumberFormat().format(totalNotional)}
          </NotionalDrawerButton>
        );
      },
    },
  ];
  return columnDefs;
};
