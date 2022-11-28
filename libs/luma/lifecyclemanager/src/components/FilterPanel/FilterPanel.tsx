import { LumaIcon } from '@luma-fe-workspace/design-system';
import {
  EventFilters,
  lifecycleSlice,
  selectLifecycle,
  selectLifecycleEventFilterOptions,
  useAppDispatch,
  useAppSelector,
} from '@luma-fe-workspace/redux';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { FilterSection } from '../FilterSection/FilterSection';
import {
  Overlay,
  SidePanel,
  Content,
  Header,
  HeaderRow,
  CloseButton,
  FiltersContainer,
  Footer,
  ApplyButton,
} from './FilterPanel.styles';

interface FilterPanelProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}
export const FilterPanel = ({ isVisible, setIsVisible }: FilterPanelProps) => {
  const dispatch = useAppDispatch();
  const eventFilters = useAppSelector(selectLifecycleEventFilterOptions);
  const previouslySelectedFilters =
    useAppSelector(selectLifecycle).selectedEventFilters;
  const [selectedFilters, setSelectedFilters] = useState<EventFilters>(
    previouslySelectedFilters
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 916);

  useEffect(() => {
    const handleResizeWindow = () => setIsMobile(window.innerWidth < 916);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setSelectedFilters(previouslySelectedFilters);
    }
  }, [isVisible, previouslySelectedFilters]);

  return (
    <SidePanel isActive={isVisible} isMobile={isMobile}>
      <Overlay isActive={isVisible} onClick={() => setIsVisible(false)} />
      <Content isActive={isVisible}>
        <HeaderRow>
          <Header>Filters</Header>
          <CloseButton onClick={() => setIsVisible(false)}>
            <LumaIcon
              iconCode={'xmark'}
              style={{ fontSize: '.75rem' }}
              type={'solid'}
            />
          </CloseButton>
        </HeaderRow>
        <FiltersContainer>
          {Object.keys(eventFilters).map((filterSection) => {
            if (!isVisible) return null;
            return (
              <FilterSection
                key={filterSection}
                sectionTitle={filterSection}
                filters={eventFilters[filterSection]}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
              />
            );
          })}
        </FiltersContainer>
        <Footer>
          <ApplyButton
            disabled={_.isEqual(selectedFilters, previouslySelectedFilters)}
            onClick={() => {
              dispatch(
                lifecycleSlice.actions.setSelectedFilters(selectedFilters)
              );
              setIsVisible(false);
            }}
          >
            Apply
          </ApplyButton>
        </Footer>
      </Content>
    </SidePanel>
  );
};
