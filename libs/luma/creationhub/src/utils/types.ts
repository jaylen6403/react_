export type PricingType = {
  id: string;
  state: string;
};

export type RfqsType = {
  id: string;
  pricingId: string;
  issuer: string;
  state: string;
};
