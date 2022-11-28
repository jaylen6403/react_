import { baseApi as api } from './preferenceServiceBaseApi';

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDisplayConfigUsingGet: build.query<
      GetDisplayConfigUsingGetApiResponse,
      GetDisplayConfigUsingGetApiArg
    >({
      query: () => ({ url: `/user/config` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as preferenceServiceApi };
export type GetDisplayConfigUsingGetApiResponse =
  /** status 200 Ok */ DisplayConfig;
export type GetDisplayConfigUsingGetApiArg = void;
export type DisplayConfig = {
  deskId: number;
  displayExternalStructureName: boolean;
  displayBloombergTicker: boolean;
  displayProductSymbol: boolean;
  dailySummaryOccurrence: string;
  displayLegacyDashboard: null;
  displayLegacyNavigation: null;
  marketDataSourcePreference: null;
  hideDashboardWidgets: boolean;
  displayMarkToMarketSource: boolean;
  enableDashboardInsights: boolean;
  id: string;
};
export const { useGetDisplayConfigUsingGetQuery } = injectedRtkApi;
