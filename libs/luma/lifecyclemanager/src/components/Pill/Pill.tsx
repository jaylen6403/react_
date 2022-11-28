import {
  EventFilters,
  lifecycleSlice,
  selectLifecycle,
  useAppDispatch,
  useAppSelector,
} from '@luma-fe-workspace/redux';
import { LumaPill, LumaPillVariant } from '@luma-fe-workspace/design-system';
import { PillContainer } from './Pill.styles';

interface PillProps {
  title: string;
  sectionTitle: string;
  categoryTitle: string;
  variant?: LumaPillVariant;
  fullPillClickable?: boolean;
}

export const Pill = ({
  title,
  sectionTitle,
  categoryTitle,
  variant,
  fullPillClickable,
}: PillProps) => {
  const selectedFilters = useAppSelector(selectLifecycle).selectedEventFilters;
  const dispatch = useAppDispatch();

  const removeFilter = (selection: string) => {
    const updatedOptions = selectedFilters[sectionTitle][categoryTitle]
      ? [...selectedFilters[sectionTitle][categoryTitle]]
      : [];
    const index = updatedOptions.indexOf(selection);
    updatedOptions.splice(index, 1);

    const newFilters: EventFilters = {
      ...selectedFilters,
      [sectionTitle]: {
        ...selectedFilters[sectionTitle],
        [categoryTitle]: updatedOptions,
      },
    };

    dispatch(lifecycleSlice.actions.setSelectedFilters(newFilters));
  };

  return (
    <PillContainer>
      <LumaPill
        title={title}
        onClose={() => removeFilter(title)}
        variant={variant}
        fullPillClickable={fullPillClickable}
      />
    </PillContainer>
  );
};
