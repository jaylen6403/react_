import { OrderHistoryResponse } from '@luma-fe-workspace/redux';
import { DateFormatter, DateHelper } from '@luma-fe-workspace/utility';
import { LumaColor } from '@luma-fe-workspace/design-system';

export type StatusData = {
  color: string;
  date: string;
  status: string;
  linkText: string;
};

export const mostRecentAnnuitiesData = (
  annuitiesData: OrderHistoryResponse[]
) => {
  const data = [...annuitiesData];

  const annuitiesDataSorted = data.sort(
    (cusipA: OrderHistoryResponse, cusipB: OrderHistoryResponse) => {
      let dateA: Date;
      let dateB: Date;

      if (cusipA.eventRows?.[0]?.transactionDate) {
        dateA = new Date(cusipA.eventRows[0].transactionDate);
      } else {
        return 1;
      }

      if (cusipB.eventRows?.[0]?.transactionDate) {
        dateB = new Date(cusipB.eventRows[0].transactionDate);
      } else {
        return -1;
      }

      return DateHelper.isDateBefore(dateA, dateB) ? 1 : -1;
    }
  );

  return annuitiesDataSorted?.slice(0, 5);
};

export const annuityStatusCalc = (rowData: OrderHistoryResponse) => {
  let mostRecentDate = new Date(0);
  let mostRecentStatus = '';
  let status: StatusData = {
    color: LumaColor.NEUTRAL_40,
    date: DateFormatter.formatLocalDate(mostRecentDate),
    status: mostRecentStatus,
    linkText: 'View',
  };

  rowData.eventRows?.map((event: any) => {
    const date = new Date(event.transactionDate);

    if (
      mostRecentDate.getTime() == 0 ||
      mostRecentDate.getTime() < date.getTime()
    ) {
      mostRecentDate = date;
      mostRecentStatus = event.status;
    }
  });

  mostRecentDate = new Date(
    mostRecentDate.getTime() +
      Math.abs(mostRecentDate.getTimezoneOffset() * 60000)
  );

  const yellowStatus = [
    'ActiveApplication',
    'PendingSignatures',
    'DataEntry',
    'ClientRequestPending',
    'ClientRequestComplete',
    'Signature',
    'SignaturePending',
    'SignatureInProgress',
    'SignatureAgentPending',
    'SignatureAgentInProcess',
    'SignatureRejected',
    'eDeliveryClientDirectedSignatureRejected',
    'SignatureFinished',
    'ManualReview',
    'ManualReviewPending',
    'ManualReviewInProgress',
    'ManualReviewMoreInfo',
    'PendingAgentReview',
    'ReviewQueueMoreInfo',
  ];

  const redStatus = [
    'ManualReviewRejected',
    'Terminated',
    'Canceled',
    'Expired',
    'CanceledByCarrier',
    'ReviewQueueRejected',
  ];

  const greenStatus = [
    'Approved',
    'ManualReviewFinished',
    'ManualReviewApproved',
    'ReviewQueueApproved',
    'Complete',
  ];

  if (yellowStatus.includes(mostRecentStatus)) {
    status = {
      color: LumaColor.WARNING_40,
      date: DateFormatter.formatLocalDate(mostRecentDate),
      status: mostRecentStatus,
      linkText: 'View',
    };
  } else if (redStatus.includes(mostRecentStatus)) {
    status = {
      color: LumaColor.NEGATIVE_40,
      date: DateFormatter.formatLocalDate(mostRecentDate),
      status: mostRecentStatus,
      linkText: 'View',
    };
  } else if (greenStatus.includes(mostRecentStatus)) {
    status = {
      color: LumaColor.POSITIVE_40,
      date: DateFormatter.formatLocalDate(mostRecentDate),
      status: mostRecentStatus,
      linkText: 'View',
    };
  } else {
    status = {
      color: LumaColor.NEUTRAL_40,
      date: DateFormatter.formatLocalDate(mostRecentDate),
      status: mostRecentStatus,
      linkText: 'View',
    };
  }

  return status;
};
