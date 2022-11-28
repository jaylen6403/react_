import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import { reduxDevTools } from '@luma-fe-workspace/utility';
import { authApi } from './authService/slice';
import { authSlice } from './auth/slice';
import { permissionsApi } from './permissionsService/slice';
import { secondariesServiceApi } from './secondariesService/secondariesServiceEndpoints';
import { websocketServiceApi } from './websocketService/websocketServiceEndpoints';
import { dashboardServiceApi } from './dashboardService/dashboardServiceEndpoints';
import { secondariesSlice } from './secondaries/slice';
import { creationHubSlice } from './creationHub/slice';
import { creationHubServiceApi } from './creationHubService/creationHubServiceEndpoints';
import { creationHub2ServiceApi } from './creationHub2Service/creationHub2ServiceEndpoints';
import { topProductsServiceApi } from './topProductsService/topProductsServiceEndpoints';
import { productTypesServiceApi } from './productTypesService/productTypesServiceEndpoints';
import { preferenceServiceApi } from './preferenceService/preferenceServiceEndpoints';
import { currencyServiceApi } from './currencyService/currencyServiceEndpoints';
import { userServiceApi } from './userService/userServiceEndpoints';
import { userSlice } from './user/slice';
import { marketplaceProductServiceApi } from './marketplaceProductService/marketplaceProductServiceEndpoints';
import { companyProductServiceApi } from './companyService/companyServiceEndpoints';
import { documentServiceApi } from './documentService/documentServiceEndpoints';
import { enhancedDocumentServiceApi } from './documentService/enhancedDocumentServiceEndpoints';
import { productServiceApi } from './productService/productServiceEndpoints';
import { eventServiceApi } from './eventService/eventServiceEndpoints';
import { emailServiceApi } from './emailService/emailServiceEndpoints';
import { lifecycleSlice } from './lifecycle/slice';
import { lifecycleManagerServiceApi } from './lifecycleManagerService/lifecycleManagerServiceApi';
import { deskServiceApi } from './deskService';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  user: userSlice.reducer,
  [userServiceApi.reducerPath]: userServiceApi.reducer,
  [permissionsApi.reducerPath]: permissionsApi.reducer,
  [secondariesServiceApi.reducerPath]: secondariesServiceApi.reducer,
  [websocketServiceApi.reducerPath]: websocketServiceApi.reducer,
  [dashboardServiceApi.reducerPath]: dashboardServiceApi.reducer,
  [documentServiceApi.reducerPath]: documentServiceApi.reducer,
  [enhancedDocumentServiceApi.reducerPath]: enhancedDocumentServiceApi.reducer,
  secondaries: secondariesSlice.reducer,
  creationHub: creationHubSlice.reducer,
  [creationHubServiceApi.reducerPath]: creationHubServiceApi.reducer,
  [creationHub2ServiceApi.reducerPath]: creationHub2ServiceApi.reducer,
  [topProductsServiceApi.reducerPath]: topProductsServiceApi.reducer,
  [productTypesServiceApi.reducerPath]: productTypesServiceApi.reducer,
  [preferenceServiceApi.reducerPath]: preferenceServiceApi.reducer,
  [currencyServiceApi.reducerPath]: currencyServiceApi.reducer,
  [marketplaceProductServiceApi.reducerPath]:
    marketplaceProductServiceApi.reducer,
  [companyProductServiceApi.reducerPath]: companyProductServiceApi.reducer,
  [productServiceApi.reducerPath]: productServiceApi.reducer,
  [eventServiceApi.reducerPath]: eventServiceApi.reducer,
  [emailServiceApi.reducerPath]: emailServiceApi.reducer,
  lifecycle: lifecycleSlice.reducer,
  [lifecycleManagerServiceApi.reducerPath]: lifecycleManagerServiceApi.reducer,
  [deskServiceApi.reducerPath]: deskServiceApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userServiceApi.middleware,
      permissionsApi.middleware,
      secondariesServiceApi.middleware,
      websocketServiceApi.middleware,
      creationHubServiceApi.middleware,
      creationHub2ServiceApi.middleware,
      topProductsServiceApi.middleware,
      productTypesServiceApi.middleware,
      preferenceServiceApi.middleware,
      dashboardServiceApi.middleware,
      creationHubServiceApi.middleware,
      currencyServiceApi.middleware,
      marketplaceProductServiceApi.middleware,
      companyProductServiceApi.middleware,
      documentServiceApi.middleware,
      enhancedDocumentServiceApi.middleware,
      productServiceApi.middleware,
      eventServiceApi.middleware,
      emailServiceApi.middleware,
      lifecycleManagerServiceApi.middleware,
      deskServiceApi.middleware
    ),
  devTools: reduxDevTools,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export default store;
export type AppDispatch = typeof store.dispatch;
