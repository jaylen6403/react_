import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  SecondaryOrder,
  SecondaryRequestForQuote,
} from '../secondariesService/secondariesServiceEndpoints';
import { SecondariesMessageObject } from './types';

interface SecondariesState {
  securityDetailsCusip?: string;
  message: SecondariesMessageObject;
  myRFQs?: SecondaryRequestForQuote[];
  availableRFQs?: SecondaryRequestForQuote[];
  orders?: SecondaryOrder[];
  pendingActionOrders: SecondaryOrder[];
  pendingExecutionDetails: SecondaryOrder[];
}

const initialState: SecondariesState = {
  message: {
    title: '',
    messageType: 'success',
    isMessageShowing: false,
  },
  pendingActionOrders: [],
  pendingExecutionDetails: [],
};

export const secondariesSlice = createSlice({
  name: 'secondaries',
  initialState,
  reducers: {
    setSecurityDetailsCusip(state, action: PayloadAction<string | undefined>) {
      state.securityDetailsCusip = action.payload;
    },
    setMessageObject(state, action: PayloadAction<SecondariesMessageObject>) {
      state.message = action.payload;
    },
    setIsMessageShowing(state, action: PayloadAction<boolean>) {
      state.message.isMessageShowing = action.payload;
    },
    setAllRFQs(
      state,
      action: PayloadAction<{
        RFQs: SecondaryRequestForQuote[];
        userName: string;
      }>
    ) {
      const RFQs = action.payload.RFQs;
      const userName = action.payload.userName;
      if (RFQs) {
        const availableRFQs: SecondaryRequestForQuote[] = [];
        const myRFQs: SecondaryRequestForQuote[] = [];
        const RFQsSorted = RFQs.slice().sort((a, b) => {
          if (a.requestId && b.requestId) {
            return b.requestId - a.requestId;
          }
          return 0;
        });
        RFQsSorted.forEach((RFQ) => {
          // Checking for requestId since we've seen broken data without it.
          if (!RFQ.requestId) return;
          if (RFQ.createdByUserId === userName) {
            myRFQs.push(RFQ);
          } else {
            availableRFQs.push(RFQ);
          }
        });
        state.myRFQs = myRFQs;
        state.availableRFQs = availableRFQs;
      }
    },
    setMyRFQs(state, action: PayloadAction<SecondaryRequestForQuote[]>) {
      state.myRFQs = action.payload;
    },
    setAvailableRFQs(state, action: PayloadAction<SecondaryRequestForQuote[]>) {
      state.availableRFQs = action.payload;
    },
    updateMyRFQs(
      state,
      action: PayloadAction<{
        RFQs: SecondaryRequestForQuote[];
      }>
    ) {
      if (state.myRFQs) {
        const updatedRFQs = state.myRFQs.map((existingRFQ) => {
          const updatedRFQ = action.payload.RFQs.find(
            (newRFQ) => existingRFQ.requestId === newRFQ.requestId
          );
          if (updatedRFQ) {
            return updatedRFQ;
          }
          return existingRFQ;
        });
        state.myRFQs = updatedRFQs;
      } else {
        state.myRFQs = action.payload.RFQs;
      }
    },
    updateOrAddToAvailableRFQs(
      state,
      action: PayloadAction<SecondaryRequestForQuote[]>
    ) {
      const incomingRFQs = action.payload;
      if (!state.availableRFQs) {
        // If no existing RFQs, add all
        state.availableRFQs = incomingRFQs;
        return;
      }
      const availableRFQs = [...state.availableRFQs];
      incomingRFQs.forEach((newRFQ) => {
        const existingRFQIndex = availableRFQs.findIndex(
          (RFQ) => RFQ.requestId === newRFQ.requestId
        );
        if (availableRFQs[existingRFQIndex]) {
          // If RFQ exists, update
          availableRFQs[existingRFQIndex] = newRFQ;
        } else {
          // If RFQ is new, add
          availableRFQs.push(newRFQ);
        }
      });
      state.availableRFQs = availableRFQs;
    },
    setAllOrders(state, action: PayloadAction<SecondaryOrder[]>) {
      state.orders = action.payload;
    },
    addOrUpdateOrders(state, action: PayloadAction<SecondaryOrder>) {
      const newOrder = action.payload;
      state.orders = [
        ...[...(state.orders || [])].filter(
          (order) => order.orderId !== newOrder.orderId
        ),
        newOrder,
      ];
    },
    addToPendingActionOrders(state, action: PayloadAction<SecondaryOrder>) {
      state.pendingActionOrders = [
        ...state.pendingActionOrders,
        action.payload,
      ];
    },
    removeFromPendingActionOrders(
      state,
      action: PayloadAction<SecondaryOrder>
    ) {
      const removedOrder = action.payload;
      state.pendingActionOrders = state.pendingActionOrders.filter(
        (order) => order.orderId !== removedOrder.orderId
      );
    },
    addToPendingExecutionDetails(state, action: PayloadAction<SecondaryOrder>) {
      state.pendingExecutionDetails = [
        ...state.pendingExecutionDetails,
        action.payload,
      ];
    },
    removeFromPendingExecutionDetails(
      state,
      action: PayloadAction<SecondaryOrder>
    ) {
      const removedOrder = action.payload;
      state.pendingExecutionDetails = state.pendingExecutionDetails.filter(
        (order) => order.orderId !== removedOrder.orderId
      );
    },
  },
});
