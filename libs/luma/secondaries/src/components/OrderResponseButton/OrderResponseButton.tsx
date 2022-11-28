import { CellButton } from './OrderResponseButton.styles';
import {
  SecondaryOrder,
  useAppDispatch,
  useAppSelector,
  secondariesSlice,
  selectJwt,
} from '@luma-fe-workspace/redux';

export interface OrderResponseButtonProps {
  order: SecondaryOrder;
}

export const OrderResponseButton = ({ order }: OrderResponseButtonProps) => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(selectJwt)?.user_name;
  if (!userName) return;

  const userActionRequired =
    order.status === 'PENDING' &&
    order.associatedUserIds?.liquidityProvider === userName;

  const handlePendingOrderModal = async () => {
    dispatch(secondariesSlice.actions.addToPendingActionOrders(order));
  };

  const handleExecutionOrderModal = async () => {
    dispatch(secondariesSlice.actions.addToPendingExecutionDetails(order));
  };

  if (userActionRequired || order.status === 'FILLED') {
    return (
      <CellButton
        onClick={
          userActionRequired
            ? handlePendingOrderModal
            : handleExecutionOrderModal
        }
        action={userActionRequired}
      >
        {userActionRequired ? 'ACTION' : 'Filled'}
      </CellButton>
    );
  } else if (order.status) {
    return (
      <span>
        {order.status[0].toUpperCase() + order.status.slice(1).toLowerCase()}
      </span>
    );
  }
  return null;
};
