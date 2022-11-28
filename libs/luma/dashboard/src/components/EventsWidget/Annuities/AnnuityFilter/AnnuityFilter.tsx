import { Dispatch, SetStateAction, useState } from 'react';
import {
  Button,
  SingleSelect,
  MenuItemSingleType,
} from '@luma-fe-workspace/design-system';
import { AnnuitiesFilter } from '../../../../utils/annuitiesUtils';
import {
  AnnuityFilterTitle,
  FilterButton,
  FilterCont,
  MobileWrapper,
} from './AnnuityFilter.style';

interface Props {
  annuitiesToggle: { next: boolean; past: boolean };
  setAnnuitiesToggle: Dispatch<
    SetStateAction<{ next: boolean; past: boolean }>
  >;
  screenWidth: number;
}

export const AnnuityFilter = ({
  annuitiesToggle,
  setAnnuitiesToggle,
  screenWidth,
}: Props) => {
  const [annuitiesDropdown, setAnnuitiesDropdown] = useState<
    MenuItemSingleType<AnnuitiesFilter>
  >({ display: AnnuitiesFilter.Next, value: AnnuitiesFilter.Next });
  const toggleStrings: MenuItemSingleType<AnnuitiesFilter>[] = [
    { display: AnnuitiesFilter.Next, value: AnnuitiesFilter.Next },
    { display: AnnuitiesFilter.Past, value: AnnuitiesFilter.Past },
  ];

  const updateAnnuitiesSelection = (
    item?: MenuItemSingleType<AnnuitiesFilter> | null
  ) => {
    if (!item) return;
    if (item.display === AnnuitiesFilter.Next) {
      setAnnuitiesToggle({ next: true, past: false });
      setAnnuitiesDropdown(item);
    } else {
      setAnnuitiesToggle({ next: false, past: true });
      setAnnuitiesDropdown(item);
    }
  };

  return (
    <FilterCont>
      <AnnuityFilterTitle>Annuities Events</AnnuityFilterTitle>
      {screenWidth > 544 ? (
        <>
          <FilterButton isActive={annuitiesToggle.next}>
            <Button
              variant="primary"
              onClick={() => setAnnuitiesToggle({ next: true, past: false })}
            >
              {AnnuitiesFilter.Next}
            </Button>
          </FilterButton>
          <FilterButton isActive={annuitiesToggle.past}>
            <Button
              variant="primary"
              onClick={() => setAnnuitiesToggle({ next: false, past: true })}
            >
              {AnnuitiesFilter.Past}
            </Button>
          </FilterButton>
        </>
      ) : (
        <MobileWrapper>
          <SingleSelect
            items={toggleStrings}
            placeholder={AnnuitiesFilter.Next}
            variant={'secondary'}
            onChange={updateAnnuitiesSelection}
            selectedItem={annuitiesDropdown}
            hasIndicator={true}
            noHighlight={true}
            iconCode="angle-down"
            iconPrefix="far"
          />
        </MobileWrapper>
      )}
    </FilterCont>
  );
};
