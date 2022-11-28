import { Icon } from '@luma-fe-workspace/design-system';
import { useSelect } from 'downshift';
import {
  secondariesSlice,
  SecondaryQuote,
  selectJwt,
  useAppDispatch,
  useAppSelector,
  useCreateOrderUsingPostMutation,
} from '@luma-fe-workspace/redux';
import {
  BestQuoteDivider,
  QuoteAcceptButton,
  QuoteAmount,
  QuoteDeadline,
  QuoteList,
  QuoteListItem,
  QuoteSelectorButton,
  QuoteSelectorOfferCount,
  QuoteSelectorOffers,
  Root,
} from './TableCellQuoteSelector.styles';
import { DateHelper } from '@luma-fe-workspace/utility';

export interface TableCellQuoteSelectorProps {
  id: string;
  quotes: SecondaryQuote[];
  status: string;
  disabled: boolean;
  RFQRequestId: number | undefined;
}

export const TableCellQuoteSelector = ({
  quotes,
  status,
  id,
  disabled,
  RFQRequestId,
}: TableCellQuoteSelectorProps) => {
  const firstName = useAppSelector(selectJwt)?.firstName;
  const [createOrder] = useCreateOrderUsingPostMutation();
  const dispatch = useAppDispatch();
  const isCollecting = status === 'OPEN';
  const noQuoteResponses = quotes.length === 0;
  const { isOpen, getToggleButtonProps, getMenuProps, getItemProps } =
    useSelect({
      id,
      items: quotes,
    });
  const buttonProps = {
    ...getToggleButtonProps({
      disabled: disabled || noQuoteResponses || !isCollecting,
    }),
  };

  const acceptQuote = async () => {
    if (RFQRequestId && quotes[0]?.responseId) {
      try {
        const order = await createOrder({
          secondaryOrder: {
            associatedRequestId: RFQRequestId,
            associatedResponseId: quotes[0].responseId,
          },
        }).unwrap();
        if (order) {
          dispatch(secondariesSlice.actions.addOrUpdateOrders(order));
          dispatch(
            secondariesSlice.actions.setMessageObject({
              title: `${firstName ?? 'You'} accepted ${
                order.side === 'BUY' ? 'a bid' : 'an offer'
              } for ${order.quantity} ${
                order.productIdentifier?.securityIdentifierValue
                  ? 'x ' + order.productIdentifier?.securityIdentifierValue
                  : ''
              } at ${order.price}.`,
              description: `${
                firstName ? firstName + "'s" : 'Your'
              } order number is ${order.orderId}`,
              messageType: 'success',
              isMessageShowing: true,
            })
          );
        }
      } catch (error) {
        dispatch(
          secondariesSlice.actions.setMessageObject({
            title: 'Unable to accept bid for Request for Quote.',
            messageType: 'error',
            isMessageShowing: true,
          })
        );
      }
    }
  };

  return (
    <Root>
      <QuoteSelectorButton
        {...buttonProps}
        static={noQuoteResponses || !isCollecting}
        className={disabled && 'disabled'}
        aria-label="Quote Selector"
      >
        {quotes[0]?.quoteAmount}
        {!noQuoteResponses && isCollecting ? (
          <QuoteSelectorOffers className={disabled ? 'disabled' : ''}>
            <Icon iconCode="chevron-down" />
            <QuoteSelectorOfferCount>{quotes.length}</QuoteSelectorOfferCount>
          </QuoteSelectorOffers>
        ) : null}
      </QuoteSelectorButton>
      {!noQuoteResponses && isCollecting ? (
        <QuoteList
          {...getMenuProps()}
          isOpen={isOpen}
          aria-labelledby={buttonProps.id}
        >
          <QuoteAcceptButton onClick={acceptQuote}>ACCEPT</QuoteAcceptButton>
          {isOpen &&
            quotes.map((quote, idx) => {
              const isFirstElem = 0 === idx;
              const itemProps = getItemProps({
                item: quote,
                index: idx,
                onClick: isFirstElem ? acceptQuote : undefined,
                readOnly: !isFirstElem,
                disabled: !isFirstElem,
              });
              const goodUntilTime = DateHelper.convertToUTC(
                quote.goodUntilTime
              );
              return (
                <div key={`${quote.quoteAmount}-${idx}`}>
                  <QuoteListItem {...itemProps}>
                    <QuoteAmount multipleQuotes={quotes.length > 1}>
                      {quote.quoteAmount}{' '}
                      {idx !== 1 ? null : quote.firm && `(${quote.firm})`}
                    </QuoteAmount>
                    <QuoteDeadline>
                      {goodUntilTime.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </QuoteDeadline>
                  </QuoteListItem>
                  {isFirstElem && quotes.length > 1 && <BestQuoteDivider />}
                </div>
              );
            })}
        </QuoteList>
      ) : null}
    </Root>
  );
};
