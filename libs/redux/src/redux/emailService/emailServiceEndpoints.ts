import { baseApi as api } from './emailServiceBaseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    sendUsingPost: build.mutation<
      SendUsingPostApiResponse,
      SendUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/email`,
        method: 'POST',
        body: queryArg.emailTemplate,
      }),
    }),
    sendNoTemplateWithAttachmentsUsingPost: build.mutation<
      SendNoTemplateWithAttachmentsUsingPostApiResponse,
      SendNoTemplateWithAttachmentsUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/email/forward`,
        method: 'POST',
        body: queryArg.emailAddresses,
        params: { emailID: queryArg.emailId },
      }),
    }),
    getEmailsInRangeUsingGet: build.query<
      GetEmailsInRangeUsingGetApiResponse,
      GetEmailsInRangeUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/email/range`,
        params: { endDate: queryArg.endDate, startDate: queryArg.startDate },
      }),
    }),
    resendEmailByIdUsingGet: build.query<
      ResendEmailByIdUsingGetApiResponse,
      ResendEmailByIdUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/email/resend`,
        params: { emailID: queryArg.emailId },
      }),
    }),
    sendNoTemplateWithAttachmentsUsingPost1: build.mutation<
      SendNoTemplateWithAttachmentsUsingPost1ApiResponse,
      SendNoTemplateWithAttachmentsUsingPost1ApiArg
    >({
      query: (queryArg) => ({
        url: `/emailNoTemplateWithAttachments`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    sendTemplateWithAttachedDocumentsUsingPost: build.mutation<
      SendTemplateWithAttachedDocumentsUsingPostApiResponse,
      SendTemplateWithAttachedDocumentsUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/emailWithAttachedDocuments`,
        method: 'POST',
        body: queryArg.emailTemplate,
      }),
    }),
    sendWithAttachmentsUsingPost: build.mutation<
      SendWithAttachmentsUsingPostApiResponse,
      SendWithAttachmentsUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/emailWithAttachments`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    sendNoTemplateUsingPost: build.mutation<
      SendNoTemplateUsingPostApiResponse,
      SendNoTemplateUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/emailnotemplate`,
        method: 'POST',
        body: queryArg.emailNoTemplate,
      }),
    }),
    getEmailsWithPaginationUsingGet: build.query<
      GetEmailsWithPaginationUsingGetApiResponse,
      GetEmailsWithPaginationUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/emails`,
        body: queryArg.optionalFilterModel,
        params: {
          endDate: queryArg.endDate,
          offset: queryArg.offset,
          pageNumber: queryArg.pageNumber,
          pageSize: queryArg.pageSize,
          paged: queryArg.paged,
          'sort.sorted': queryArg['sort.sorted'],
          'sort.unsorted': queryArg['sort.unsorted'],
          startDate: queryArg.startDate,
          textFilter: queryArg.textFilter,
          unpaged: queryArg.unpaged,
        },
      }),
    }),
    getEmailsWithPaginationPostUsingPost: build.mutation<
      GetEmailsWithPaginationPostUsingPostApiResponse,
      GetEmailsWithPaginationPostUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/emails`,
        method: 'POST',
        body: queryArg.optionalFilterModel,
        params: {
          endDate: queryArg.endDate,
          offset: queryArg.offset,
          pageNumber: queryArg.pageNumber,
          pageSize: queryArg.pageSize,
          paged: queryArg.paged,
          'sort.sorted': queryArg['sort.sorted'],
          'sort.unsorted': queryArg['sort.unsorted'],
          startDate: queryArg.startDate,
          textFilter: queryArg.textFilter,
          unpaged: queryArg.unpaged,
        },
      }),
    }),
    getEmailTemplateAndRecipientsUsingGet: build.query<
      GetEmailTemplateAndRecipientsUsingGetApiResponse,
      GetEmailTemplateAndRecipientsUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/template-recipients`,
        params: { templateKey: queryArg.templateKey },
      }),
    }),
    addRecipientUsingPut: build.mutation<
      AddRecipientUsingPutApiResponse,
      AddRecipientUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/template-recipients`,
        method: 'PUT',
        body: queryArg.recipient,
      }),
    }),
    deleteRecipientUsingDelete: build.mutation<
      DeleteRecipientUsingDeleteApiResponse,
      DeleteRecipientUsingDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/template-recipients`,
        method: 'DELETE',
        params: { email: queryArg.email, templateKey: queryArg.templateKey },
      }),
    }),
    getEmailByTemplateKeyAndCompanyKeyUsingGet: build.query<
      GetEmailByTemplateKeyAndCompanyKeyUsingGetApiResponse,
      GetEmailByTemplateKeyAndCompanyKeyUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/templates`,
        params: {
          companyKey: queryArg.companyKey,
          templateKey: queryArg.templateKey,
        },
      }),
    }),
    sendWeeklyEventEmailUsingPost: build.mutation<
      SendWeeklyEventEmailUsingPostApiResponse,
      SendWeeklyEventEmailUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/weeklyEventEmail`,
        method: 'POST',
        body: queryArg.eventSummary,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as emailServiceApi };
export type SendUsingPostApiResponse = unknown;
export type SendUsingPostApiArg = {
  /** emailTemplate */
  emailTemplate: EmailTemplate;
};
export type SendNoTemplateWithAttachmentsUsingPostApiResponse = unknown;
export type SendNoTemplateWithAttachmentsUsingPostApiArg = {
  /** emailID */
  emailId: string;
  /** emailAddresses */
  emailAddresses: EmailAddresses;
};
export type GetEmailsInRangeUsingGetApiResponse =
  /** status 200 OK */ EmailInfo[];
export type GetEmailsInRangeUsingGetApiArg = {
  /** endDate */
  endDate: string;
  /** startDate */
  startDate: string;
};
export type ResendEmailByIdUsingGetApiResponse = unknown;
export type ResendEmailByIdUsingGetApiArg = {
  /** emailID */
  emailId: number;
};
export type SendNoTemplateWithAttachmentsUsingPost1ApiResponse = unknown;
export type SendNoTemplateWithAttachmentsUsingPost1ApiArg = {
  body: string;
};
export type SendTemplateWithAttachedDocumentsUsingPostApiResponse = unknown;
export type SendTemplateWithAttachedDocumentsUsingPostApiArg = {
  /** emailTemplate */
  emailTemplate: EmailTemplate;
};
export type SendWithAttachmentsUsingPostApiResponse = unknown;
export type SendWithAttachmentsUsingPostApiArg = {
  body: string;
};
export type SendNoTemplateUsingPostApiResponse = unknown;
export type SendNoTemplateUsingPostApiArg = {
  /** emailNoTemplate */
  emailNoTemplate: EmailNoTemplate;
};
export type GetEmailsWithPaginationUsingGetApiResponse =
  /** status 200 OK */ PageEmailInfo;
export type GetEmailsWithPaginationUsingGetApiArg = {
  /** endDate */
  endDate?: string;
  offset?: number;
  pageNumber?: number;
  pageSize?: number;
  paged?: boolean;
  'sort.sorted'?: boolean;
  'sort.unsorted'?: boolean;
  /** startDate */
  startDate?: string;
  /** textFilter */
  textFilter?: string;
  unpaged?: boolean;
  /** filterModel */
  optionalFilterModel: OptionalFilterModel;
};
export type GetEmailsWithPaginationPostUsingPostApiResponse =
  /** status 200 OK */ PageEmailInfo | /** status 201 Created */ undefined;
export type GetEmailsWithPaginationPostUsingPostApiArg = {
  /** endDate */
  endDate?: string;
  offset?: number;
  pageNumber?: number;
  pageSize?: number;
  paged?: boolean;
  'sort.sorted'?: boolean;
  'sort.unsorted'?: boolean;
  /** startDate */
  startDate?: string;
  /** textFilter */
  textFilter?: string;
  unpaged?: boolean;
  /** filterModel */
  optionalFilterModel: OptionalFilterModel;
};
export type GetEmailTemplateAndRecipientsUsingGetApiResponse =
  /** status 200 OK */ TemplateRecipients[];
export type GetEmailTemplateAndRecipientsUsingGetApiArg = {
  /** templateKey */
  templateKey: string;
};
export type AddRecipientUsingPutApiResponse /** status 200 OK */ =
  | Recipient
  | /** status 201 Created */ undefined;
export type AddRecipientUsingPutApiArg = {
  /** recipient */
  recipient: Recipient;
};
export type DeleteRecipientUsingDeleteApiResponse = unknown;
export type DeleteRecipientUsingDeleteApiArg = {
  /** email */
  email: string;
  /** templateKey */
  templateKey: string;
};
export type GetEmailByTemplateKeyAndCompanyKeyUsingGetApiResponse =
  /** status 200 OK */ Template;
export type GetEmailByTemplateKeyAndCompanyKeyUsingGetApiArg = {
  /** companyKey */
  companyKey: string;
  /** templateKey */
  templateKey: string;
};
export type SendWeeklyEventEmailUsingPostApiResponse = unknown;
export type SendWeeklyEventEmailUsingPostApiArg = {
  /** eventSummary */
  eventSummary: EventSummary;
};
export type EmailTemplate = {
  attachedDocumentKeys?: string[];
  bcc?: string[];
  cc?: string[];
  companyKey?: string;
  documentVersionKeys?: string[];
  emailComponent?:
    | 'LIFECYCLE_MANAGEMENT'
    | 'PRODUCT_MARKETPLACE'
    | 'CREATION_HUB'
    | 'AUTH'
    | 'OTHER';
  from?: string;
  model?: object;
  postEmailSentQueue?: string;
  priority?: number;
  replyToAddress?: string;
  requireEnvInSubject?: boolean;
  subject?: string;
  templateKey?: string;
  to?: string[];
  triggerMethod?: 'AUTO' | 'MANUAL' | 'OTHER';
  triggeredBy?: string;
};
export type EmailAddresses = {
  bcc?: string[];
  cc?: string[];
  to?: string[];
};
export type EmailAttachment = {
  attachmentKey?: string;
  createDate?: string;
  emailInfo?: EmailInfo;
  id?: number;
};
export type RecipientInfo = {
  emailAddress?: string;
  id?: number;
  sendStatus?: string;
};
export type EmailInfo = {
  bodyText?: string;
  createDate?: string;
  emailAttachments?: EmailAttachment[];
  emailComponent?:
    | 'LIFECYCLE_MANAGEMENT'
    | 'PRODUCT_MARKETPLACE'
    | 'CREATION_HUB'
    | 'AUTH'
    | 'OTHER';
  externalReference?: string;
  id?: number;
  internalIDForSES?: string;
  recipientInfoSet?: RecipientInfo[];
  subject?: string;
  triggerMethod?: 'AUTO' | 'MANUAL' | 'OTHER';
  triggeredBy?: string;
};
export type EmailNoTemplate = {
  attachedDocumentKeys?: string[];
  bcc?: string[];
  body?: string;
  cc?: string[];
  documentVersionKeys?: string[];
  emailComponent?:
    | 'LIFECYCLE_MANAGEMENT'
    | 'PRODUCT_MARKETPLACE'
    | 'CREATION_HUB'
    | 'AUTH'
    | 'OTHER';
  from?: string;
  postEmailSentQueue?: string;
  priority?: number;
  replyToAddress?: string;
  requireEnvInSubject?: boolean;
  subject?: string;
  to?: string[];
  triggerMethod?: 'AUTO' | 'MANUAL' | 'OTHER';
  triggeredBy?: string;
};
export type Sort = {
  empty?: boolean;
  sorted?: boolean;
  unsorted?: boolean;
};
export type Pageable = {
  offset?: number;
  pageNumber?: number;
  pageSize?: number;
  paged?: boolean;
  sort?: Sort;
  unpaged?: boolean;
};
export type PageEmailInfo = {
  content?: EmailInfo[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: Pageable;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
};
export type OptionalFilterModel = {
  empty?: boolean;
  present?: boolean;
};
export type Recipient = {
  email?: string;
  recipientType?: string;
  templateKey?: string;
};
export type TemplateRecipients = {
  company?: string;
  recipients?: Recipient[];
  template?: string;
  templateKey?: string;
};
export type Template = {
  company?: string;
  html?: string;
  id?: number;
  key?: string;
};
export type EventSummaryEventData = {
  description?: string;
  finalInterest?: string;
  principalReturn?: string;
  productId?: string;
  recipientEmail?: string;
  redemptionType?: string;
};
export type EventSummaryRecipient = {
  futureEvents?: EventSummaryEventData[];
  previousWeekEvents?: EventSummaryEventData[];
  recipientTypes?: string[];
  userEmail?: string;
  userFullName?: string;
  userName?: string;
};
export type EventSummary = {
  eventTypes?: ('REDEMPTION' | 'BARRIER_BREACH')[];
  futureWeekEnd?: string;
  futureWeekStart?: string;
  previousWeekEnd?: string;
  previousWeekStart?: string;
  recipients?: EventSummaryRecipient[];
};
export const {
  useSendUsingPostMutation,
  useSendNoTemplateWithAttachmentsUsingPostMutation,
  useGetEmailsInRangeUsingGetQuery,
  useResendEmailByIdUsingGetQuery,
  useSendNoTemplateWithAttachmentsUsingPost1Mutation,
  useSendTemplateWithAttachedDocumentsUsingPostMutation,
  useSendWithAttachmentsUsingPostMutation,
  useSendNoTemplateUsingPostMutation,
  useGetEmailsWithPaginationUsingGetQuery,
  useGetEmailsWithPaginationPostUsingPostMutation,
  useGetEmailTemplateAndRecipientsUsingGetQuery,
  useAddRecipientUsingPutMutation,
  useDeleteRecipientUsingDeleteMutation,
  useGetEmailByTemplateKeyAndCompanyKeyUsingGetQuery,
  useSendWeeklyEventEmailUsingPostMutation,
} = injectedRtkApi;
