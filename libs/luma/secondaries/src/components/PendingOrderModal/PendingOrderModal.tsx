import { Message } from '@luma-fe-workspace/design-system';
import {
  secondariesSlice,
  SecondaryOrder,
  selectJwt,
  selectMessageObject,
  selectSecondaries,
  useAppDispatch,
  useAppSelector,
  useFillOrderUsingPutMutation,
  useRejectOrderUsingPutMutation,
} from '@luma-fe-workspace/redux';
import { useEffect, useState } from 'react';
import { RequiredModal } from '../RequiredModal/RequiredModal';
import { SecondariesTable } from '../SecondariesTable/SecondariesTable';
import { OrderSummary } from './PendingOrderModal.styles';

interface PendingOrderModalProps {
  setLiveOrder: (data: SecondaryOrder) => void;
}

export const PendingOrderModal = ({ setLiveOrder }: PendingOrderModalProps) => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState<boolean>(true);
  const secondariesStore = useAppSelector(selectSecondaries);
  const messageObject = useAppSelector(selectMessageObject);
  const pendingActionOrders = secondariesStore.pendingActionOrders;
  const pendingOrder = pendingActionOrders[0];
  const [fillOrderMutation] = useFillOrderUsingPutMutation();
  const [rejectOrderMutation] = useRejectOrderUsingPutMutation();
  const cusip = pendingOrder.productIdentifier?.securityIdentifierValue;
  const firstName = useAppSelector(selectJwt)?.firstName;

  useEffect(() => {
    if (pendingActionOrders.length > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pendingActionOrders]);

  const handleOrder = async (fill: boolean) => {
    if (!pendingOrder?.orderId) return;
    const orderMutation = fill ? fillOrderMutation : rejectOrderMutation;
    try {
      const order = await orderMutation({
        orderId: pendingOrder?.orderId,
      }).unwrap();
      if (order) {
        setLiveOrder(order);
        handleMessage(fill, order, true);
      }
    } catch (error) {
      handleMessage(fill, pendingOrder, false);
    }
  };

  const handleMessage = (
    fill: boolean,
    order: SecondaryOrder,
    success: boolean
  ) => {
    if (success) {
      dispatch(
        secondariesSlice.actions.setMessageObject({
          title: `${firstName ?? 'You'} ${
            fill
              ? firstName
                ? 'agrees'
                : 'agree'
              : firstName
              ? 'rejects'
              : 'reject'
          } ${order.side === 'BUY' ? 'to buy' : 'to sell'} for ${
            order.quantity
          } ${cusip ? 'x ' + cusip : ''} at ${order.price}.`,
          description: `${
            firstName ? firstName + "'s" : 'Your'
          } order number is ${order.orderId}`,
          messageType: `${fill ? 'success' : 'error'}`,
          isMessageShowing: true,
        })
      );
    } else {
      dispatch(
        secondariesSlice.actions.setMessageObject({
          title: `Unable to ${fill ? 'fill' : 'reject'} order number ${
            order.orderId
          }.`,
          messageType: 'error',
          isMessageShowing: true,
        })
      );
    }
    dispatch(secondariesSlice.actions.removeFromPendingActionOrders(order));
  };

  const tableData = {
    'Settlement date':
      pendingOrder.settlement &&
      new Date(pendingOrder.settlement).toLocaleDateString(),
    ...(pendingOrder.side === 'BUY'
      ? { Seller: pendingOrder.associatedUserIds?.liquidityTaker }
      : { Buyer: pendingOrder.associatedUserIds?.liquidityTaker }),
  };

  return (
    <RequiredModal
      id={'pending-order'}
      title={'Pending order'}
      secondaryTitle={`Order ID: ${pendingOrder.orderId}`}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      showModal={visible}
      seperator={pendingOrder.side ?? 'NONE'}
      rejectAction={{
        text: 'REJECT',
        onClick: async () => await handleOrder(false),
      }}
      acceptAction={{
        text: 'FILL',
        onClick: async () => await handleOrder(true),
      }}
      onClose={() =>
        dispatch(
          secondariesSlice.actions.removeFromPendingActionOrders(pendingOrder)
        )
      }
    >
      <OrderSummary>{`${pendingOrder.side === 'BUY' ? 'Buy' : 'Sell'} ${
        pendingOrder.quantity
      } ${cusip ? 'x ' + cusip : ''} at ${pendingOrder.price}`}</OrderSummary>
      <SecondariesTable rootStyles={'width: 34.5rem'} data={tableData} />
      <Message
        title={messageObject.title}
        description={messageObject.description}
        showMessage={messageObject.isMessageShowing}
        setShowMessage={(showMessage: boolean) =>
          dispatch(secondariesSlice.actions.setIsMessageShowing(showMessage))
        }
        messageType={messageObject.messageType}
        // Seconds the message is visible before closing.
        timer={5}
      />
    </RequiredModal>
  );
};
