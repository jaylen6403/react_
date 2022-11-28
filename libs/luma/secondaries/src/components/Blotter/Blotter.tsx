import { useLocation, useNavigate } from 'react-router-dom';
import { RFQBlotter } from '../RFQBlotter/RFQBlotter';
import { OrderBlotter } from '../OrderBlotter/OrderBlotter';
import { Widget } from '../Widget/Widget';
import { URL_PATHS } from '@luma-fe-workspace/utility';
import {
  SecondaryRequestForQuote,
  useAppSelector,
  selectSecondaries,
  SecondaryOrder,
  WidgetPermissions,
  useUiPermissionsQuery,
  lumaPermissionsArray,
  selectJwt,
} from '@luma-fe-workspace/redux';
import { RFQSearch } from '../RFQSearch';

interface BlotterProps {
  liveRFQData: SecondaryRequestForQuote[];
  setLiveRFQData: (data: SecondaryRequestForQuote[]) => void;
  newCreatedRFQs: SecondaryRequestForQuote[];
  setNewCreatedRFQs: (data: SecondaryRequestForQuote[]) => void;
  liveOrderData?: SecondaryOrder;
  setLiveOrderData: (data: SecondaryOrder | undefined) => void;
}

export const Blotter = ({
  liveRFQData,
  setLiveRFQData,
  newCreatedRFQs,
  setNewCreatedRFQs,
  liveOrderData,
  setLiveOrderData,
}: BlotterProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const userName = useAppSelector(selectJwt)?.user_name;
  const orders = useAppSelector(selectSecondaries).orders;
  const pendingOrderActions = orders?.filter(
    (order) =>
      order.status === 'PENDING' &&
      userName &&
      order.associatedUserIds?.liquidityProvider === userName
  );

  const { data: userPermissionData } = useUiPermissionsQuery({
    permissions: lumaPermissionsArray,
  });

  const userPermissions: WidgetPermissions[] = userPermissionData || [];

  return (
    <Widget
      aria-label="Blotter"
      title="Blotter"
      table={
        pathname.includes(`${URL_PATHS.ORDERS}`) ? (
          <OrderBlotter
            liveOrderData={liveOrderData}
            setLiveOrderData={setLiveOrderData}
          />
        ) : pathname.includes(`${URL_PATHS.QUOTES}`) ? (
          <RFQBlotter
            liveRFQData={liveRFQData}
            newCreatedRFQs={newCreatedRFQs}
            setLiveRFQData={setLiveRFQData}
            setNewCreatedRFQs={setNewCreatedRFQs}
          />
        ) : pathname.includes(`${URL_PATHS.RFQ_SEARCH}`) ? (
          <RFQSearch
            key={URL_PATHS.RFQ_SEARCH}
            liveRFQData={liveRFQData}
            setLiveRFQData={setLiveRFQData}
            blotterType="RFQ Search"
          />
        ) : (
          <RFQSearch
            key={URL_PATHS.LP_BLOTTER}
            liveRFQData={liveRFQData}
            setLiveRFQData={setLiveRFQData}
            blotterType="LP Blotter"
          />
        )
      }
      actionBar={null}
      tabs={[
        {
          display: 'Quotes',
          activeTab: pathname.includes(`${URL_PATHS.QUOTES}`),
          ariaLabel: 'Quotes-tab',
          value: 'Quotes',
          hasClose: false,
          setShowTab: () =>
            navigate(`/${URL_PATHS.SECONDARIES}/${URL_PATHS.QUOTES}`),
          id: 'Quotes-tab',
          showTab: userPermissions.includes(
            WidgetPermissions.SecondariesRFQCreate
          ),
        },
        {
          display: 'LP Blotter',
          activeTab: pathname.includes(`${URL_PATHS.LP_BLOTTER}`),
          ariaLabel: 'LP-Blotter-tab',
          value: 'Lp-Blotter-tab',
          hasClose: false,
          setShowTab: () => navigate(`/${URL_PATHS.SECONDARIES}/lp-blotter`),
          id: 'Lp-Blotter-Tab',
          showTab: userPermissions.includes(
            WidgetPermissions.SecondariesRFQRespond
          ),
        },
        {
          display: 'Orders',
          activeTab: pathname.includes(`${URL_PATHS.ORDERS}`),
          ariaLabel: 'Orders-tab',
          value: 'Orders',
          hasClose: false,
          setShowTab: () =>
            navigate(`/${URL_PATHS.SECONDARIES}/${URL_PATHS.ORDERS}`),
          id: 'Orders-tab',
          showTab: true,
          notifications: pendingOrderActions?.length,
        },
        {
          display: 'RFQ Search',
          activeTab: pathname.includes(`${URL_PATHS.RFQ_SEARCH}`),
          ariaLabel: 'RFQ-Search-tab',
          value: 'Rfq-search',
          hasClose: false,
          setShowTab: () => navigate(`/${URL_PATHS.SECONDARIES}/rfq-search`),
          id: 'Rfq-Search-tab',
          showTab: userPermissions.includes(
            WidgetPermissions.SecondariesRFQRespond
          ),
        },
      ]}
    />
  );
};
