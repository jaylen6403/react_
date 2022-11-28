import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { URL_PATHS } from '@luma-fe-workspace/utility';
import { EventsPage } from '../components/EventsPage/EventsPage';
import { ProductMetrics } from '../components/ProductMetrics/ProductMetrics';
import { AccountMetrics } from '../components/AccountMetrics/AccountMetrics';
import { LifecycleRoutes } from '../utils/lmUtils';
import {
  LumaLifecycleManagerContainer,
  LinkTab,
  LinkNav,
  LifecycleManagerBody,
  NavContainer,
  RightNavActions,
  LMAppFooter,
  PerformanceReportButton,
  PerformanceReportLink,
} from './luma-lifecyclemanager.styles';
import { useState, useEffect } from 'react';
import { FilterPanel } from '../components/FilterPanel/FilterPanel';
import { FilterBar } from '../components/FilterBar/FilterBar';
import { CurrencyDropdown } from '../components/CurrencyDropdown/CurrencyDropdown';
import {
  useGetDisplayCurrenciesUsingGetQuery,
  useGetDocumentContentsUsingGetQueryEnhanced,
  useGetLogosUsingGetQuery,
} from '@luma-fe-workspace/redux';
import { GridApi } from 'ag-grid-community';
import {
  isDev,
  isHigherEnvironment,
  isQA,
} from '@luma-fe-workspace/design-system';

export const LMPadding = 1.5;

export const LumaLifecycleManager = () => {
  const { pathname } = useLocation();
  const splitPathname = pathname.split('/');
  const currentPath = splitPathname[splitPathname.length - 1];
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
  const [currentGridApi, setCurrentGridApi] = useState<GridApi>();
  useGetLogosUsingGetQuery();

  const displayCurrenciesResponse = useGetDisplayCurrenciesUsingGetQuery();
  const [displayCurrencyOptions, setDisplayCurrencyOptions] = useState<
    string[]
  >(['USD']);

  useEffect(() => {
    if (
      displayCurrenciesResponse.isSuccess &&
      !displayCurrenciesResponse.isFetching
    ) {
      setDisplayCurrencyOptions(displayCurrenciesResponse.data);
    }
  }, [displayCurrenciesResponse]);

  // Portfolio Performance Report
  const [portfolioPerformanceReportBlob, setPortfolioPerformanceReportBlob] =
    useState<Blob>();
  const documentRequestResponse = useGetDocumentContentsUsingGetQueryEnhanced({
    key: isQA()
      ? '6f0ac051-9e3c-4ca2-adcc-c343ec5a10d4'
      : isDev() || !isHigherEnvironment() // Allow Dev and localhost
      ? '7c9305d4-3ecd-44fc-b89f-94c5e96151e0'
      : '',
  });
  useEffect(() => {
    if (
      documentRequestResponse.isSuccess &&
      !documentRequestResponse.isFetching
    ) {
      setPortfolioPerformanceReportBlob(documentRequestResponse.data);
    }
  }, [documentRequestResponse]);

  return (
    <LumaLifecycleManagerContainer padding={LMPadding}>
      <FilterPanel
        isVisible={isFilterVisible}
        setIsVisible={() => setIsFilterVisible(false)}
      />
      {pathname === '/lifecycle-manager' && (
        <Navigate
          to={`${URL_PATHS.STRUCTURED_PRODUCTS}/${URL_PATHS.LIFECYCLE_EVENTS}`}
        />
      )}
      <NavContainer>
        <LinkNav>
          <LinkTab
            isActive={currentPath === LifecycleRoutes.Events}
            to={`${URL_PATHS.STRUCTURED_PRODUCTS}/${URL_PATHS.LIFECYCLE_EVENTS}`}
          >
            Events
          </LinkTab>
          <LinkTab
            isActive={currentPath === LifecycleRoutes.Products}
            to={`${URL_PATHS.STRUCTURED_PRODUCTS}/${URL_PATHS.LIFECYCLE_PRODUCTS}`}
          >
            Products
          </LinkTab>
          <LinkTab
            isActive={currentPath === LifecycleRoutes.Accounts}
            to={`${URL_PATHS.STRUCTURED_PRODUCTS}/${URL_PATHS.LIFECYCLE_ACCOUNTS}`}
          >
            Accounts
          </LinkTab>
        </LinkNav>
        <RightNavActions>
          <PerformanceReportButton
            variant="secondary"
            size="small"
            fullWidth={true}
          >
            <PerformanceReportLink
              onClick={() => {
                portfolioPerformanceReportBlob &&
                  window.open(
                    window.URL.createObjectURL(portfolioPerformanceReportBlob)
                  );
              }}
              target="_blank"
              rel="noreferrer"
            >
              Portfolio Performance Report
            </PerformanceReportLink>
          </PerformanceReportButton>
          <CurrencyDropdown currencyDropdownOptions={displayCurrencyOptions} />
        </RightNavActions>
      </NavContainer>
      <LifecycleManagerBody>
        <FilterBar
          setIsFilterVisible={setIsFilterVisible}
          currentGridApi={currentGridApi}
        />
        <Routes>
          <Route
            path={`${URL_PATHS.STRUCTURED_PRODUCTS}/${URL_PATHS.LIFECYCLE_EVENTS}`}
            element={
              <EventsPage
                currentGridApi={currentGridApi}
                setCurrentGridApi={setCurrentGridApi}
              />
            }
          />
          <Route
            path={`${URL_PATHS.STRUCTURED_PRODUCTS}/${URL_PATHS.LIFECYCLE_PRODUCTS}`}
            element={<ProductMetrics />}
          />
          <Route
            path={`${URL_PATHS.STRUCTURED_PRODUCTS}/${URL_PATHS.LIFECYCLE_ACCOUNTS}`}
            element={<AccountMetrics />}
          />
        </Routes>
        <LMAppFooter />
      </LifecycleManagerBody>
    </LumaLifecycleManagerContainer>
  );
};

export default LumaLifecycleManager;
