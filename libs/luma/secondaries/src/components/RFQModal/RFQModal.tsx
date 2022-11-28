import { MenuItem, Message } from '@luma-fe-workspace/design-system';
import {
  useAppSelector,
  SecondaryRequestForQuote,
  useCreateMultipleRequestForQuotesUsingPostMutation,
  useGetProductsBySearchCriteriaUsingPostMutation,
  secondariesSlice,
  useAppDispatch,
  selectSecondaries,
  selectMessageObject,
} from '@luma-fe-workspace/redux';
import { GridApi, NewValueParams, RowClassParams } from 'ag-grid-community';
import { useCallback, useEffect, useState } from 'react';
import { SecondariesModal } from '../SecondariesModal/SecondariesModal';
import { AGGridTable } from '../AGGridTable/AGGridTable';
import {
  AddRowButton,
  BottomActionRow,
  DropdownButton,
  DropdownRow,
  PlusIcon,
  RFQGrid,
} from './RFQModal.styles';
import { getRFQModalColumns } from './columnHelpers';
import {
  getMsTillUTCMarketClose,
  UTC_MARKET_CLOSE_HOUR,
} from '../../utils/getMsTillMarketClose';
import { DateHelper } from '@luma-fe-workspace/utility';

interface RFQModalProps {
  showModal: boolean;
  setNewCreatedRFQs: (data: SecondaryRequestForQuote[]) => void;
  setShowModal: (showModal: boolean) => void;
}

interface RFQRequest {
  id: number;
  cusip: string;
  description: string | null;
  side: 'BWIC' | 'OWIC';
  quantity: number | null;
  productId: string | null;
  settlement: string;
}

type DueTimeType = number | 'Max' | null;

export const RFQModal = ({
  showModal,
  setNewCreatedRFQs,
  setShowModal,
}: RFQModalProps) => {
  const [createRFQs] = useCreateMultipleRequestForQuotesUsingPostMutation();
  const [getProductbySearch] =
    useGetProductsBySearchCriteriaUsingPostMutation();
  const dispatch = useAppDispatch();
  const secondariesStore = useAppSelector(selectSecondaries);
  const myRFQs = secondariesStore.myRFQs;
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);
  const [RFQCount, setRFQCount] = useState<number>(0);
  const [rowCount, setRowCount] = useState<number>(0);
  const messageObject = useAppSelector(selectMessageObject);
  const [dueTime, setDueTime] = useState<DueTimeType>(null);
  const [dueTimeOptions, setDueTimeOptions] = useState<MenuItem[]>([]);
  const [modalErrorMessage, setModalErrorMessage] = useState<
    string | undefined
  >(undefined);

  const handleDueTime = useCallback(
    (minutes: DueTimeType) => {
      setDueTime(minutes);
      if (modalErrorMessage) {
        setModalErrorMessage(undefined);
      }
    },
    [modalErrorMessage]
  );

  const getMinutesTillMarketClose = () => {
    const msTillMarketClose = getMsTillUTCMarketClose();
    const msPerMinute = 60000;
    const minutesTillMarketClose = msTillMarketClose / msPerMinute;
    return minutesTillMarketClose;
  };

  const setDueTimes = useCallback(() => {
    const baseOptions = [2, 5, 10, 15, 30, 45, 60, 90, 120, 240];
    const minutesTillMarketClose = getMinutesTillMarketClose();
    const dueTimes: MenuItem[] = [];
    for (let i = 0; i < baseOptions.length; i++) {
      if (baseOptions[i] > minutesTillMarketClose) {
        break;
      } else {
        dueTimes.push({
          display: `${baseOptions[i]} min`,
          onClick: () => handleDueTime(baseOptions[i]),
        });
      }
    }
    dueTimes.push({
      display: 'Max',
      onClick: () => handleDueTime('Max'),
    });
    setDueTimeOptions(dueTimes);
  }, [handleDueTime]);

  useEffect(() => {
    if (showModal === true) {
      setDueTimes();
    }
  }, [setDueTimes, showModal]);

  const handleCUSIPEntry = async (e: NewValueParams) => {
    try {
      const data = await getProductbySearch({
        searchOptions: {
          searchCriteriaList: [
            {
              key: 'productGeneral.cusip',
              value: [e.newValue],
              operation: 'IN',
            },
          ],
        },
      }).unwrap();
      if (data && data[0] && data[0].productId) {
        updateItems(e, {
          description: data[0].productGeneral.structureNameInternal ?? 'NA',
          id: data[0].productId,
        });
      } else {
        updateItems(e);
      }
    } catch (error) {
      return;
    }
  };

  const handleRFQCount = (api: GridApi) => {
    if (api) {
      const rowData: RFQRequest[] = [];
      api.forEachNode((node) => rowData.push(node.data));
      const quantities = rowData.filter((row: RFQRequest) => row.quantity);
      setRFQCount(quantities.length);
      setModalErrorMessage(undefined);
    }
  };

  const RFQModalColumns = getRFQModalColumns(handleCUSIPEntry, handleRFQCount);

  const updateItems = (
    e: NewValueParams,
    product?: {
      description: string;
      id: string;
    }
  ): void => {
    const RFQRowData: RFQRequest = e.data;
    if (product) {
      RFQRowData.description = product.description;
      RFQRowData.productId = product.id;
    } else {
      RFQRowData.description = 'Invalid CUSIP';
      RFQRowData.productId = null;
      RFQRowData.quantity = null;
      handleRFQCount(e.api);
    }
    e.api.applyTransaction({ update: [RFQRowData] });
    if (e.node) {
      e.api.refreshCells({ rowNodes: [e.node], force: true });
    }
  };

  const calculateEndTime = (dueTime: DueTimeType, now: Date) => {
    let endTime;
    if (dueTime === 'Max') {
      const marketCloseAtUTC = new Date().setUTCHours(
        UTC_MARKET_CLOSE_HOUR,
        0,
        0,
        0
      );
      endTime = new Date(marketCloseAtUTC).toISOString();
    } else if (dueTime) {
      endTime = DateHelper.addMinutes(now, dueTime).toISOString();
    }
    return endTime;
  };

  const handleSubmit = async () => {
    if (!gridApi || !dueTime) {
      return;
    }
    setSubmitDisabled(true);
    const rowData: RFQRequest[] = [];
    gridApi.forEachNode((node) => rowData.push(node.data));
    const now = new Date();
    const body: SecondaryRequestForQuote[] = [];
    const submittedCusips: { cusip: string; productId: string }[] = [];
    rowData.forEach((RFQ, i) => {
      if (
        !RFQ.productId ||
        !RFQ.quantity ||
        new Date(RFQ.settlement).toString() === 'Invalid Date' ||
        new Date(RFQ.settlement) < now
      ) {
        return;
      }
      submittedCusips.push({ cusip: RFQ.cusip, productId: RFQ.productId });
      const request: SecondaryRequestForQuote = {
        productIdentifier: {
          productId: RFQ.productId,
        },
        quantity: RFQ.quantity,
        requestType: RFQ.side,
        // TODO: change due time name?
        endTime: calculateEndTime(dueTime, now),
        settlementTimestamp: new Date(RFQ.settlement).toISOString(),
      };
      body.push(request);
    });

    try {
      const createRFQResponse = await createRFQs({ body }).unwrap();
      setNewCreatedRFQs(createRFQResponse);
      if (myRFQs) {
        dispatch(
          secondariesSlice.actions.setMyRFQs([...createRFQResponse, ...myRFQs])
        );
      } else {
        dispatch(secondariesSlice.actions.setMyRFQs(createRFQResponse));
      }
      handleMessage(createRFQResponse);
    } catch (error) {
      handleMessage();
    }
  };

  const handleMessage = (data?: SecondaryRequestForQuote[]) => {
    if (gridApi) {
      const rowData: RFQRequest[] = [];
      gridApi.forEachNode((node) => rowData.push(node.data));
      if (data && data.length > 0) {
        dispatch(
          secondariesSlice.actions.setMessageObject({
            title: `Security ${
              data[0].productIdentifier?.securityIdentifierValue
            } ${
              data.length > 1
                ? `and ${data.length - 1} other${data.length > 2 ? 's' : ''}`
                : ''
            } successfully submitted as request for quote.`,
            messageType: 'success',
            isMessageShowing: true,
          })
        );
        setShowModal(false);
        setRFQCount(0);
        setDueTime(null);
        setModalErrorMessage(undefined);
      } else {
        dispatch(
          secondariesSlice.actions.setMessageObject({
            title: `Unable to submit ${
              RFQCount > 1 ? `${RFQCount} securities` : 'security'
            } as request for quote.`,
            description: 'Please verify and resubmit or cancel.',
            messageType: 'error',
            isMessageShowing: true,
          })
        );
        setModalErrorMessage(
          'Unable to submit those securities. Verify and resubmit or cancel.'
        );
      }
    }
    setSubmitDisabled(false);
  };

  const getDueTimePlaceholder = () => {
    let placeholder = 'Select';
    if (dueTime === 'Max') {
      placeholder = 'Max';
    } else if (dueTime) {
      placeholder = `${dueTime} min`;
    }
    return placeholder;
  };

  const addRows = (api: GridApi | null) => {
    if (api) {
      const RFQRequests: RFQRequest[] = [];
      for (let i = rowCount; i < rowCount + 10; i++) {
        RFQRequests.push({
          id: i,
          cusip: '',
          description: null,
          side: 'BWIC',
          quantity: null,
          productId: null,
          settlement: DateHelper.addDays(new Date(), 2).toLocaleDateString(),
        });
      }
      api.applyTransaction({ add: RFQRequests });
      setRowCount(rowCount + 10);
    }
  };

  return (
    <SecondariesModal
      id="rfq-submit-modal"
      title={'REQUEST FOR QUOTE'}
      showModal={showModal}
      handleOnClose={() => {
        setShowModal(false);
        setRFQCount(0);
        setDueTime(null);
        setModalErrorMessage(undefined);
      }}
      submitAction={{
        text: `SUBMIT ${RFQCount > 0 ? `(${RFQCount})` : ''}`,
        onClick: () => handleSubmit(),
      }}
      disableSubmit={!dueTime || RFQCount < 1 || submitDisabled}
      errorMessage={modalErrorMessage}
    >
      <DropdownRow>
        <DropdownButton
          items={dueTimeOptions}
          header={'Due Time'}
          placeholder={getDueTimePlaceholder()}
          variant={'tertiary'}
        />
      </DropdownRow>
      <RFQGrid>
        <AGGridTable
          getRowNodeId={(data: RFQRequest) => data.id.toString()}
          gridOptions={{
            onGridReady: (e) => {
              setGridApi(e.api);
              addRows(e.api);
            },
            rowHeight: 32,
            headerHeight: 48,
            suppressHorizontalScroll: true,
            columnDefs: RFQModalColumns,
            getRowNodeId: (data) => data.id,
            stopEditingWhenCellsLoseFocus: true,
            rowClassRules: {
              'grid-row-even': (e: RowClassParams) => e.rowIndex % 2 === 0,
              'grid-row-odd': (e: RowClassParams) => e.rowIndex % 2 !== 0,
            },
          }}
        />
      </RFQGrid>
      <BottomActionRow>
        <AddRowButton variant="secondary" onClick={() => addRows(gridApi)}>
          <PlusIcon iconCode="plus" />
          Add 10 More Rows
        </AddRowButton>
      </BottomActionRow>
      <Message
        title={messageObject.title}
        showMessage={messageObject.isMessageShowing}
        setShowMessage={(showMessage: boolean) =>
          dispatch(secondariesSlice.actions.setIsMessageShowing(showMessage))
        }
        messageType={messageObject.messageType}
      />
    </SecondariesModal>
  );
};
