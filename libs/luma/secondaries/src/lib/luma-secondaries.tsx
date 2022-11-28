import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { URL_PATHS } from '@luma-fe-workspace/utility';
import {
  LumaSecondariesBody,
  LumaSecondariesContainer,
  StyledAppHeader,
  SecondariesDropdown,
} from './luma-secondaries.styles';
import {
  selectAccessToken,
  useAppSelector,
  useAppDispatch,
  useGetRequestForQuotesFromTodayUsingGetQuery,
  secondariesSlice,
  SecondaryRequestForQuote,
  useGetOrdersByUserIdUsingGetQuery,
  selectMessageObject,
  SecondaryOrder,
  selectPermissions,
  selectSecondaries,
  selectSecurityDetailsCusip,
  WidgetPermissions,
  useUiPermissionsQuery,
  lumaPermissionsArray,
  selectJwt,
} from '@luma-fe-workspace/redux';
import { SecondariesSearch } from '../components';
import { SecurityDetails } from '../components/SecurityDetails/SecurityDetails';
import { RFQModal } from '../components/RFQModal/RFQModal';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Message } from '@luma-fe-workspace/design-system';
import { Blotter } from '../components/Blotter/Blotter';
import {
  getWebsocketData,
  SecondaryWebsocketProps,
} from '../utils/websocketUtil';
import { PendingOrderModal } from '../components/PendingOrderModal/PendingOrderModal';
import { ExecutionDetailModal } from '../components/ExecutionDetailsModal/ExecutionDetailsModal';
import {
  getMsTillUTCMarketOpen,
  getMsTillUTCMarketClose,
} from '../utils/getMsTillMarketClose';
export function LumaSecondaries() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(selectAccessToken);
  const JWT = useAppSelector(selectJwt);
  const userName = JWT?.user_name;
  const permissions = useAppSelector(selectPermissions);
  const messageObject = useAppSelector(selectMessageObject);
  const initialRFQResponse = useGetRequestForQuotesFromTodayUsingGetQuery();
  const initialOrderResponse = useGetOrdersByUserIdUsingGetQuery();
  const secondariesStore = useAppSelector(selectSecondaries);
  const pendingActionOrders = secondariesStore.pendingActionOrders;
  const pendingExecutionDetails = secondariesStore.pendingExecutionDetails;
  const securityDetailsCusip = useAppSelector(selectSecurityDetailsCusip);
  const [liveRFQs, setLiveRFQs] = useState<SecondaryRequestForQuote[]>([]);
  const [liveOrder, setLiveOrder] = useState<SecondaryOrder>();
  const [outsideOfTradingHours, setOutsideOfTradingHours] = useState(false);
  const [newCreatedRFQs, setNewCreatedRFQs] = useState<
    SecondaryRequestForQuote[]
  >([]);
  const [showRFQModal, setShowRFQModal] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    if (initialRFQResponse.isSuccess && userName) {
      dispatch(
        secondariesSlice.actions.setAllRFQs({
          RFQs: initialRFQResponse.data,
          userName,
        })
      );
    }
  }, [dispatch, initialRFQResponse, userName]);

  useEffect(() => {
    if (initialOrderResponse.isSuccess) {
      dispatch(
        secondariesSlice.actions.setAllOrders(initialOrderResponse.data)
      );
    }
  }, [dispatch, initialOrderResponse]);

  useEffect(() => {
    // Websocket Connection
    const argument: SecondaryWebsocketProps = {
      token: `${accessToken}`,
      currentPath: `${pathname}`,
    };
    getWebsocketData(argument, [setLiveRFQs, setLiveOrder]);

    tradingStatusController();
    const tradingStatusInterval = setInterval(() => {
      tradingStatusController();
    }, 28800000);

    return () => {
      clearInterval(tradingStatusInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Controller to determine whether the current time is within trading hours, currently set at
  // 1:00pm (13:00) to 9:00pm (21:00) UTC or
  // 9:00am to 5:00pm EST (US Equity Market Trading Window)
  // Used to disable the Trade button
  const tradingStatusController = () => {
    const msTillMarketOpen = getMsTillUTCMarketOpen();
    const msTillMarketClose = getMsTillUTCMarketClose();

    if (msTillMarketOpen > 0) {
      setOutsideOfTradingHours(true);
      setTimeout(() => {
        setOutsideOfTradingHours(false);
      }, msTillMarketOpen);
    }

    if (msTillMarketClose > 0) {
      setTimeout(() => {
        setOutsideOfTradingHours(true);
      }, msTillMarketClose);
    } else {
      setOutsideOfTradingHours(true);
    }
  };

  useEffect(() => {
    if (liveRFQs.length > 0 && userName) {
      const newMyRFQs = liveRFQs.filter((RFQ: SecondaryRequestForQuote) => {
        return RFQ.createdByUserId === userName;
      });
      const newAvailableRFQs = liveRFQs.filter(
        (RFQ: SecondaryRequestForQuote) => RFQ.createdByUserId !== userName
      );
      if (newMyRFQs.length > 0) {
        dispatch(
          secondariesSlice.actions.updateMyRFQs({
            RFQs: newMyRFQs,
          })
        );
      }
      if (newAvailableRFQs.length > 0) {
        dispatch(
          secondariesSlice.actions.updateOrAddToAvailableRFQs(newAvailableRFQs)
        );
      }
    }
  }, [dispatch, liveRFQs, userName]);

  useEffect(() => {
    if (liveOrder) {
      dispatch(secondariesSlice.actions.addOrUpdateOrders(liveOrder));
      if (
        liveOrder.associatedUserIds?.liquidityProvider === userName &&
        liveOrder.status === 'PENDING'
      ) {
        dispatch(secondariesSlice.actions.addToPendingActionOrders(liveOrder));
      } else if (liveOrder.status === 'FILLED') {
        dispatch(
          secondariesSlice.actions.addToPendingExecutionDetails(liveOrder)
        );
      }
    }
  }, [dispatch, liveOrder, userName]);

  // useCallback is required to prevent unnecessary dispatches on rerender
  const setShowMessage = useCallback(
    (showMessage: boolean) => {
      dispatch(secondariesSlice.actions.setIsMessageShowing(showMessage));
    },
    [dispatch]
  );

  // Hide the message if it's showing
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {
    if (!messageObject.isMessageShowing) {
      setShowMessage(false);
    }
  }, [dispatch, messageObject.isMessageShowing, setShowMessage]);

  const { data: userPermissionData } = useUiPermissionsQuery({
    permissions: lumaPermissionsArray,
  });

  const userPermissions: WidgetPermissions[] = useMemo(
    () => userPermissionData || [],
    [userPermissionData]
  );

  useEffect(() => {
    if (!permissions.includes('CAN_ACCESS_SECONDARIES')) {
      navigate(`/${URL_PATHS.DASHBOARD}`);
    } else {
      if (location.pathname === '/secondaries') {
        if (userPermissions.includes(WidgetPermissions.SecondariesRFQCreate)) {
          navigate(`/secondaries/${URL_PATHS.QUOTES}`);
        } else if (
          userPermissions.includes(WidgetPermissions.SecondariesRFQRespond)
        ) {
          navigate(`/secondaries/${URL_PATHS.LP_BLOTTER}`);
        }
      }
    }
  }, [location, navigate, permissions, userPermissions]);

  const marketClosedTooltip =
    'Trading is not allowed outside of US Equity Market Trading Hours (9:30am to 4:00pm ET)';

  return (
    <LumaSecondariesContainer>
      <StyledAppHeader
        title="Trade"
        centerContent={<SecondariesSearch />}
        rightContent={
          <SecondariesDropdown
            items={[
              {
                display: 'Request for Quote',
                onClick: () => setShowRFQModal(true),
              },
            ]}
            placeholder="Trade"
            variant="primary"
            isDisabled={outsideOfTradingHours}
            title={outsideOfTradingHours ? marketClosedTooltip : undefined}
          />
        }
      />
      <LumaSecondariesBody>
        <Routes>
          {userPermissions.includes(
            WidgetPermissions.SecondariesRFQRespond
          ) && (
            <Route
              path={`/${URL_PATHS.RFQ_SEARCH}`}
              element={
                <Blotter
                  liveRFQData={liveRFQs}
                  newCreatedRFQs={newCreatedRFQs}
                  setLiveRFQData={setLiveRFQs}
                  setNewCreatedRFQs={setNewCreatedRFQs}
                  liveOrderData={liveOrder}
                  setLiveOrderData={setLiveOrder}
                />
              }
            />
          )}
          {userPermissions.includes(
            WidgetPermissions.SecondariesRFQRespond
          ) && (
            <Route
              path={`/${URL_PATHS.LP_BLOTTER}`}
              element={
                <Blotter
                  liveRFQData={liveRFQs}
                  newCreatedRFQs={newCreatedRFQs}
                  setLiveRFQData={setLiveRFQs}
                  setNewCreatedRFQs={setNewCreatedRFQs}
                  liveOrderData={liveOrder}
                  setLiveOrderData={setLiveOrder}
                />
              }
            />
          )}
          <Route
            path={`/${URL_PATHS.ORDERS}`}
            element={
              <Blotter
                liveRFQData={liveRFQs}
                newCreatedRFQs={newCreatedRFQs}
                setLiveRFQData={setLiveRFQs}
                setNewCreatedRFQs={setNewCreatedRFQs}
                liveOrderData={liveOrder}
                setLiveOrderData={setLiveOrder}
              />
            }
          />
          {userPermissions.includes(WidgetPermissions.SecondariesRFQCreate) && (
            <Route
              path={`/${URL_PATHS.QUOTES}`}
              element={
                <Blotter
                  liveRFQData={liveRFQs}
                  newCreatedRFQs={newCreatedRFQs}
                  setLiveRFQData={setLiveRFQs}
                  setNewCreatedRFQs={setNewCreatedRFQs}
                  liveOrderData={liveOrder}
                  setLiveOrderData={setLiveOrder}
                />
              }
            />
          )}
        </Routes>
        <RFQModal
          showModal={showRFQModal}
          setNewCreatedRFQs={setNewCreatedRFQs}
          setShowModal={setShowRFQModal}
        />
        {securityDetailsCusip && <SecurityDetails />}
        {pendingActionOrders.length > 0 && (
          <PendingOrderModal setLiveOrder={setLiveOrder} />
        )}
        {pendingExecutionDetails.length > 0 && <ExecutionDetailModal />}
      </LumaSecondariesBody>
      <Message
        title={messageObject.title}
        description={messageObject.description}
        showMessage={messageObject.isMessageShowing && !showRFQModal}
        setShowMessage={setShowMessage}
        messageType={messageObject.messageType}
        // Seconds the message is visible before closing.
        timer={5}
      />
    </LumaSecondariesContainer>
  );
}

export default LumaSecondaries;
