import { Message } from '@luma-fe-workspace/design-system';
import {
  secondariesSlice,
  selectMessageObject,
  SecondaryRequestForQuote,
  selectSecondaries,
  useAppDispatch,
  useAppSelector,
  useGetRequestForQuoteByIdUsingGetQuery,
  selectJwt,
} from '@luma-fe-workspace/redux';
import { useEffect, useState } from 'react';
import { SecondariesModal } from '../SecondariesModal/SecondariesModal';
import { SecondariesTable } from '../SecondariesTable/SecondariesTable';
import { DateHelper } from '@luma-fe-workspace/utility';

type QuoteRow = {
  '#': number;
  Timestamp: string | undefined;
  'User ID': string | undefined;
  Bid: number;
  Issuer: string | undefined;
};

type StatusRow = {
  '#': number;
  Timestamp: string | undefined;
  Status: string | undefined;
};

export const ExecutionDetailModal = () => {
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const secondariesStore = useAppSelector(selectSecondaries);
  const pendingActionOrders = secondariesStore.pendingActionOrders;
  const pendingExecutionDetails = secondariesStore.pendingExecutionDetails;
  const order = pendingExecutionDetails[0];
  const messageObject = useAppSelector(selectMessageObject);
  const userName = useAppSelector(selectJwt)?.user_name;
  const isLT = order?.associatedUserIds?.liquidityTaker === userName;
  const [associatedRFQ, setAssociatedRFQ] =
    useState<SecondaryRequestForQuote>();
  const getRFQByIdResponse = useGetRequestForQuoteByIdUsingGetQuery(
    {
      requestId: order && order.associatedRequestId,
    },
    { skip: !order }
  );

  useEffect(() => {
    if (pendingActionOrders.length === 0 && order) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [pendingActionOrders, order]);

  useEffect(() => {
    if (getRFQByIdResponse.isSuccess && !getRFQByIdResponse.isFetching) {
      setAssociatedRFQ(getRFQByIdResponse.data);
    }
  }, [getRFQByIdResponse]);

  const handleClose = () => {
    dispatch(secondariesSlice.actions.removeFromPendingExecutionDetails(order));
  };

  const getQuoteData = () => {
    let quoteData: QuoteRow[] = [];
    if (associatedRFQ?.quotes && associatedRFQ.quotes[0]) {
      const sortedQuotes = [...associatedRFQ.quotes].sort(
        (a, b) => b.quoteAmount - a.quoteAmount
      );
      quoteData = sortedQuotes.map((quote, i) => {
        const createDateTimestamptoUTC =
          quote.createDateTimestamp &&
          DateHelper.convertToUTC(quote.createDateTimestamp);
        return {
          '#': i + 1,
          Timestamp:
            createDateTimestamptoUTC &&
            createDateTimestamptoUTC.toLocaleTimeString(),
          'User ID': quote.createdByUserId,
          Bid: quote.quoteAmount,
          Issuer: quote.firm,
        };
      });
    }
    return quoteData;
  };

  const getStatusData = () => {
    let statusHistory: StatusRow[] = [];
    if (order.statusHistory) {
      statusHistory = order?.statusHistory.map((status, i) => {
        return {
          '#': i + 1,
          Timestamp:
            status.timestamp &&
            DateHelper.convertToUTC(status.timestamp).toLocaleTimeString(),
          Status:
            status.status &&
            status.status.slice(0, 1).toUpperCase() +
              status.status.slice(1).toLowerCase(),
        };
      });
    }
    return statusHistory;
  };

  const filledStatus = order.statusHistory?.find(
    (status) => status.status === 'FILLED'
  );

  return (
    <SecondariesModal
      id={`Execution Details for order #${order.orderId}`}
      submitAction={{ onClick: handleClose, text: 'CLOSE' }}
      handleOnClose={handleClose}
      secondaryTitle={`Order ID: ${order.orderId}`}
      showCancel={false}
      title={'Execution Details'}
      showModal={isVisible}
    >
      <SecondariesTable
        title={'Order'}
        data={{
          Status:
            order.status &&
            order.status[0].toUpperCase() + order.status.slice(1).toLowerCase(),
          Side:
            order.side &&
            order.side[0].toUpperCase() + order.side.slice(1).toLowerCase(),
          'Order Date':
            filledStatus?.timestamp &&
            new Date(filledStatus?.timestamp).toLocaleDateString(),
          'Settlement Date':
            order.settlement && new Date(order.settlement).toLocaleDateString(),
        }}
        rootStyles={'margin-bottom: 1rem'}
      />
      <SecondariesTable
        title={'Security'}
        data={{
          'CUSIP/ISIN': order.productIdentifier?.securityIdentifierValue,
          Quantity: order.quantity,
          Price: order.price,
        }}
        rootStyles={'margin-bottom: 1rem'}
      />
      {associatedRFQ?.quotes &&
        (isLT ? (
          <SecondariesTable
            title={'Response Received'}
            headerCols={[
              {
                col: '#',
                isGreyedOut: true,
                width: '1rem',
              },
              {
                col: 'Timestamp',
                fontSize: '.65rem',
                width: '3rem',
              },
              {
                col: 'User ID',
                width: '12rem',
                hideTextOverflow: true,
                fontSize: '.65rem',
              },
              {
                col: 'Bid',
                textAlign: 'center',
                fontSize: '.65rem',
                width: '3rem',
              },
              {
                col: 'Issuer',
                isGreyedOut: true,
                hideTextOverflow: true,
                width: '9rem',
                fontSize: '.65rem',
              },
            ]}
            data={getQuoteData()}
            rootStyles={'margin-bottom: 1rem'}
          />
        ) : (
          <SecondariesTable
            title={'Response Received'}
            data={{
              'Number of Responses': associatedRFQ.quotes.length,
              'Cover Price': order.coverPrice,
            }}
            rootStyles={'margin-bottom: 1rem'}
          />
        ))}
      <SecondariesTable
        title={'Audit History'}
        headerCols={[
          {
            col: '#',
            isGreyedOut: true,
            width: '1rem',
          },
          {
            col: 'Timestamp',
            width: '12rem',
          },

          {
            col: 'Status',
          },
        ]}
        data={getStatusData()}
      />
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
    </SecondariesModal>
  );
};
