import {
  DisplayCurrencyApiArg,
  FiltersApiArg,
} from '../lifecycleManagerService/types';
import type { RootState } from '../configureStore';

export const selectLifecycle = (state: RootState) => state.lifecycle;
export const selectLifecycleEventFilterOptions = (state: RootState) =>
  state.lifecycle.eventFilterOptions;
export const selectLifecycleEventRequestObject = (state: RootState) => {
  const eventRequestObject: FiltersApiArg & DisplayCurrencyApiArg = {
    dateRange: state.lifecycle.dateRange,
    portfolioAttributes:
      state.lifecycle.selectedEventFilters['portfolioAttributes'],
    productAttributes:
      state.lifecycle.selectedEventFilters['productAttributes'],
    displayCurrency: state.lifecycle.displayCurrency,
  };
  return eventRequestObject;
};
export const selectLifecycleEventDateRange = (state: RootState) =>
  state.lifecycle.dateRange;
export const selectLifecycleProducts = (state: RootState) =>
  state.lifecycle.lifecycleProducts;
export const selectLifecycleEventDisplayCurrency = (state: RootState) =>
  state.lifecycle.displayCurrency;
