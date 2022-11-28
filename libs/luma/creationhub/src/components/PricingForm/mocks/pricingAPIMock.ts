function getEndpointMock(value: any) {
  return () => {
    return { unwrap: () => value };
  };
}
// TODO update with proper typings
const pricingApiMock = {
  getInitialState: getEndpointMock({}) as any,
  getExistingPricing: getEndpointMock({}) as any,
  getRFQ: getEndpointMock({}) as any,
  postProductChanges: getEndpointMock({}) as any,
  submitForm: getEndpointMock({}) as any,
  updatePricing: getEndpointMock({}) as any,
  updatePricings: getEndpointMock({}) as any,
  updateRfq: getEndpointMock({}) as any,
  getPricings: getEndpointMock({}) as any,
  getIssuerPricing: getEndpointMock({}) as any,
  getRFQs: getEndpointMock({}) as any,
  getMatchingUnderliers: getEndpointMock({}) as any,
  cancelRfq: getEndpointMock({}) as any,
  createRfq: getEndpointMock({}) as any,
  addDocument: getEndpointMock({}) as any,
  getDocument: getEndpointMock({}) as any,
  isLoading: {
    initialState: false,
    changes: false,
    rfq: false,
    pricing: false,
    updateRfq: false,
    updatePricing: false,
    addDocument: false,
    homePricings: false,
    homeRFQs: false,
    cancelRfq: false,
    createRfq: false,
    underliers: false,
    document: false,
    issuerPricing: false,
    issuerPricings: false,
  },
};

export default pricingApiMock;
