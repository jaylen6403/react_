import {
  useApplyProductChangeUsingPostMutation,
  useGetInitialFormStateUsingGetMutation,
  useGetExistingPricingUsingGetMutation,
  useCreatePricingUsingPostMutation,
  useUpdateRFQUsingPostMutation,
  useGetRFQsUsingGetMutation,
  useGetPricingsUsingGetMutation,
  useGetIssuerPricingsUsingGetMutation,
  useGetIssuerPricingUsingGetMutation,
  useGetMatchingUnderliersUsingGetMutation,
  useUpdatePricingUsingPostMutation,
  useAddDocumentUsingPostMutation,
  useGetDocumentUsingGetMutation,
} from '@luma-fe-workspace/redux';

// please add a mock to pricingAPIMock with each update
export function usePricingAPI() {
  const [getInitialState, { isLoading: isLoadingInitialState }] =
    useGetInitialFormStateUsingGetMutation();
  const [postProductChanges, { isLoading: isLoadingPostPostProductChanges }] =
    useApplyProductChangeUsingPostMutation();
  const [submitForm] = useCreatePricingUsingPostMutation();
  const [getExistingPricing, { isLoading: isLoadingExistingPricing }] =
    useGetExistingPricingUsingGetMutation();
  const [updatePricing, { isLoading: isUpdatePricingPending }] =
    useUpdatePricingUsingPostMutation();
  const [cancelRfq, { isLoading: isCancelRfqPending }] =
    useUpdatePricingUsingPostMutation();
  const [createRfq, { isLoading: isCreateRfqPending }] =
    useUpdatePricingUsingPostMutation();
  const [updateRfq, { isLoading: isUpdateRfqPending }] =
    useUpdateRFQUsingPostMutation();
  const [addDocument, { isLoading: isAddDocumentPending }] =
    useAddDocumentUsingPostMutation();
  const [getPricings, { isLoading: isLoadingGetPricingsPending }] =
    useGetPricingsUsingGetMutation();
  const [getIssuerPricings, { isLoading: isGetIssuerPricingsPending }] =
    useGetIssuerPricingsUsingGetMutation();
  const [getIssuerPricing, { isLoading: isGetIssuerPricingPending }] =
    useGetIssuerPricingUsingGetMutation();
  const [getRFQs, { isLoading: isLoadingGetRFQsPending }] =
    useGetRFQsUsingGetMutation();
  const [getMatchingUnderliers, { isLoading: isLoadingUnderliersPending }] =
    useGetMatchingUnderliersUsingGetMutation();
  const [getDocument, { isLoading: isLoadingDocument }] =
    useGetDocumentUsingGetMutation();

  return {
    getInitialState,
    getExistingPricing,
    postProductChanges,
    submitForm,
    updatePricing,
    cancelRfq,
    createRfq,
    updateRfq,
    addDocument,
    getPricings,
    getIssuerPricings,
    getIssuerPricing,
    getRFQs,
    getMatchingUnderliers,
    getDocument,
    isLoading: {
      initialState: isLoadingInitialState,
      changes: isLoadingPostPostProductChanges,
      pricing: isLoadingExistingPricing,
      updateRfq: isUpdateRfqPending,
      updatePricing: isUpdatePricingPending,
      addDocument: isAddDocumentPending,
      cancelRfq: isCancelRfqPending,
      createRfq: isCreateRfqPending,
      homePricings: isLoadingGetPricingsPending,
      homeRFQs: isLoadingGetRFQsPending,
      issuerPricings: isGetIssuerPricingsPending,
      issuerPricing: isGetIssuerPricingPending,
      underliers: isLoadingUnderliersPending,
      document: isLoadingDocument,
    },
  };
}
