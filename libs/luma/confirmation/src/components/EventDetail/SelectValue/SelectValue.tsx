import { EventProductData } from '@luma-fe-workspace/redux';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import {
  ISODateToFormat,
  getPhysicalSettlementData,
} from '../../../utils/gridUtils';
import { SelectedValue, LevelSource } from '../EventDetail';
import {
  ValueBox,
  ValueBoxTitle,
  ValueBoxValue,
  ValueBoxDate,
  SelectValueWrapper,
  NumShares,
  CashInLieu,
} from './SelectValue.style';

interface CashSettlementOption {
  title: LevelSource;
  selected: boolean;
  value: number;
}
interface PhysicalSettlementOption {
  title: LevelSource;
  selected: boolean;
  shares: number;
  cash: number;
}
interface Props {
  productData: EventProductData;
  selectedValue: SelectedValue;
  setSelectedValue: Dispatch<SetStateAction<SelectedValue>>;
}
interface SettlementBoxProps {
  cashSettlement?: boolean;
  selected: boolean;
  disabled?: boolean;
  title: string;
  value: React.ReactNode;
  date: string | undefined;
  onClick: () => void;
}
const getSettlementBox = ({
  cashSettlement = false,
  selected,
  disabled = false,
  title,
  value,
  date,
  onClick = () => {
    /**do nothing */
  },
}: SettlementBoxProps) => (
  <ValueBox selectedValue={selected} onClick={onClick} disabled={disabled}>
    <ValueBoxTitle>{title}</ValueBoxTitle>
    {!disabled ? (
      <>
        <ValueBoxValue cashSettlement={cashSettlement}>{value}</ValueBoxValue>
        <ValueBoxDate>{ISODateToFormat(date)}</ValueBoxDate>
      </>
    ) : (
      <>
        -- <ValueBoxDate disabled={disabled}>--</ValueBoxDate>
      </>
    )}
  </ValueBox>
);
const CashSettlements = ({
  productData,
  selectedValue,
  setSelectedValue,
}: Props) => {
  const cashSettlementOptions: CashSettlementOption[] = useMemo(
    () => [
      {
        title: LevelSource.CONFIRMED,
        selected: selectedValue?.type === LevelSource.CONFIRMED,
        value: productData.cashSettlementRates?.rate || 0,
      },
      {
        title: LevelSource.LUMA,
        selected: selectedValue?.type === LevelSource.LUMA,
        value: productData.cashSettlementRates?.lumaRate || 0,
      },
      {
        title: LevelSource.ISSUER,
        selected: selectedValue?.type === LevelSource.ISSUER,
        value: productData.cashSettlementRates?.issuerRate || 0,
      },
    ],
    [productData, selectedValue]
  );
  const onClick = useCallback(
    (type: LevelSource) => {
      setSelectedValue({
        type: type,
        value: `${
          cashSettlementOptions.find(
            (settlement: CashSettlementOption) => settlement.title === type
          )?.value || 0
        }%`,
      });
    },
    [cashSettlementOptions, setSelectedValue]
  );
  useEffect(() => {
    const [confirmedValue, lumaValue, issuerValue] = cashSettlementOptions;
    if (confirmedValue.value) onClick(confirmedValue.title);
    else if (issuerValue.value) onClick(issuerValue.title);
    else onClick(lumaValue.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SelectValueWrapper>
      {cashSettlementOptions.map((settlement: CashSettlementOption) =>
        getSettlementBox({
          selected: settlement.selected,
          title: settlement.title,
          value: `${settlement.value}%`,
          date: productData.eventDate,
          onClick: () => onClick(settlement.title),
          disabled: settlement.value === 0,
          cashSettlement: true,
        })
      )}
    </SelectValueWrapper>
  );
};

const PhysicalSettlements = ({
  productData,
  selectedValue,
  setSelectedValue,
}: Props) => {
  const { cash, shares } = useMemo(
    () => getPhysicalSettlementData(productData?.physicalSettlements),
    [productData]
  );

  const physicalSettlementOptions: PhysicalSettlementOption[] = useMemo(
    () => [
      {
        title: LevelSource.CONFIRMED,
        selected: selectedValue?.type === LevelSource.CONFIRMED,
        shares: shares?.value || 0,
        cash: cash?.value || 0,
      },
      {
        title: LevelSource.LUMA,
        selected: selectedValue?.type === LevelSource.LUMA,
        shares: shares?.lumaValue || 0,
        cash: cash?.lumaValue || 0,
      },
      {
        title: LevelSource.ISSUER,
        selected: selectedValue?.type === LevelSource.ISSUER,
        shares: shares?.issuerValue || 0,
        cash: cash?.issuerValue || 0,
      },
    ],
    [selectedValue, shares, cash]
  );

  const onClick = useCallback(
    (type: LevelSource) => {
      const selectedSettlement = physicalSettlementOptions.find(
        (settlement: PhysicalSettlementOption) => settlement.title === type
      );
      setSelectedValue({
        type: type,
        value: `${selectedSettlement?.shares} Shares and  $${Number(
          selectedSettlement?.cash
        ).toLocaleString()} Cash in Lieu`,
      });
    },
    [physicalSettlementOptions, setSelectedValue]
  );

  useEffect(() => {
    const [confirmedValue, lumaValue, issuerValue] = physicalSettlementOptions;
    if (confirmedValue.shares || confirmedValue.cash)
      onClick(confirmedValue.title);
    else if (!lumaValue.shares || lumaValue.cash) onClick(issuerValue.title);
    else onClick(lumaValue.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SelectValueWrapper>
      {physicalSettlementOptions.map((settlement: PhysicalSettlementOption) =>
        getSettlementBox({
          selected: settlement.selected,
          title: settlement.title,
          value: (
            <>
              <NumShares>{`${settlement.shares} shares`}</NumShares>
              {settlement.cash ? (
                <CashInLieu>{`$${settlement.cash}`}</CashInLieu>
              ) : null}
            </>
          ),
          disabled: !settlement.shares && !settlement.cash,
          date: productData.eventDate,
          onClick: () => onClick(settlement.title),
        })
      )}
    </SelectValueWrapper>
  );
};

// Using props here instead of destructuring for easy passing to child components
export const SelectValue = (props: Props) => {
  return props.productData.physicalSettlements ? (
    <PhysicalSettlements {...props} />
  ) : (
    <CashSettlements {...props} />
  );
};
