import { DateHelper } from '@luma-fe-workspace/utility';
import type { RootState } from '../configureStore';
import {
  SecondaryQuote,
  SecondaryRequestForQuote,
} from '../secondariesService/secondariesServiceEndpoints';

export interface RFQSearchQuoted extends SecondaryRequestForQuote {
  // activeResponse is the users response to a singular RFQ
  activeResponse?: SecondaryQuote;
  quoteDeadline: number;
  price?: number;
}

const setActiveResponses = (
  RFQs: SecondaryRequestForQuote[] | RFQSearchQuoted[],
  userName: string
) => {
  const RFQsQuoted: RFQSearchQuoted[] = RFQs.map((RFQ) => {
    let activeResponse;
    const defaultQuoteDeadlineOffsetMs = 5 * 60000;
    if (RFQ.quotes) {
      activeResponse = RFQ.quotes.find((quote) => {
        // Finding a user response to the RFQ that hasn't expired
        if (quote.status === 'OTW') {
          return quote.createdByUserId && quote.createdByUserId === userName;
        }
        return false;
      });
    }
    return {
      ...RFQ,
      quoteDeadline: activeResponse
        ? DateHelper.convertToUTC(activeResponse.goodUntilTime).getTime()
        : defaultQuoteDeadlineOffsetMs,
      price: activeResponse?.quoteAmount,
      activeResponse,
    };
  });
  return RFQsQuoted;
};

export const selectSecondaries = (state: RootState) => state.secondaries;
export const selectSecurityDetailsCusip = (state: RootState) =>
  selectSecondaries(state).securityDetailsCusip;
export const selectSecondariesQuotedAvailableRFQs = (state: RootState) => {
  const userName = state.user.user?.userName;
  const availableRFQs = selectSecondaries(state).availableRFQs;
  let quotedRFQs: SecondaryRequestForQuote[] = [];
  if (availableRFQs && userName) {
    quotedRFQs = setActiveResponses(availableRFQs, userName);
  }
  return quotedRFQs;
};
export const selectMyRespondedRFQs = (state: RootState) => {
  const userName = state.user.user?.userName;
  const myRespondedRFQs = selectSecondaries(state).availableRFQs?.filter(
    (RFQ: SecondaryRequestForQuote) =>
      RFQ.quotes?.find(
        (quote: SecondaryQuote) =>
          quote.createdByUserId && quote.createdByUserId === userName
      )
  );
  let quotedRFQs: SecondaryRequestForQuote[] = [];
  if (myRespondedRFQs && userName) {
    quotedRFQs = setActiveResponses(myRespondedRFQs, userName);
  }
  return quotedRFQs;
};
export const selectMessageObject = (state: RootState) =>
  selectSecondaries(state).message;
