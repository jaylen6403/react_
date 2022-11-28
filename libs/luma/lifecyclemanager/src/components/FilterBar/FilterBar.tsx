import { DataItemProps, LumaIcon } from '@luma-fe-workspace/design-system';
import {
  DateObject,
  EventFilters,
  lifecycleSlice,
  selectLifecycle,
  useAppDispatch,
  useAppSelector,
} from '@luma-fe-workspace/redux';
import { GridApi } from 'ag-grid-community';
import { useState } from 'react';
import { LifecycleExportButton } from '../LifecycleExportButton/LifecycleExportButton';
import { Pill } from '../Pill/Pill';

import {
  ActionBar,
  BottomRow,
  ClearButton,
  ClearContainer,
  CloseIcon,
  CollapseIcon,
  DateDropDown,
  FilterButton,
  LeftActions,
  PillRow,
  RightActions,
  TopRow,
} from './FilterBar.styles';
import { dates } from './types';
import { DateHelper } from '@luma-fe-workspace/utility';

interface FilterBarProps {
  setIsFilterVisible: (isVisible: boolean) => void;
  currentGridApi?: GridApi;
}

export const FilterBar = ({
  setIsFilterVisible,
  currentGridApi,
}: FilterBarProps) => {
  const [filterPillsVisible, setFilterPillsVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const dateRange = useAppSelector(selectLifecycle).dateRange;
  const selectedFilters = useAppSelector(selectLifecycle).selectedEventFilters;

  const setDateValue = (dateValue: DataItemProps | null) => {
    if (!dateValue?.value || typeof dateValue?.value !== 'string') return;
    const dateKey = dateValue.value;
    const denominator = dateKey.slice(-1);
    const amount = parseInt(dateKey.slice(0, -1));
    const startDate = new Date();
    let endDate: Date;
    if (denominator === 'M') {
      endDate = DateHelper.endOfMonth(DateHelper.addMonths(startDate, amount));
    } else if (denominator === 'W') {
      endDate = DateHelper.addWeeks(startDate, amount);
    } else {
      endDate = DateHelper.addDays(startDate, 1);
    }

    const dateObject: DateObject = {
      startDate: new Date(startDate.setHours(0, 0, 0, 0)).toISOString(),
      endDate: new Date(endDate.setHours(23, 59, 0, 0)).toISOString(),
      rangeAbbreviation: dateKey,
    };

    dispatch(lifecycleSlice.actions.setDateRange(dateObject));
  };

  const removeAllFilters = () => {
    const newFilters: EventFilters = {
      portfolioAttributes: {},
      productAttributes: {},
    };
    dispatch(lifecycleSlice.actions.setSelectedFilters(newFilters));
    setFilterPillsVisible(false);
  };

  return (
    <ActionBar>
      <TopRow>
        <LeftActions>
          <DateDropDown
            items={dates}
            dropDownIcon={'calendar'}
            dropDownIconType={'regular'}
            defaultSelectedItem={dates.find(
              (date) => date.value === dateRange.rangeAbbreviation
            )}
            readOnly
            size="small"
            name={'Date Range Selection'}
            id={'Date Range Selection'}
            onChange={(e) => setDateValue(e)}
          />
          <FilterButton
            onClick={() => setIsFilterVisible(true)}
            variant="tertiary"
            size="small"
            icon={{
              iconComponent: <LumaIcon iconCode="filter" type="regular" />,
            }}
          >
            Filters
          </FilterButton>
        </LeftActions>
        <RightActions>
          <LifecycleExportButton
            gridApi={currentGridApi}
            tableName={'Events Data'}
          />
          <CollapseIcon
            onClick={() => setFilterPillsVisible(!filterPillsVisible)}
            iconCode="chevron-up"
            type="solid"
            isCollapsed={!filterPillsVisible}
          />
        </RightActions>
      </TopRow>
      <BottomRow isCollapsed={!filterPillsVisible}>
        <PillRow>
          {Object.keys(selectedFilters).map((filterSection) => {
            return Object.keys(selectedFilters[`${filterSection}`]).map(
              (filterCategory) => {
                return selectedFilters[`${filterSection}`][
                  `${filterCategory}`
                ].map((filterOption) => {
                  return (
                    <Pill
                      key={`${filterOption}`}
                      sectionTitle={filterSection}
                      categoryTitle={filterCategory}
                      title={filterOption}
                    />
                  );
                });
              }
            );
          })}
        </PillRow>
        <ClearContainer>
          <ClearButton onClick={removeAllFilters}>
            <CloseIcon iconCode={'close'} type="solid" />
            Clear All
          </ClearButton>
        </ClearContainer>
      </BottomRow>
    </ActionBar>
  );
};
