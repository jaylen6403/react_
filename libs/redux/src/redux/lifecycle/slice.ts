import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LifecycleProduct } from '../productService/productServiceEndpoints';
import { EventFilters, DateObject } from './types';
import { mockLifecycleProductData } from './mockData/mockLifecycleProductData';
import { mockEventFiltering } from './mockData/mockLifecycleEventFilteringData';
import { DateHelper } from '@luma-fe-workspace/utility';
import { lifecycleManagerServiceApi } from '../lifecycleManagerService/lifecycleManagerServiceApi';
import {
  deskServiceApi,
  GetCompanyLogosUsingGetResponseArg,
} from '../deskService';

interface LifecycleState {
  dateRange: DateObject;
  eventFilterOptions: EventFilters;
  selectedEventFilters: EventFilters;
  lifecycleProducts: LifecycleProduct[];
  logoObject: GetCompanyLogosUsingGetResponseArg;
  displayCurrency: string;
}

const initialState: LifecycleState = {
  dateRange: {
    startDate: new Date().toISOString(),
    endDate: DateHelper.addMonths(
      DateHelper.endOfMonth(new Date()).setHours(19, 59, 0, 0),
      18
    ).toISOString(),
    rangeAbbreviation: '18M',
  },
  eventFilterOptions: mockEventFiltering,
  selectedEventFilters: {
    portfolioAttributes: {},
    productAttributes: {},
  },
  lifecycleProducts: mockLifecycleProductData,
  logoObject: {},
  displayCurrency: 'USD',
};

export const lifecycleSlice = createSlice({
  name: 'lifecycle',
  initialState,
  reducers: {
    setSelectedFilters(state, action: PayloadAction<EventFilters>) {
      state.selectedEventFilters = action.payload;
    },
    setDateRange(state, action: PayloadAction<DateObject>) {
      state.dateRange = action.payload;
    },
    setDisplayCurrency(state, action: PayloadAction<string>) {
      state.displayCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      lifecycleManagerServiceApi.endpoints.getFiltersUsingGet.matchFulfilled,
      (state, action) => {
        const filterOptions: EventFilters = {
          portfolioAttributes: action.payload.portfolioAttributes,
          productAttributes: action.payload.productAttributes,
        };
        const selectedFilters: EventFilters = {
          portfolioAttributes: {},
          productAttributes: {},
        };
        //Below clears out the selected filters
        Object.keys(filterOptions['portfolioAttributes']).forEach((attr) => {
          if (selectedFilters['portfolioAttributes'][attr]) {
            selectedFilters['portfolioAttributes'][attr] = [];
          }
        });
        Object.keys(filterOptions['productAttributes']).forEach((attr) => {
          if (selectedFilters['productAttributes'][attr]) {
            selectedFilters['productAttributes'][attr] = [];
          }
        });
        //Below sorts the event filter options
        Object.keys(filterOptions['productAttributes']).forEach((attr) => {
          if (filterOptions['productAttributes'][attr]) {
            filterOptions['productAttributes'][attr].sort();
          }
        });
        Object.keys(filterOptions['portfolioAttributes']).forEach((attr) => {
          if (filterOptions['portfolioAttributes'][attr]) {
            filterOptions['portfolioAttributes'][attr].sort();
          }
        });
        state.eventFilterOptions = filterOptions;
        state.selectedEventFilters = selectedFilters;
      }
    );
    builder.addMatcher(
      deskServiceApi.endpoints.getLogosUsingGet.matchFulfilled,
      (state, action) => {
        state.logoObject = action.payload;
      }
    );
  },
});
