import {
  Dispatch,
  SetStateAction,
  useMemo,
  useEffect,
  useCallback,
} from 'react';

import { EventProductData, UnderlierRest } from '@luma-fe-workspace/redux';
import {
  MenuItemSingleType,
  SingleSelect,
} from '@luma-fe-workspace/design-system';

import { DropdownWrapper, LabelText } from './UnderlierDropdown.styles';

type Underlier = MenuItemSingleType<UnderlierRest>;

interface Props {
  modalData: EventProductData | undefined;
  selectedUnderlier: Underlier;
  setSelectedUnderlier: Dispatch<SetStateAction<Underlier>>;
}

export const UnderlierDropdown = ({
  modalData,
  selectedUnderlier,
  setSelectedUnderlier,
}: Props) => {
  const underlierOptions = useMemo(() => {
    if (!modalData?.underlierList)
      return [
        {
          display: '',
          value: { name: '', ticker: '', type: undefined },
        },
      ];
    else {
      return modalData?.underlierList.map((underlier: UnderlierRest) => ({
        display: underlier.ticker,
        value: underlier,
      }));
    }
  }, [modalData]);

  const updateUnderlierSelection = useCallback(
    (item?: Underlier | null) => {
      if (!item) return;
      setSelectedUnderlier(item);
    },
    [setSelectedUnderlier]
  );

  useEffect(() => {
    if (underlierOptions.length === 1)
      updateUnderlierSelection(underlierOptions[0]);
  }, [underlierOptions, updateUnderlierSelection]);

  return (
    <DropdownWrapper>
      <LabelText>Underlier</LabelText>
      <SingleSelect
        items={underlierOptions}
        placeholder="Select Underlier..."
        selectedItem={selectedUnderlier}
        variant={'secondary'}
        onChange={updateUnderlierSelection}
        hasIndicator={true}
        noHighlight={true}
        iconCode="angle-down"
        iconPrefix="far"
      />
    </DropdownWrapper>
  );
};
